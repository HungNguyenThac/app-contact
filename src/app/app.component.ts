import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Observable } from "rxjs"
import { LoadingService } from "./core/services/loading/loading.service"
import { MultiLanguageService } from "./share/translate/multiLanguageService"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title: string = "app contact"
  constructor(
    private routes: Router,
    private loadingSv: LoadingService,
    private translate: MultiLanguageService
  ) {}
  loading!: Observable<boolean>
  ngOnInit(): void {}
}
