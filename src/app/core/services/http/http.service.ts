import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private httpSv: HttpClient) {}
  url!: string
  googleMapApi: string =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-cSlQiAoGpdjZlqUY-hojbM9OWiGN42Y"

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
