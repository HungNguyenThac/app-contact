import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { ContactsService } from "./../../core/services/contact/contacts.service"
import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { CustomValidatorsService } from "./custom-validator/custom-validators.service"

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"],
})
export class AddContactComponent implements OnInit {
  tabActiveName?: string
  formCreateContact!: FormGroup
  constructor(
    private router: Router,
    private tabListSv: TabListService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private contactSv: ContactsService
  ) {
    this.formCreateContact = this.fb.group({
      contactName: ["", Validators.required],
      phoneNumber: ["", CustomValidatorsService.validPhoneNumber],
      address: ["", Validators.required],
      title: [""],
      coordinate: [""],
    })
  }

  ngOnInit(): void {
    this.handleUrlOnReload()
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
      const test = this.formCreateContact.value
      test.phoneNumber = `0${test.phoneNumber}`
      this.contactSv.addContact(test)
      this.formCreateContact.reset()
    }
  }
}
