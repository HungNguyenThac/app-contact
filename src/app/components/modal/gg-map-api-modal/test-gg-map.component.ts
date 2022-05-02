import { BsModalService } from "ngx-bootstrap/modal"
import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { ToastrService } from "ngx-toastr"
import { GoogleMapServiceService } from "./../../../core/services/ggMapService/google-map-service.service"
import { LoadingService } from "./../../../core/services/loading/loading.service"

@Component({
  selector: "app-test-gg-map",
  templateUrl: "./test-gg-map.component.html",
  styleUrls: ["./test-gg-map.component.scss"],
})
export class TestGgMapComponent implements OnInit {
  @Output() send = new EventEmitter<google.maps.LatLngLiteral>()
  infoWindow = new google.maps.InfoWindow()
  process!: string

  markerOptions: google.maps.MarkerOptions = { draggable: true }
  markerPosition!: google.maps.LatLngLiteral
  center!: google.maps.LatLngLiteral
  zoom = 17

  constructor(
    private mapSv: GoogleMapServiceService,
    private toast: ToastrService,
    private loadingSv: LoadingService,
    private bsModal: BsModalService
  ) {}

  ngOnInit(): void {
    this.getInfoWindown()
    this.loadingSv.next(true)
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPosition = event.latLng.toJSON()
    }
  }

  getInfoWindown() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          this.center = pos
          this.markerPosition = pos
          this.loadingSv.next(false)
        },
        () => {
          this.toast.error("Get current location failed!")
          this.loadingSv.next(false)
        }
      )
    } else {
      this.toast.error("Browser doesn't support!")
      this.loadingSv.next(false)
    }
  }

  confirmLocation($event: any) {
    $event.preventDefault()
    this.bsModal.hide()
    this.send.emit(this.markerPosition)
  }
}
