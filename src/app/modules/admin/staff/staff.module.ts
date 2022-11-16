import {NgModule} from '@angular/core'
import {StaffComponent} from './staff.component'
import {StaffListComponent} from './staff-list/staff-list.component'
import {StaffAddComponent} from './staff-add/staff-add.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'
import {STAFF_ROUTING} from 'app/app-core/routes/staff.routing'

const components = [StaffComponent, StaffListComponent, StaffAddComponent]

const modules = [SharedModule, RouterModule.forChild(STAFF_ROUTING)]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class StaffModule {}
