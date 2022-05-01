import { Injectable } from "@angular/core"
import { catchError, map, Observable, of, Subscription, tap } from "rxjs"
import { HttpService } from "./../http/http.service"

@Injectable({
  providedIn: "root",
})
export class GoogleMapServiceService {
  apiLoaded: Observable<boolean> = of(true)
  isInitMap: boolean = false
  unscrible!: Subscription
  googleMapApi: string =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-cSlQiAoGpdjZlqUY-hojbM9OWiGN42Y"

  constructor(private httpSv: HttpService) {}

  initMap(): Observable<boolean> {
    return this.httpSv.jsonp(this.googleMapApi, "callback").pipe(
      map(() => false),
      catchError(() => of(true))
    )
  }
}
