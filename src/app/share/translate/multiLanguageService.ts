import { EventEmitter, Injectable } from "@angular/core"
import { BehaviorSubject, Observable, Subject } from "rxjs"
import { TranslateService } from "@ngx-translate/core"
import { HttpClient } from "@angular/common/http"
import { LangChangeEvent } from "@ngx-translate/core/lib/translate.service"

const DEFAULT_LANGUAGE = "vi"
@Injectable({ providedIn: "root" })
export class MultiLanguageService {
  private _language = new BehaviorSubject<string>("vi")
  private _translationsUrl = "assets/i18n"

  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  public getCurrentLanguage() {
    // const _language = this.cookieService.get('_language');
    const _language = localStorage.getItem("_language")
    if (!_language) {
      this._setCurrentLanguage(DEFAULT_LANGUAGE)
      return DEFAULT_LANGUAGE
    }
    return _language
  }

  private _setCurrentLanguage(language: string) {
    // this.cookieService.set( '_language', language , 30, '/');
    localStorage.setItem("_language", language)
  }

  public changeLanguage(language: string) {
    this._setCurrentLanguage(language)
    this._language.next(language)
  }

  public use(language: string) {
    this.changeLanguage(language)
    return this.translateService.use(language)
  }

  public setDefaultLang(language: string) {
    return this.translateService.setDefaultLang(language)
  }

  public reloadLang(language: string) {
    return this.translateService.reloadLang(language)
  }

  public resetLang(language: string) {
    return this.translateService.resetLang(language)
  }

  private _getLanguage(): Observable<any> {
    return this._language.asObservable()
  }

  public onSetupMultiLanguage(prefixName: string) {
    this._getLanguage().subscribe((value) => {
      const language = value.language
      this.translateService.use(language).subscribe((value) => {
        this.loadTranslations(language, prefixName)
      })
    })

    this.translateService.use(this.getCurrentLanguage()).subscribe((value) => {
      this.loadTranslations(this.getCurrentLanguage(), prefixName)
    })
  }

  private loadTranslations(locale: string, prefixName: string) {
    let cacheBuster = new Date().toISOString().replace(/\\.|:|-/g, "")
    return this.http
      .get(
        `${this._translationsUrl}/${prefixName}/${locale}.json?cacheBuster=${cacheBuster}`
      )
      .subscribe((data: any) => {
        this.translateService.setTranslation(locale, data, true)
      })
  }

  public get(
    key: string | Array<string>,
    interpolateParams?: Object
  ): Observable<string | any> {
    return this.translateService.get(key, interpolateParams)
  }

  public instant(key: string | Array<string>, interpolateParams?: Object) {
    return this.translateService.instant(key, interpolateParams)
  }

  get onLangChange(): EventEmitter<LangChangeEvent> {
    return new this.translateService.onLangChange()
  }
}
