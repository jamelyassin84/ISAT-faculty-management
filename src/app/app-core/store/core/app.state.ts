import {Alert} from '@digital_brand_work/models/core.model'
import {EntityState} from '@ngrx/entity'
import {Faculty} from 'app/app-core/models/faculty.model'
import {Publication} from 'app/app-core/models/publication.model'

export interface AppState {
    alerts: EntityState<Alert>
    faculties: EntityState<Faculty>
    profile: EntityState<Faculty>
    publications: EntityState<Publication>
}
