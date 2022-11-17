import {TrainingAndSeminarsAddComponent} from './training-and-seminars-add/training-and-seminars-add.component'
import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {select, Store} from '@ngrx/store'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map} from 'rxjs'

@Component({
    selector: 'training-and-seminars',
    templateUrl: './training-and-seminars.component.html',
    styleUrls: ['./training-and-seminars.component.scss'],
})
export class TrainingAndSeminarsComponent implements OnInit {
    constructor(
        private _matDialog: MatDialog,
        private _store: Store<AppState>,
    ) {}

    isAdmin: boolean = localStorage.getItem('accessToken') !== 'null'

    trainingAndSeminars$ = this._store.pipe(
        select(StateEnum.TRAINING_AND_SEMINARS),
        map((x) => new TransformEntity(x).toArray()),
    )

    ngOnInit(): void {
        this._store.dispatch(StoreAction.TRAINING_AND_SEMINARS.LOAD())
    }

    add() {
        this._matDialog.open(TrainingAndSeminarsAddComponent, {
            panelClass: ['w-1/2', 'drop-shadow-sm', 'rounded-none'],
        })
    }
}
