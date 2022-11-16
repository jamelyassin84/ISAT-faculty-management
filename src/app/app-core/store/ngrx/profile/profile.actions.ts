import {Faculty} from './../../../models/faculty.model'
import {createAction, props} from '@ngrx/store'

const enum ActionEnum {
    LOAD = '[Profile/System] Load Profile',
    LOAD_SUCCESS = '[Profile/API] Load Profile',

    UPSERT = '[Profile/System] Upsert Profile',
    UPSERT_SUCCESS = '[Profile/API] Upsert Profile',
}

export const UPSERT = createAction(
    ActionEnum.UPSERT,
    props<{faculty: Faculty}>(),
)

export const UPSERT_SUCCESS = createAction(
    ActionEnum.UPSERT_SUCCESS,
    props<{faculty: Faculty}>(),
)
