import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { BsModalService } from "ngx-bootstrap/modal"
import { ToastrService } from "ngx-toastr"
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
    private toast: ToastrService,
    private loadingSv: LoadingService,
    private bsModal: BsModalService
  ) {}

  ngOnInit(): void {
    this.loadingSv.next(true)
    if (this.process === "addLocation") {
      this.getInfoWindown()
    }
    if (this.process === "editLocation") {
      this.loadingSv.next(false)
    }
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPosition = event.latLng.toJSON()
    }
  }

  getPositionWhenMoveMarker(event: google.maps.MapMouseEvent) {
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
    if (this.process === "editLocation") {
      this.bsModal.hide(2)
    } else {
      this.bsModal.hide()
    }

    this.send.emit(this.markerPosition)
  }
}
