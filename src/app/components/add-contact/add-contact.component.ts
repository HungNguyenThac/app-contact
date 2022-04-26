import { ToastrService } from "ngx-toastr"
import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { Router } from "@angular/router"
import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"],
})
export class AddContactComponent implements OnInit {
  formCreateContact!: FormGroup
  constructor(
    private router: Router,
    private tabListSv: TabListService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {
    this.formCreateContact = this.fb.group({
      contactName: ["", Validators.required],
      phoneNumber: ["", Validators.required],
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
  }

  onSubmit($event: any) {
    $event.preventDefault()

    if (this.formCreateContact.valid) {
      this.toast.success("Create contact success")
      this.formCreateContact.reset()
    }
  }
}
