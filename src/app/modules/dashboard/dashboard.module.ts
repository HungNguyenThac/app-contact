import { ComponentsModule } from "./../../components/components.module"
import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { routesDashboard } from "./dashboard.router"
import { DashboardComponent } from "./dashboard/dashboard.component"

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routesDashboard),
  ],
})
export class DashboardModule {}
