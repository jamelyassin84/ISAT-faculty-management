import {createAction, props} from '@ngrx/store'
import {Subject} from 'app/app-core/models/subjects.model'

const enum ActionEnum {
    LOAD = '[Subjects/System] Load Subjects',
    LOAD_SUCCESS = '[Subjects/API] Load Subjects',

    ADD = '[Subject/System] Add Subject',
    ADD_SUCCESS = '[Subject/API] Subject Research',

    UPSERT = '[Subject/System] Upsert Subject',
    UPSERT_SUCCESS = '[Subject/API] Upsert Subject',

    REMOVE = '[Subject/System] Remove Subject',
    REMOVE_SUCCESS = '[Subject/API] Remove Subject',
}

export const LOAD = createAction(ActionEnum.LOAD)

export const LOAD_SUCCESS = createAction(
    ActionEnum.LOAD_SUCCESS,
    props<{subjects: Subject[]}>(),
)

export const ADD = createAction(ActionEnum.ADD, props<{subject: Subject}>())

export const ADD_SUCCESS = createAction(
    ActionEnum.ADD_SUCCESS,
    props<{subject: Subject}>(),
)

export const UPSERT = createAction(
    ActionEnum.UPSERT,
    props<{subject: Subject}>(),
)

export const UPSERT_SUCCESS = createAction(
    ActionEnum.UPSERT_SUCCESS,
    props<{subject: Subject}>(),
)

export const REMOVE = createAction(ActionEnum.REMOVE, props<{id: string}>())

export const REMOVE_SUCCESS = createAction(
    ActionEnum.REMOVE_SUCCESS,
    props<{id: string}>(),
)
