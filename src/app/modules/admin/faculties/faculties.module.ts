import {RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'
import {FacultyEditComponent} from './faculty-edit/faculty-edit.component'
import {FacultyAddComponent} from './faculty-add/faculty-add.component'
import {FacultyDetailsComponent} from './faculty-details/faculty-details.component'
import {FacultyListComponent} from './faculty-list/faculty-list.component'
import {FacultiesComponent} from './faculties.component'
import {SharedModule} from 'app/shared/shared.module'
import {FACULTY_ROUTING} from 'app/app-core/routes/faculty.routing'

const components = [
    FacultiesComponent,
    FacultyListComponent,
    FacultyDetailsComponent,
    FacultyAddComponent,
    FacultyEditComponent,
]

const modules = [SharedModule, RouterModule.forChild(FACULTY_ROUTING)]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class FacultiesModule {}
