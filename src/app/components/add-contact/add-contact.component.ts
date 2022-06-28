import { Component, OnDestroy, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons"
import { BsModalService } from "ngx-bootstrap/modal"
import { ToastrService } from "ngx-toastr"
import { Observable } from "rxjs"
import { GoogleMapServiceService } from "./../../core/services/ggMapService/google-map-service.service"
import { LoadingService } from "./../../core/services/loading/loading.service"

import { TestGgMapComponent } from "../modal/gg-map-api-modal/test-gg-map.component"
import { ContactsService } from "./../../core/services/contact/contacts.service"
import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { CustomValidatorsService } from "./custom-validator/custom-validators.service"

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"],
})
export class AddContactComponent implements OnInit, OnDestroy {
  icon = faLocationCrosshairs
  tabActiveName: string = ""
  formCreateContact!: FormGroup
  apiLoaded: boolean = true
  mapSvInstance!: Observable<boolean>
  test: any

  constructor(
    private router: Router,
    private tabListSv: TabListService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private contactSv: ContactsService,
    private bsModal: BsModalService,
    private googleMap: GoogleMapServiceService,
    private loadingSv: LoadingService
  ) {
    this.formCreateContact = this.fb.group({
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
    this.handleUrlOnReload()
    this.loadingSv.next(true)
    this.googleMap.apiLoaded
      .then(() => (this.apiLoaded = false))
      .catch(() => (this.apiLoaded = true))
      .finally(() => this.loadingSv.next(false))
  }

  ngOnDestroy(): void {}

  handleUrlOnReload() {
    const arrayUrl = this.router.url.split("/")
    this.tabListSv.changeTabList(arrayUrl[2])
    const tabName = this.tabListSv.tabList.find(
      (x) => x.isActive === true
    )?.name
    if (tabName) {
      this.tabActiveName = tabName
    }
  }

  onSubmit($event: any) {
    $event.preventDefault()
    if (this.formCreateContact.valid) {
      this.toast.success("Create contact success")
      this.test = this.formCreateContact.value
      this.test.phoneNumber.toString().startsWith("0")
        ? ""
        : (this.test.phoneNumber = `0${this.test.phoneNumber}`)
      this.contactSv.addContact(this.test)
      this.formCreateContact.reset()
    }
  }

  handleClickOpenGgMap() {
    this.bsModal
      .show(TestGgMapComponent, {
        class: "modal-lg",
        initialState: {
          process: "addLocation",
        },
      })
      .content?.send.subscribe((rs: google.maps.LatLngLiteral) => {
        this.formCreateContact.patchValue({
          coordinate: rs,
        })
      })
  }
}
