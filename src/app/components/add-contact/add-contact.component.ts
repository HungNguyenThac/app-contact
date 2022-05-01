import { Component, OnDestroy, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons"
import { BsModalService } from "ngx-bootstrap/modal"
import { ToastrService } from "ngx-toastr"
import { Observable, of, Subscription } from "rxjs"
import { GoogleMapServiceService } from "../../core/services/ggMapService/google-map-service.service"
import { TestGgMapComponent } from "../modal/gg-map-api-modal/test-gg-map.component"
import { ContactsService } from "./../../core/services/contact/contacts.service"
import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { CustomValidatorsService } from "./custom-validator/custom-validators.service"

let apiLoaded!: Subscription

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"],
})
export class AddContactComponent implements OnInit, OnDestroy {
  icon = faLocationCrosshairs
  tabActiveName?: string
  formCreateContact!: FormGroup
  apiLoaded: Observable<boolean> = of(true)
  mapSvInstance!: Observable<boolean>
  test: any

  constructor(
    private router: Router,
    private tabListSv: TabListService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private contactSv: ContactsService,
    private bsModal: BsModalService,
    private mapService: GoogleMapServiceService
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
    apiLoaded = this.mapService
      .initMap()
      .subscribe((rs) => (this.apiLoaded = of(rs)))

    this.handleUrlOnReload()
  }

  ngOnDestroy(): void {
    apiLoaded.unsubscribe()
  }

  handleUrlOnReload() {
    const arrayUrl = this.router.url.split("/")
    this.tabListSv.changeTabList(arrayUrl[2])
    this.tabActiveName = this.tabListSv.tabList.find(
      (x) => x.isActive === true
    )?.name
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
    this.bsModal.show(TestGgMapComponent, {
      class: "modal-md",
      initialState: {
        // process: "addLocation",
      },
    })
    // .content?.send.subscribe((rs) => {})
  }
}
