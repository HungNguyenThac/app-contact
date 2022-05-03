import { Routes } from "@angular/router"
import { AppComponent } from "./app.component"
import { LoginComponent } from "./modules/login/login/login.component"

export const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [{ path: "", component: LoginComponent }],
  },

  {
    path: "dashboard",
    loadChildren: () =>
      import("./components/components.module").then((m) => m.ComponentsModule),
  },
  {
    path: "**",
    redirectTo: "dashboard/contacts",
  },
]
