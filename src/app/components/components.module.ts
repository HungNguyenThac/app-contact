import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { RouterModule } from "@angular/router"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { FooterComponent } from "src/app/components/footer/footer.component"
import { AddContactComponent } from "./add-contact/add-contact.component"
import { AsideMenuComponent } from "./aside-menu/aside-menu.component"
import { routesComponents } from "./components.router"
import { ContactTableComponent } from "./contact-table/contact-table.component"
import { HeaderComponent } from "./header/header.component"
import { LayoutComponent } from "./layout/layout.component"
import { AppoveDeleteContactComponent } from "./modal/appove-delete-contact/appove-delete-contact.component"
import { ModalContactSelectdComponent } from "./modal/modal-contact-selectd/modal-contact-selectd.component"
import { SearchContactComponent } from "./search-contact/search-contact.component"
import { GoogleMapsModule } from "@angular/google-maps"
import { TestGgMapComponent } from "./modal/gg-map-api-modal/test-gg-map.component"

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideMenuComponent,
    ContactTableComponent,
    AddContactComponent,
    ModalContactSelectdComponent,
    AppoveDeleteContactComponent,
    SearchContactComponent,
    LayoutComponent,
    TestGgMapComponent,
    TestGgMapComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,

    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesComponents),
  ],
})
export class ComponentsModule {}
