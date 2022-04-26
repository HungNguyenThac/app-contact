import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  tabName: string = ""
  constructor() {}

  ngOnInit(): void {}

  emitTabTitle(title: string) {
    this.tabName = title
  }
}
