import { LoginComponent } from "./login/login.component"
import { RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule],
})
export class LoginModule {}
