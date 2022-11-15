import {NgModule} from '@angular/core'
import {DashboardTopCardsComponent} from './dashboard-top-cards/dashboard-top-cards.component'
import {DashboardTopChartsComponent} from './dashboard-top-charts/dashboard-top-charts.component'
import {DashboardComponent} from './dashboard.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'
import {DASHBOARD_ROUTING} from 'app/app-core/routes/dashboard.routing'

const components = [
    DashboardTopCardsComponent,
    DashboardTopChartsComponent,
    DashboardComponent,
]

const modules = [SharedModule, RouterModule.forChild(DASHBOARD_ROUTING)]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class DashboardModule {}
