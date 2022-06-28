import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { Router } from "@angular/router"
import { BsModalService } from "ngx-bootstrap/modal"
import { ToastrService } from "ngx-toastr"
import { debounceTime, startWith, switchMap, tap } from "rxjs"
import { ContactsService } from "./../../core/services/contact/contacts.service"
import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { IContact } from "./../../_utils/data/interface"
import { ModalContactSelectdComponent } from "./../modal/modal-contact-selectd/modal-contact-selectd.component"

@Component({
  selector: "app-search-contact",
  templateUrl: "./search-contact.component.html",
  styleUrls: ["./search-contact.component.scss"],
})
export class SearchContactComponent implements OnInit {
  tabActiveName: string = ""
  loading: boolean = false
  contactList?: IContact[]
  searchContact = new FormControl()

  constructor(
    private contactsv: ContactsService,
    private tabListSv: TabListService,
    private router: Router,
    private toast: ToastrService,
    private bsModal: BsModalService
  ) {}

  ngOnInit(): void {
    this.contactsv.getContactList()
    this.handleUrlOnReload()
    this.searchContact.valueChanges
      .pipe(
        debounceTime(200),
        tap(() => {
          this.loading = true
        }),
        startWith(""),
        switchMap((query) =>
          this.contactsv.filterContact(query).pipe(
            tap(() => {
              this.loading = false
            })
          )
        )
      )
      .subscribe((contactList) => {
        console.log(contactList)
        this.contactList = contactList
      })
  }

  handleUrlOnReload() {
    if (this.contactsv.contactList.length < 1) {
      this.router.navigate(["/dashboard/contacts"])
      this.toast.error("Contact List is empty")
    }
    const arrayUrl = this.router.url.split("/")
    this.tabListSv.changeTabList(arrayUrl[2])
    const tabName = this.tabListSv.tabList.find(
      (x) => x.isActive === true
    )?.name
    if (tabName) {
      this.tabActiveName = tabName
    }
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
      .content?.send.subscribe(() => {
        this.ngOnInit()
      })
  }
}
