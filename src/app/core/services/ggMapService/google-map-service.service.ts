import { Injectable } from "@angular/core"
import { Loader } from "@googlemaps/js-api-loader"

@Injectable({
  providedIn: "root",
})
export class GoogleMapServiceService {
  apiLoaded!: Promise<typeof google>
  // mapApiUrl =
  //   "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-cSlQiAoGpdjZlqUY-hojbM9OWiGN42Y&libraries=places&sensor=false"

  mapApiKey = "AIzaSyB-cSlQiAoGpdjZlqUY-hojbM9OWiGN42Y"
  constructor() {
    const loader = new Loader({
      apiKey: this.mapApiKey,
      version: "weekly",
    })

    this.apiLoaded = loader.load()
  }
}
