import { LoginComponent } from "./login/login.component"
import { RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { loginRoutes } from "./login.router"

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(loginRoutes)],
})
export class LoginModule {}
