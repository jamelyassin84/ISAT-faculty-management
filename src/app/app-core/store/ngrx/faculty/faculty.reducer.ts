import {LoadingStateEnum} from './../../../enum/loading-state.enum'
import {createReducer, on} from '@ngrx/store'
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import {Faculty} from 'app/app-core/models/faculty.model'
import {StoreAction} from '../../core/action.enum'

export interface State extends EntityState<Faculty> {
    loading?: LoadingStateEnum
}

export const adapter: EntityAdapter<Faculty> = createEntityAdapter<Faculty>()

export const initialState: State = adapter.getInitialState({
    loading: LoadingStateEnum.IDLE,
})

export const facultyReducer = createReducer(
    initialState,

    on(StoreAction.FACULTY.LOAD_SUCCESS, (state, action) =>
        adapter.setAll(action.faculties, state),
    ),

    on(StoreAction.FACULTY.ADD_SUCCESS, (state, action) =>
        adapter.addOne(action.faculty, state),
    ),

    on(StoreAction.FACULTY.UPSERT_SUCCESS, (state, action) =>
        adapter.upsertOne(action.faculty, state),
    ),

    on(StoreAction.FACULTY.REMOVE_SUCCESS, (state, action) =>
        adapter.removeOne(action.id, state),
    ),
)

export const {selectIds, selectEntities, selectAll, selectTotal} =
    adapter.getSelectors()
