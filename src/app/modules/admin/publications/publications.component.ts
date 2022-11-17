import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {select, Store} from '@ngrx/store'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map} from 'rxjs'
import {PublicationsAddComponent} from './publications-add/publications-add.component'

@Component({
    selector: 'publications',
    templateUrl: './publications.component.html',
    styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
    constructor(
        private _matDialog: MatDialog,
        private _store: Store<AppState>,
    ) {}

    isAdmin: boolean = localStorage.getItem('accessToken') !== 'null'

    publications$ = this._store.pipe(
        select(StateEnum.PUBLICATION),
        map((x) => new TransformEntity(x).toArray()),
    )

    ngOnInit(): void {
        this._store.dispatch(StoreAction.FACULTY.LOAD())
        this._store.dispatch(StoreAction.PUBLICATION.LOAD())
    }

    add() {
        this._matDialog.open(PublicationsAddComponent, {
            panelClass: ['w-1/2', 'drop-shadow-sm', 'rounded-none'],
        })
    }
}
