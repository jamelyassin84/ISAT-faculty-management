import {TRAINING_AND_SEMINAR_ROUTING} from './../../../app-core/routes/training-and-seminars.routing'
import {NgModule} from '@angular/core'
import {TrainingAndSeminarsComponent} from './training-and-seminars.component'
import {TrainingAndSeminarsListComponent} from './training-and-seminars-list/training-and-seminars-list.component'
import {TrainingAndSeminarsAddComponent} from './training-and-seminars-add/training-and-seminars-add.component'
import {TrainingAndSeminarsEditComponent} from './training-and-seminars-edit/training-and-seminars-edit.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

const components = [
    TrainingAndSeminarsComponent,
    TrainingAndSeminarsListComponent,
    TrainingAndSeminarsAddComponent,
    TrainingAndSeminarsEditComponent,
]

const modules = [
    SharedModule,
    RouterModule.forChild(TRAINING_AND_SEMINAR_ROUTING),
]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class TrainingAndSeminarsModule {}
