import {createAction, props} from '@ngrx/store'
import {Publication} from 'app/app-core/models/publication.model'

const enum ActionEnum {
    LOAD = '[Publications/System] Load Publications',
    LOAD_SUCCESS = '[Publications/API] Load Publications',

    ADD = '[Publication/System] Add Publication',
    ADD_SUCCESS = '[Publication/API] Add Publication',

    UPSERT = '[Publication/System] Upsert Publication',
    UPSERT_SUCCESS = '[Publication/API] Upsert Publication',

    REMOVE = '[Publication/System] Remove Publication',
    REMOVE_SUCCESS = '[Publication/API] Remove Publication',
}

export const LOAD = createAction(ActionEnum.LOAD)

export const LOAD_SUCCESS = createAction(
    ActionEnum.LOAD_SUCCESS,
    props<{publications: Publication[]}>(),
)

export const ADD = createAction(
    ActionEnum.ADD,
    props<{publication: Publication}>(),
)

export const ADD_SUCCESS = createAction(
    ActionEnum.ADD_SUCCESS,
    props<{publication: Publication}>(),
)

export const UPSERT = createAction(
    ActionEnum.UPSERT,
    props<{publication: Publication}>(),
)

export const UPSERT_SUCCESS = createAction(
    ActionEnum.UPSERT_SUCCESS,
    props<{publication: Publication}>(),
)

export const REMOVE = createAction(ActionEnum.REMOVE, props<{id: string}>())

export const REMOVE_SUCCESS = createAction(
    ActionEnum.REMOVE_SUCCESS,
    props<{id: string}>(),
)
