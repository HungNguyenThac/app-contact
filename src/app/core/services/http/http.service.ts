import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private httpSv: HttpClient) {}
  url!: string
  googleMapApi: string = environment.googleApi

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

  ggApiLoadingjsonp() {
    return this.httpSv.jsonp(this.googleMapApi, "callback")
  }
}
