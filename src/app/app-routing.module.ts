import { Routes } from "@angular/router"
import { AppComponent } from "./app.component"
import { LoginComponent } from "./modules/login/login/login.component"

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
  {
    path: "**",
    redirectTo: "dashboard",
  },
]
