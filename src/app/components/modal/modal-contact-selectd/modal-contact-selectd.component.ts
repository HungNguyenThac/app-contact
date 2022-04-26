import { IContact } from "./../../../_utils/data/interface"
import { EventEmitter, Output } from "@angular/core"
import { Component, Input, OnInit } from "@angular/core"

@Component({
  selector: "app-modal-contact-selectd",
  templateUrl: "./modal-contact-selectd.component.html",
  styleUrls: ["./modal-contact-selectd.component.scss"],
})
export class ModalContactSelectdComponent implements OnInit {
  @Output() send = new EventEmitter<boolean>()
  contact!: IContact

  constructor() {}

  ngOnInit(): void {}
}
