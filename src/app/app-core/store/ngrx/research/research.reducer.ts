import {LoadingStateEnum} from './../../../enum/loading-state.enum'
import {createReducer, on} from '@ngrx/store'
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import {StoreAction} from '../../core/action.enum'
import {Research} from 'app/app-core/models/research.model'

export interface State extends EntityState<Research> {
    loading?: LoadingStateEnum
}

export const adapter: EntityAdapter<Research> = createEntityAdapter<Research>()

export const initialState: State = adapter.getInitialState({
    loading: LoadingStateEnum.IDLE,
})

export const researchReducer = createReducer(
    initialState,

    on(StoreAction.RESEARCH.LOAD_SUCCESS, (state, action) =>
        adapter.setAll(action.researches, state),
    ),

    on(StoreAction.RESEARCH.ADD_SUCCESS, (state, action) =>
        adapter.addOne(action.research, state),
    ),

    on(StoreAction.RESEARCH.UPSERT_SUCCESS, (state, action) =>
        adapter.upsertOne(action.research, state),
    ),

    on(StoreAction.RESEARCH.REMOVE_SUCCESS, (state, action) =>
        adapter.removeOne(action.id, state),
    ),
)

export const {selectIds, selectEntities, selectAll, selectTotal} =
    adapter.getSelectors()
