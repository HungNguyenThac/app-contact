import { HttpService } from "./../http/http.service"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { catchError, map, Observable, of } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class GoogleMapApiService {
  apiLoaded!: Observable<boolean>

  constructor(private httpSv: HttpService) {}

  getApi() {
    if (!this.apiLoaded) {
      this.apiLoaded = this.httpSv.ggApiLoadingjsonp().pipe(
        map(() => true),
        catchError(() => of(false))
      )
    }
  }
}
