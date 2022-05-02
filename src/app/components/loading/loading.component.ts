import { LoadingService } from "./../../core/services/loading/loading.service"
import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"],
})
export class LoadingComponent implements OnInit {
  constructor(public loading: LoadingService) {}

  ngOnInit(): void {}
}
