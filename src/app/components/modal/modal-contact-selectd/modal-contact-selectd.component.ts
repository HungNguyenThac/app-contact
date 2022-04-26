import { AppoveDeleteContactComponent } from "./../appove-delete-contact/appove-delete-contact.component"
import { BsModalService } from "ngx-bootstrap/modal"
import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { ContactsService } from "src/app/core/services/contact/contacts.service"
import { TabListService } from "src/app/core/services/tabList/tab-list.service"
import { IContact } from "./../../../_utils/data/interface"

@Component({
  selector: "app-modal-contact-selectd",
  templateUrl: "./modal-contact-selectd.component.html",
  styleUrls: ["./modal-contact-selectd.component.scss"],
})
export class ModalContactSelectdComponent implements OnInit {
  @Output() send = new EventEmitter<boolean>()
  contact!: IContact
  idx!: number
  formViewContact!: FormGroup
  isReadOnly: boolean = true
  isEditing: boolean = false

  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private contactSv: ContactsService,
    private bsModal: BsModalService
  ) {
    this.formViewContact = this.fb.group({
      contactName: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      address: ["", Validators.required],
      title: [""],
      coordinate: [""],
    })
  }

  ngOnInit(): void {
    this.formViewContact.patchValue({
      contactName: this.contact.contactName,
      phoneNumber: this.contact.phoneNumber,
      address: this.contact.address,
      title: this.contact?.title,
      coordinate: this.contact.coordinate,
    })
  }

  handleClickEdit() {
    this.isEditing = true
    this.isReadOnly = false
  }
  handleClickDelete() {
    this.bsModal
      .show(AppoveDeleteContactComponent, {
        class: "modal-sm",
      })
      .content?.send.subscribe((rs) => {
        if (rs === true) {
          this.contactSv.removeContact(this.idx)
          this.toast.success("Delete contact success")
        }
        this.send.emit()
        this.bsModal.hide()
      })
  }

  handleClickClose() {
    this.bsModal.hide()
  }

  onSubmit($event: any) {
    $event.preventDefault()
    if (this.formViewContact.valid) {
      this.toast.success("Edit contact success")
      this.contactSv.editContact(this.formViewContact.value, this.idx)
      this.formViewContact.reset()
      this.send.emit()
      this.bsModal.hide()
    }
  }
}
