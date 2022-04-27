import { Injectable } from "@angular/core"
import { map, Observable, of } from "rxjs"
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
  }

  editContact(contact: IContact, idx: number) {
    this.contactList.splice(idx, 1, contact)
    Storage.set("contact", this.contactList)
  }

  removeContact(idx: number) {
    this.contactList.splice(idx, 1)
    Storage.set("contact", this.contactList)
  }

  filterContact(param: any): Observable<IContact[]> {
    return of(this.contactList).pipe(
      map((contact) =>
        contact.filter((contact) => {
          if (!contact) return true
          return (
            contact.contactName.toLowerCase().includes(param.toLowerCase()) ||
            contact.address.toLowerCase().includes(param.toLowerCase()) ||
            contact.phoneNumber.includes(param)
          )
        })
      )
    )
  }
}
