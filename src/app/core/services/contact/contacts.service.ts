import { Injectable } from "@angular/core"
import { of } from "rxjs"
import { IContact } from "../../../_utils/data/interface"
import { Storage } from "../../../_utils/storage/storage"

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  contactList: IContact[] = []

  constructor() {}

  getContactList() {
    this.contactList = Storage.get("contact", [])
  }

  addContact(contact: IContact) {
    this.contactList = [...this.contactList, contact]
    Storage.set("contact", this.contactList)
    of(this.contactList)
  }

  editContact(contact: IContact) {
    this.contactList = [...this.contactList, contact]
    Storage.set("contact", this.contactList)
    of(this.contactList)
  }

  removeContact(contact: IContact) {
    Storage.remove("contact")
    of(this.contactList)
  }
}
