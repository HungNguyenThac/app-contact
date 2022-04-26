import { LoginComponent } from "./modules/login/login/login.component"
import { Routes } from "@angular/router"
import { AppComponent } from "./app.component"
import { LoginModule } from "./modules/login/login.module"

export const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./modules/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  // {
  //   path: "**",
  //   redirectTo: "login",
  // },
]
