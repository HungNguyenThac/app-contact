import { moveFromLeft, moveFromRight } from "ngx-router-animations"
import { transition, trigger, useAnimation } from "@angular/animations"
import { fadeAnimation } from "./../../core/common/animations/router.animation"
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { detailExpandAnimation } from "src/app/core/common/animations/detail-expand.animation"
import { TabListService } from "./../../core/services/tabList/tab-list.service"

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  animations: [fadeAnimation],
})
export class LayoutComponent implements OnInit {
  constructor(private tabListSv: TabListService, private route: Router) {}
  getState(outlet: any) {
    return outlet.activatedRouteData.state
  }
  ngOnInit(): void {}
}
