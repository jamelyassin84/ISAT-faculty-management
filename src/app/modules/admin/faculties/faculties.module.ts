import {RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'
import {FacultyEditComponent} from './faculty-edit/faculty-edit.component'
import {FacultyAddComponent} from './faculty-add/faculty-add.component'
import {FacultyDetailsComponent} from './faculty-details/faculty-details.component'
import {FacultyListComponent} from './faculty-list/faculty-list.component'
import {FacultiesComponent} from './faculties.component'
import {SharedModule} from 'app/shared/shared.module'

const components = [
    FacultiesComponent,
    FacultyListComponent,
    FacultyDetailsComponent,
    FacultyAddComponent,
    FacultyEditComponent,
]

const modules = [SharedModule, RouterModule]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class FacultiesModule {}
