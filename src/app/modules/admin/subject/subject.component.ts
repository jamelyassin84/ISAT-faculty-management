import {TransformEntity} from './../../../../@digital_brand_work/helpers/transform-entity'
import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {select, Store} from '@ngrx/store'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map} from 'rxjs'
import {SubjectAddComponent} from './subject-add/subject-add.component'
import {StoreAction} from 'app/app-core/store/core/action.enum'

@Component({
    selector: 'subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
    constructor(
        private _matDialog: MatDialog,
        private _store: Store<AppState>,
    ) {}

    subjects$ = this._store.pipe(
        select(StateEnum.SUBJECT),
        map((x) => new TransformEntity(x).toArray()),
    )

    ngOnInit(): void {
        this._store.dispatch(StoreAction.SUBJECT.LOAD())
    }

    add() {
        this._matDialog.open(SubjectAddComponent, {
            panelClass: ['w-1/2', 'drop-shadow-sm', 'rounded-none'],
        })
    }
}
