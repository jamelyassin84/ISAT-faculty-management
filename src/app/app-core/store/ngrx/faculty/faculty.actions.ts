import {Faculty} from './../../../models/faculty.model'
import {createAction, props} from '@ngrx/store'

const enum ActionEnum {
    LOAD = '[Faculty/System] Load Faculties',
    LOAD_SUCCESS = '[Faculty/API] Load Faculties',

    ADD = '[Faculty/System] Add Faculty',
    ADD_SUCCESS = '[Faculty/API] Add Faculty',

    UPSERT = '[Faculty/System] Upsert Faculty',
    UPSERT_SUCCESS = '[Faculty/API] Upsert Faculty',

    REMOVE = '[Faculty/System] Remove Faculty',
    REMOVE_SUCCESS = '[Faculty/API] Remove Faculty',
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
