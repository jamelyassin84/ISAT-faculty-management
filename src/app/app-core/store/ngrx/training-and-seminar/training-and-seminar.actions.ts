import {TrainingAndSeminar} from './../../../models/training-and-seminar.model'
import {createAction, props} from '@ngrx/store'

const enum ActionEnum {
    LOAD = '[TrainingAndSeminars/System] Load TrainingAndSeminar',
    LOAD_SUCCESS = '[TrainingAndSeminars/API] Load TrainingAndSeminar',

    ADD = '[TrainingAndSeminar/System] Add TrainingAndSeminar',
    ADD_SUCCESS = '[TrainingAndSeminar/API] Add Success TrainingAndSeminar',

    UPSERT = '[TrainingAndSeminar/System] Upsert TrainingAndSeminar',
    UPSERT_SUCCESS = '[TrainingAndSeminar/API] Upsert TrainingAndSeminar',

    REMOVE = '[TrainingAndSeminar/System] Remove TrainingAndSeminar',
    REMOVE_SUCCESS = '[TrainingAndSeminar/API] Remove TrainingAndSeminar',
}

export const LOAD = createAction(ActionEnum.LOAD)

export const LOAD_SUCCESS = createAction(
    ActionEnum.LOAD_SUCCESS,
    props<{trainingAndSeminars: TrainingAndSeminar[]}>(),
)

export const ADD = createAction(
    ActionEnum.ADD,
    props<{trainingAndSeminar: TrainingAndSeminar}>(),
)

export const ADD_SUCCESS = createAction(
    ActionEnum.ADD_SUCCESS,
    props<{trainingAndSeminar: TrainingAndSeminar}>(),
)

export const UPSERT = createAction(
    ActionEnum.UPSERT,
    props<{trainingAndSeminar: TrainingAndSeminar}>(),
)

export const UPSERT_SUCCESS = createAction(
    ActionEnum.UPSERT_SUCCESS,
    props<{trainingAndSeminar: TrainingAndSeminar}>(),
)

export const REMOVE = createAction(ActionEnum.REMOVE, props<{id: string}>())

export const REMOVE_SUCCESS = createAction(
    ActionEnum.REMOVE_SUCCESS,
    props<{id: string}>(),
)
