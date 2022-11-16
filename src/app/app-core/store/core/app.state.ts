import {Alert} from '@digital_brand_work/models/core.model'
import {EntityState} from '@ngrx/entity'
import {Faculty} from 'app/app-core/models/faculty.model'
import {Publication} from 'app/app-core/models/publication.model'
import {Research} from 'app/app-core/models/research.model'
import {Subject} from 'app/app-core/models/subjects.model'

export interface AppState {
    alerts: EntityState<Alert>
    faculties: EntityState<Faculty>
    profile: EntityState<Faculty>
    publications: EntityState<Publication>
    researches: EntityState<Research>
    subjects: EntityState<Subject>
}
