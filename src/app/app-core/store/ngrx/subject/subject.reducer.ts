import {LoadingStateEnum} from './../../../enum/loading-state.enum'
import {createReducer, on} from '@ngrx/store'
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import {StoreAction} from '../../core/action.enum'
import {Subject} from 'app/app-core/models/subjects.model'

export interface State extends EntityState<Subject> {
    loading?: LoadingStateEnum
}

export const adapter: EntityAdapter<Subject> = createEntityAdapter<Subject>()

export const initialState: State = adapter.getInitialState({
    loading: LoadingStateEnum.IDLE,
})

export const subjectReducer = createReducer(
    initialState,

    on(StoreAction.SUBJECT.LOAD_SUCCESS, (state, action) =>
        adapter.setAll(action.subjects, state),
    ),

    on(StoreAction.SUBJECT.ADD_SUCCESS, (state, action) =>
        adapter.addOne(action.subject, state),
    ),

    on(StoreAction.SUBJECT.UPSERT_SUCCESS, (state, action) =>
        adapter.upsertOne(action.subject, state),
    ),

    on(StoreAction.SUBJECT.REMOVE_SUCCESS, (state, action) =>
        adapter.removeOne(action.id, state),
    ),
)

export const {selectIds, selectEntities, selectAll, selectTotal} =
    adapter.getSelectors()
