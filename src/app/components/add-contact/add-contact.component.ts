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
    private fb: FormBuilder
  ) {
    this.formCreateContact = this.fb.group({
      contactName: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      title: [""],
      coordinate: [""],
      address: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.handleUrlOnReload()
  }

  handleUrlOnReload() {
    const arrayUrl = this.router.url.split("/")
    this.tabListSv.changeTabList(arrayUrl[2])
  }

  onSubmit(event: any) {
    console.log(event)
  }
}
