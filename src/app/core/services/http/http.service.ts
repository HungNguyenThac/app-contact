import { catchError, Observable, of } from "rxjs"
import { map } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class HttpService {
  hello!: Observable<boolean>
  constructor(private httpSv: HttpClient) {}
  url!: string

  headers = {
    "Content-Type": "application/json",
  }

  get() {
    return this.httpSv.get(this.url)
  }

  post(data: any) {
    return this.httpSv.post(this.url, data, {
      headers: { ...this.headers },
    })
  }

  jsonp(url: string, option: string = "callback") {
    return this.httpSv.jsonp(url, option)
  }
}
