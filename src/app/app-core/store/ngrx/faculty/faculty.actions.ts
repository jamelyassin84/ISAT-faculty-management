import {Faculty} from './../../../models/faculty.model'
import {createAction, props} from '@ngrx/store'

const enum ActionEnum {
    LOAD = '[Faculty/System] Load Alerts',
    LOAD_SUCCESS = '[Alert/API] Load Alerts',

    ADD = '[Faculty/System] Add Alerts',
    ADD_SUCCESS = '[Faculty/API] Add Alerts',

    UPSERT = '[Faculty/System] Upsert Alerts',
    UPSERT_SUCCESS = '[Faculty/API] Upsert Alerts',

    REMOVE = '[Faculty/System] Remove Alerts',
    REMOVE_SUCCESS = '[Faculty/API] Remove Alerts',
}

export const LOAD = createAction(ActionEnum.LOAD)

export const LOAD_SUCCESS = createAction(
    ActionEnum.LOAD_SUCCESS,
    props<{faculties: Faculty[]}>(),
)

export const ADD = createAction(ActionEnum.ADD, props<{faculty: Faculty}>())

export const ADD_SUCCESS = createAction(
    ActionEnum.ADD_SUCCESS,
    props<{faculty: Faculty}>(),
)

export const UPSERT = createAction(
    ActionEnum.UPSERT,
    props<{faculty: Faculty}>(),
)

export const UPSERT_SUCCESS = createAction(
    ActionEnum.UPSERT_SUCCESS,
    props<{faculty: Faculty}>(),
)

export const REMOVE = createAction(ActionEnum.REMOVE, props<{id: string}>())

export const REMOVE_SUCCESS = createAction(
    ActionEnum.REMOVE_SUCCESS,
    props<{id: string}>(),
)
