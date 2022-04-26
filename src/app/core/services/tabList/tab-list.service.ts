import { Injectable } from "@angular/core"
import { of } from "rxjs"
import { asideMenu } from "src/app/_utils/data/asideMenu"
import { IAsideMenu } from "./../../../_utils/data/interface"

@Injectable({
  providedIn: "root",
})
export class TabListService {
  constructor() {}

  tabList: IAsideMenu[] = []

  getTabList() {
    of<IAsideMenu[]>(asideMenu).subscribe((rs) => (this.tabList = rs))
  }

  changeTabList(param: string) {
    this.tabList.map((x) => {
      if (x.isActive === true) {
        x.url === param ? "" : (x.isActive = false)
      }

      if (x.url === param) {
        x.isActive = true
      }
    })
  }
}
