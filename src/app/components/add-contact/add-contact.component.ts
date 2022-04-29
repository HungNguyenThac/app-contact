import { Observable } from "rxjs"
import { GoogleMapApiService } from "./../../core/services/ggMapApi/google-map-api.service"
import { HttpService } from "./../../core/services/http/http.service"
import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons"
import { ToastrService } from "ngx-toastr"
import { ContactsService } from "./../../core/services/contact/contacts.service"
import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { IContact } from "./../../_utils/data/interface"
import { CustomValidatorsService } from "./custom-validator/custom-validators.service"

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"],
})
export class AddContactComponent implements OnInit {
  icon = faLocationCrosshairs
  tabActiveName?: string
  formCreateContact!: FormGroup
  apiLoaded!: Observable<boolean>
  test!: IContact
  constructor(
    private router: Router,
    private tabListSv: TabListService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private contactSv: ContactsService,
    private mapSv: GoogleMapApiService
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
    this.apiLoaded = this.mapSv.apiLoaded
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
}
