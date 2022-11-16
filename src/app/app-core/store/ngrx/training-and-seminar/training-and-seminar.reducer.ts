import {LoadingStateEnum} from './../../../enum/loading-state.enum'
import {createReducer, on} from '@ngrx/store'
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import {StoreAction} from '../../core/action.enum'
import {TrainingAndSeminar} from 'app/app-core/models/training-and-seminar.model'

export interface State extends EntityState<TrainingAndSeminar> {
    loading?: LoadingStateEnum
}

export const adapter: EntityAdapter<TrainingAndSeminar> =
    createEntityAdapter<TrainingAndSeminar>()

export const initialState: State = adapter.getInitialState({
    loading: LoadingStateEnum.IDLE,
})

export const trainingAndSeminarReducer = createReducer(
    initialState,

    on(StoreAction.TRAINING_AND_SEMINARS.LOAD_SUCCESS, (state, action) =>
        adapter.setAll(action.trainingAndSeminars, state),
    ),

    on(StoreAction.TRAINING_AND_SEMINARS.ADD_SUCCESS, (state, action) =>
        adapter.addOne(action.trainingAndSeminar, state),
    ),

    on(StoreAction.TRAINING_AND_SEMINARS.UPSERT_SUCCESS, (state, action) =>
        adapter.upsertOne(action.trainingAndSeminar, state),
    ),

    on(StoreAction.TRAINING_AND_SEMINARS.REMOVE_SUCCESS, (state, action) =>
        adapter.removeOne(action.id, state),
    ),
)

export const {selectIds, selectEntities, selectAll, selectTotal} =
    adapter.getSelectors()
