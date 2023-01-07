import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this._store.dispatch(StoreAction.FACULTY.LOAD())
        this._store.dispatch(StoreAction.RESEARCH.LOAD())
        this._store.dispatch(StoreAction.PUBLICATION.LOAD())
        this._store.dispatch(StoreAction.TRAINING_AND_SEMINARS.LOAD())
    }
}
