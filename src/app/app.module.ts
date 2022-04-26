import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { routes } from "./app-routing.module"
import { LoginModule } from "./modules/login/login.module"

import { AppComponent } from "./app.component"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
