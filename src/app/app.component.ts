import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Observable } from "rxjs"
import { LoadingService } from "./core/services/loading/loading.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private routes: Router, private loadingSv: LoadingService) {}
  loading!: Observable<boolean>
  ngOnInit(): void {}

  switchUrl() {
    this.loadingSv.next(true)
    setTimeout(() => {
      this.routes.navigate(["/asdfasdf"])
      this.loadingSv.next(false)
    }, 1000)
  }
}
