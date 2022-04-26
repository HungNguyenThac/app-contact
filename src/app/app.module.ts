import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { routes } from "./app-routing.module"
import { LoginModule } from "./modules/login/login.module"

import { AppComponent } from "./app.component"
import { ToastrModule } from "ngx-toastr"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LoginModule,

    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
