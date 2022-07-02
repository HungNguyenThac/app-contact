import { LoadingService } from "./../../core/services/loading/loading.service"
import { ToastrService } from "ngx-toastr"
import { ContactsService } from "src/app/core/services/contact/contacts.service"
import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { IAsideMenu } from "./../../_utils/data/interface"

import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { MultiLanguageService } from "src/app/share/translate/multiLanguageService"

@Component({
  selector: "app-aside-menu",
  templateUrl: "./aside-menu.component.html",
  styleUrls: ["./aside-menu.component.scss"],
})
export class AsideMenuComponent implements OnInit {
  // @Output() tabTitle = new EventEmitter<string>()
  tabList: IAsideMenu[] = []
  tabActiveId!: string
  category: string = ""
  constructor(
    private router: Router,
    private tabListsv: TabListService,
    private contactSv: ContactsService,
    private toast: ToastrService,
    private loadingSv: LoadingService,
    private translate: MultiLanguageService
  ) {}

  ngOnInit(): void {
    this.tabListsv.getTabList()
    this.tabList = this.tabListsv.tabList
    this.category = this.translate.instant("asidemenu.category.title")
  }

  changeUrl(url: string) {
    if (url === "searchcontact") {
      this.contactSv.getContactList()
      if (this.contactSv.contactList.length === 0) {
        this.toast.error("Contact list is empty!")
        return
      }
    }
    this.router.navigate(["/dashboard", url])
  }

  logout() {
    // this.loadingSv.next(true)
    this.router.navigate(["/"])
  }
}
