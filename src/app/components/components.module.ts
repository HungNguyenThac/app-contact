import { routesComponents } from "./components.router"
import { RouterModule } from "@angular/router"
import { AsideMenuComponent } from "./aside-menu/aside-menu.component"
import { FooterComponent } from "src/app/components/footer/footer.component"
import { HeaderComponent } from "./header/header.component"
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { LayoutComponent } from "./layout/layout.component"
import { ContactTableComponent } from "./contact-table/contact-table.component"
import { AddContactComponent } from "./add-contact/add-contact.component"
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AsideMenuComponent,
    ContactTableComponent,
    AddContactComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesComponents),
  ],
})
export class ComponentsModule {}
