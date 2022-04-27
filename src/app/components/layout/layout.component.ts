import { Router } from "@angular/router"
import { TabListService } from "./../../core/services/tabList/tab-list.service"
import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  constructor(private tabListSv: TabListService, private route: Router) {}

  ngOnInit(): void {}
}
