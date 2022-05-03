import { LoadingService } from "./../../../core/services/loading/loading.service"
import { Observable } from "rxjs"
import { Router } from "@angular/router"
import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
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
