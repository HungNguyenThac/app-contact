import { HttpClient } from "@angular/common/http"
import { Component, OnInit } from "@angular/core"
import { Observable, of } from "rxjs"
import { GoogleMapServiceService } from "./../../../core/services/ggMapService/google-map-service.service"

@Component({
  selector: "app-test-gg-map",
  templateUrl: "./test-gg-map.component.html",
  styleUrls: ["./test-gg-map.component.scss"],
})
export class TestGgMapComponent implements OnInit {
  apiLoaded: Observable<boolean> = of(true)

  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 }
  display!: google.maps.LatLngLiteral
  zoom = 6

  constructor(httpClient: HttpClient, private mapSv: GoogleMapServiceService) {}

  ngOnInit(): void {
    this.mapSv.apiLoaded
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.center = event.latLng?.toJSON()
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.display = event.latLng.toJSON()
    }
  }

  markerOptions: google.maps.MarkerOptions = { draggable: true }
  markerPositions: google.maps.LatLngLiteral[] = []

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPositions.splice(0, 1, event.latLng.toJSON())
    }
  }
}
