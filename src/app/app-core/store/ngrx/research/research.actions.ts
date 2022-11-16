import {createAction, props} from '@ngrx/store'
import {Research} from 'app/app-core/models/research.model'

const enum ActionEnum {
    LOAD = '[Researches/System] Load Researches',
    LOAD_SUCCESS = '[Researches/API] Load Researches',

    ADD = '[Research/System] Add Research',
    ADD_SUCCESS = '[Research/API] Add Research',

    UPSERT = '[Research/System] Upsert Research',
    UPSERT_SUCCESS = '[Research/API] Upsert Research',

    REMOVE = '[Research/System] Remove Research',
    REMOVE_SUCCESS = '[Research/API] Remove Research',
}

export const LOAD = createAction(ActionEnum.LOAD)

export const LOAD_SUCCESS = createAction(
    ActionEnum.LOAD_SUCCESS,
    props<{researches: Research[]}>(),
)

export const ADD = createAction(ActionEnum.ADD, props<{research: Research}>())

export const ADD_SUCCESS = createAction(
    ActionEnum.ADD_SUCCESS,
    props<{research: Research}>(),
)

export const UPSERT = createAction(
    ActionEnum.UPSERT,
    props<{research: Research}>(),
)

export const UPSERT_SUCCESS = createAction(
    ActionEnum.UPSERT_SUCCESS,
    props<{research: Research}>(),
)

export const REMOVE = createAction(ActionEnum.REMOVE, props<{id: string}>())

export const REMOVE_SUCCESS = createAction(
    ActionEnum.REMOVE_SUCCESS,
    props<{id: string}>(),
)
