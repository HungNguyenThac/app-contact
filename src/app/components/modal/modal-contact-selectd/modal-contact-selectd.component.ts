import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { BsModalService } from "ngx-bootstrap/modal"
import { ToastrService } from "ngx-toastr"
import { ContactsService } from "src/app/core/services/contact/contacts.service"
import { IContact } from "./../../../_utils/data/interface"
import { CustomValidatorsService } from "./../../add-contact/custom-validator/custom-validators.service"
import { AppoveDeleteContactComponent } from "./../appove-delete-contact/appove-delete-contact.component"

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
      phoneNumber: ["", CustomValidatorsService.validPhoneNumber],
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
      const test = this.formViewContact.value
      test.phoneNumber = `0${test.phoneNumber}`
      this.contactSv.editContact(test, this.idx)
      this.formViewContact.reset()
      this.send.emit()
      this.bsModal.hide()
    }
  }
}
