import {Alert} from '@digital_brand_work/models/core.model'
import {EntityState} from '@ngrx/entity'

export interface AppState {
    alerts: EntityState<Alert>
}
