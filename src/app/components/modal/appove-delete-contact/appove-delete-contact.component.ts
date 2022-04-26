import { BsModalService } from "ngx-bootstrap/modal"
import { EventEmitter, Output } from "@angular/core"
import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-appove-delete-contact",
  templateUrl: "./appove-delete-contact.component.html",
  styleUrls: ["./appove-delete-contact.component.scss"],
})
export class AppoveDeleteContactComponent implements OnInit {
  @Output() send = new EventEmitter<boolean>()
  constructor(private bsModal: BsModalService) {}

  ngOnInit(): void {}

  handleApprove() {
    this.send.emit(true)
    this.bsModal.hide()
  }
  handleReject() {
    this.bsModal.hide()
    this.send.emit(false)
  }
}
