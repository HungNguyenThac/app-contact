import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { ContactsService } from "../../core/services/contact/contacts.service"
import { IContact } from "./../../_utils/data/interface"

@Component({
  selector: "app-contact-table",
  templateUrl: "./contact-table.component.html",
  styleUrls: ["./contact-table.component.scss"],
})
export class ContactTableComponent implements OnInit {
  contactList: IContact[] = []

  constructor(
    private contactsv: ContactsService,
    private tabListsv: TabListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactList = this.contactsv.contactList
    this.handleUrlOnReload()
  }

  handleUrlOnReload() {
    const arrayUrl = this.router.url.split("/")
    this.tabListsv.changeTabList(arrayUrl[2])
  }
}
