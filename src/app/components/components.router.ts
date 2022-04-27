import { SearchContactComponent } from "./search-contact/search-contact.component"
import { AddContactComponent } from "./add-contact/add-contact.component"
import { ContactTableComponent } from "./contact-table/contact-table.component"
import { LayoutComponent } from "./layout/layout.component"
import { Routes } from "@angular/router"

export const routesComponents: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "contacts",
        component: ContactTableComponent,
      },
      {
        path: "addcontact",
        component: AddContactComponent,
      },
      {
        path: "searchcontact",
        component: SearchContactComponent,
      },
    ],
  },
]
