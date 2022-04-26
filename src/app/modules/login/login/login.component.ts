import { Router } from "@angular/router"
import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  redirectToDashboard() {
    this.route.navigate(["/dashboard"])
  }
}
