import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { IAsideMenu } from "./../../_utils/data/interface"

import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: "app-aside-menu",
  templateUrl: "./aside-menu.component.html",
  styleUrls: ["./aside-menu.component.scss"],
})
export class AsideMenuComponent implements OnInit {
  @Output() tabTitle = new EventEmitter<string>()
  tabList: IAsideMenu[] = []
  tabActiveId!: string

  constructor(
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private tabListsv: TabListService
  ) {}

  ngOnInit(): void {
    this.tabListsv.getTabList()
    this.tabList = this.tabListsv.tabList
  }

  changeUrl(url: string) {
    this.router.navigate(["/dashboard", url])
  }
}
