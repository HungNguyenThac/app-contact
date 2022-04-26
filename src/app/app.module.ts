import { ModalModule } from "ngx-bootstrap/modal"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { routes } from "./app-routing.module"
import { LoginModule } from "./modules/login/login.module"

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { ToastrModule } from "ngx-toastr"
import { AppComponent } from "./app.component"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LoginModule,
    ModalModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
