import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-gg-map-api.modal",
  templateUrl: "./gg-map-api.modal.component.html",
  styleUrls: ["./gg-map-api.modal.component.scss"],
})
export class GgMapApiModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 }
  display!: google.maps.LatLngLiteral
  zoom = 4

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.center = event.latLng.toJSON()
    }
    console.log("center", this.center)
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.display = event.latLng.toJSON()
    }
    console.log("display", this.display)
  }
}
