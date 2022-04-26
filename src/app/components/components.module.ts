import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { FooterComponent } from "src/app/components/footer/footer.component"
import { AddContactComponent } from "./add-contact/add-contact.component"
import { AsideMenuComponent } from "./aside-menu/aside-menu.component"
import { routesComponents } from "./components.router"
import { ContactTableComponent } from "./contact-table/contact-table.component"
import { HeaderComponent } from "./header/header.component"
import { LayoutComponent } from "./layout/layout.component"
import { ModalContactSelectdComponent } from "./modal/modal-contact-selectd/modal-contact-selectd.component"

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AsideMenuComponent,
    ContactTableComponent,
    AddContactComponent,
    ModalContactSelectdComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesComponents),
  ],
})
export class ComponentsModule {}
