import { FormControl } from "@angular/forms"
import { MultiLanguageService } from "./../../share/translate/multiLanguageService"
import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(public translate: MultiLanguageService) {}
  languageForm = new FormControl()
  ngOnInit(): void {
    this.languageForm.valueChanges.subscribe((value) => {
      this.translate.use(value)
    })
  }
}
