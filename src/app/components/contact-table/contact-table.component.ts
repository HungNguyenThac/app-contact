import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { BsModalService } from "ngx-bootstrap/modal"
import { ContactsService } from "../../core/services/contact/contacts.service"
import { ModalContactSelectdComponent } from "../modal/modal-contact-selectd/modal-contact-selectd.component"
import { TabListService } from "./../../core/services/tabList/tab-list.service"
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
    private router: Router,
    private bsModal: BsModalService
  ) {}

  ngOnInit(): void {
    this.contactsv.getContactList()
    this.contactList = this.contactsv.contactList
    this.handleUrlOnReload()
  }

  handleUrlOnReload() {
    const arrayUrl = this.router.url.split("/")
    this.tabListsv.changeTabList(arrayUrl[2])
  }

  handleSelectContact(contact: IContact, idx: number) {
    this.bsModal
      .show(ModalContactSelectdComponent, {
        class: "modal-md",
        initialState: {
          contact: contact,
          idx: idx,
        },
      })
      .content?.send.subscribe((rs) => {
        this.ngOnInit()
      })
  }
}
