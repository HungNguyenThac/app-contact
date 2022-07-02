import { MultiLanguageService } from "./../../share/translate/multiLanguageService"
import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { BsModalService } from "ngx-bootstrap/modal"
import { ContactsService } from "../../core/services/contact/contacts.service"
import { ModalContactSelectdComponent } from "../modal/modal-contact-selectd/modal-contact-selectd.component"
import { LoadingService } from "./../../core/services/loading/loading.service"
import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { IContact } from "./../../_utils/data/interface"
import { transition, trigger, useAnimation } from "@angular/animations"
import { moveFromRight } from "ngx-router-animations"

@Component({
  selector: "app-contact-table",
  templateUrl: "./contact-table.component.html",
  styleUrls: ["./contact-table.component.scss"],
})
export class ContactTableComponent implements OnInit {
  contactList: IContact[] = []
  tabActiveName: string = ""

  constructor(
    private contactsv: ContactsService,
    private tabListsv: TabListService,
    private router: Router,
    private bsModal: BsModalService,
    private loading: LoadingService,
    private translate: MultiLanguageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.contactsv.getContactList()
    this.contactList = this.contactsv.contactList
    this.handleUrlOnReload()
  }

  handleUrlOnReload() {
    const arrayUrl = this.router.url.split("/")
    this.tabListsv.changeTabList(arrayUrl[2])

    const tabName = this.tabListsv.tabList.find(
      (x) => x.isActive === true
    )?.name
    if (tabName) {
      this.tabActiveName = tabName
    }
  }

  handleSelectContact(contact: IContact, idx: number) {
    this.loading.next(true)
    this.bsModal
      .show(ModalContactSelectdComponent, {
        class: "modal-md",
        initialState: {
          contact: contact,
          idx: idx,
        },
        id: 1,
      })
      .content?.send.subscribe((rs) => {
        this.ngOnInit()
      })
  }
}
