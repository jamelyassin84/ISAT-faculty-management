import {Alert} from '@digital_brand_work/models/core.model'
import {EntityState} from '@ngrx/entity'
import {Faculty} from 'app/app-core/models/faculty.model'

export interface AppState {
    alerts: EntityState<Alert>
    faculties: EntityState<Faculty>
}
