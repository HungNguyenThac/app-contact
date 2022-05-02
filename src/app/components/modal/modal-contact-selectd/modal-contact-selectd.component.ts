import { TestGgMapComponent } from "./../gg-map-api-modal/test-gg-map.component"
import { LoadingService } from "./../../../core/services/loading/loading.service"
import { GoogleMapServiceService } from "./../../../core/services/ggMapService/google-map-service.service"
import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { BsModalService } from "ngx-bootstrap/modal"
import { ToastrService } from "ngx-toastr"
import { ContactsService } from "src/app/core/services/contact/contacts.service"
import { IContact } from "./../../../_utils/data/interface"
import { CustomValidatorsService } from "./../../add-contact/custom-validator/custom-validators.service"
import { AppoveDeleteContactComponent } from "./../appove-delete-contact/appove-delete-contact.component"
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: "app-modal-contact-selectd",
  templateUrl: "./modal-contact-selectd.component.html",
  styleUrls: ["./modal-contact-selectd.component.scss"],
})
export class ModalContactSelectdComponent implements OnInit {
  @Output() send = new EventEmitter<boolean>()
  contact!: IContact
  test!: IContact
  icon = faLocationCrosshairs
  idx!: number
  formViewContact!: FormGroup
  isEditing: boolean = false
  apiLoaded: boolean = false

  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private contactSv: ContactsService,
    private bsModal: BsModalService,
    private googleMap: GoogleMapServiceService,
    private loadingSv: LoadingService
  ) {
    this.formViewContact = this.fb.group({
      contactName: ["", Validators.required],
      phoneNumber: ["", CustomValidatorsService.validPhoneNumber],
      address: ["", Validators.required],
      title: [""],
      coordinate: this.fb.group({
        lat: [""],
        lng: [""],
      }),
    })
  }

  ngOnInit(): void {
    this.formViewContact.patchValue({
      contactName: this.contact.contactName,
      phoneNumber: this.contact.phoneNumber,
      address: this.contact.address,
      title: this.contact?.title,
      coordinate: this.contact.coordinate,
    })

    this.googleMap.apiLoaded
      .then(() => (this.apiLoaded = false))
      .catch(() => (this.apiLoaded = true))
      .finally(() => this.loadingSv.next(false))
  }

  handleClickEdit() {
    this.isEditing = true
  }

  backToView() {
    this.isEditing = false
  }

  handleClickDelete() {
    this.bsModal
      .show(AppoveDeleteContactComponent, {
        class: "modal-sm",
      })
      .content?.send.subscribe((rs) => {
        if (rs === true) {
          this.contactSv.removeContact(this.idx)
          this.toast.success("Delete contact success")
        }
        this.send.emit()
        this.bsModal.hide()
      })
  }

  handleClickClose() {
    this.bsModal.hide()
  }

  onSubmit($event: any) {
    $event.preventDefault()
    if (this.formViewContact.valid) {
      this.toast.success("Edit contact success")
      this.test = this.formViewContact.value
      this.test.phoneNumber.toString().startsWith("0")
        ? ""
        : (this.test.phoneNumber = `0${this.test.phoneNumber}`)
      this.contactSv.editContact(this.test, this.idx)
      this.formViewContact.reset()
      this.send.emit()
      this.bsModal.hide(1)
    }
  }

  openGoogleMap() {
    this.bsModal
      .show(TestGgMapComponent, {
        class: "modal-lg",
        initialState: {
          process: "editLocation",
          center: this.contact.coordinate,
          markerPosition: this.contact.coordinate,
        },
        id: 2,
      })
      .content?.send.subscribe((rs: google.maps.LatLngLiteral) => {
        this.formViewContact.patchValue({
          coordinate: rs,
        })
      })
  }
}
