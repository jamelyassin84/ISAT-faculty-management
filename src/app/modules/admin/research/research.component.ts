import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {select, Store} from '@ngrx/store'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map} from 'rxjs'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {ResearchAddComponent} from './research-add/research-add.component'

@Component({
    selector: 'research',
    templateUrl: './research.component.html',
    styleUrls: ['./research.component.scss'],
})
export class ResearchComponent implements OnInit {
    constructor(
        private _matDialog: MatDialog,
        private _store: Store<AppState>,
    ) {}

    researches$ = this._store.pipe(
        select(StateEnum.RESEARCH),
        map((x) => new TransformEntity(x).toArray()),
    )

    ngOnInit(): void {
        this._store.dispatch(StoreAction.RESEARCH.LOAD())
    }

    add() {
        this._matDialog.open(ResearchAddComponent, {
            panelClass: ['w-1/2', 'drop-shadow-sm', 'rounded-none'],
        })
    }
}
