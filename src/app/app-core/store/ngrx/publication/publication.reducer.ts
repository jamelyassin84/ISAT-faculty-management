import {LoadingStateEnum} from './../../../enum/loading-state.enum'
import {createReducer, on} from '@ngrx/store'
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import {StoreAction} from '../../core/action.enum'
import {Publication} from 'app/app-core/models/publication.model'

export interface State extends EntityState<Publication> {
    loading?: LoadingStateEnum
}

export const adapter: EntityAdapter<Publication> =
    createEntityAdapter<Publication>()

export const initialState: State = adapter.getInitialState({
    loading: LoadingStateEnum.IDLE,
})

export const publicationReducer = createReducer(
    initialState,

    on(StoreAction.PUBLICATION.LOAD_SUCCESS, (state, action) =>
        adapter.setAll(action.publications, state),
    ),

    on(StoreAction.PUBLICATION.ADD_SUCCESS, (state, action) =>
        adapter.addOne(action.publication, state),
    ),

    on(StoreAction.PUBLICATION.UPSERT_SUCCESS, (state, action) =>
        adapter.upsertOne(action.publication, state),
    ),

    on(StoreAction.PUBLICATION.REMOVE_SUCCESS, (state, action) =>
        adapter.removeOne(action.id, state),
    ),
)

export const {selectIds, selectEntities, selectAll, selectTotal} =
    adapter.getSelectors()
