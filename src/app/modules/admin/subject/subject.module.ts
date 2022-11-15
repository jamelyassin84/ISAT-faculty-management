import {NgModule} from '@angular/core'
import {SubjectComponent} from './subject.component'
import {SharedModule} from 'app/shared/shared.module'
import {SubjectAddComponent} from './subject-add/subject-add.component'
import {SubjectListComponent} from './subject-list/subject-list.component'
import {RouterModule} from '@angular/router'
import {SUBJECT_ROUTING} from 'app/app-core/routes/subject.routing'

const components = [SubjectComponent, SubjectListComponent, SubjectAddComponent]

const modules = [SharedModule, RouterModule.forChild(SUBJECT_ROUTING)]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class SubjectModule {}
