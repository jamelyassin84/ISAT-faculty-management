import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {select, Store} from '@ngrx/store'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map} from 'rxjs'
import {FacultyAddComponent} from './faculty-add/faculty-add.component'

@Component({
    selector: 'faculties',
    templateUrl: './faculties.component.html',
    styleUrls: ['./faculties.component.scss'],
})
export class FacultiesComponent implements OnInit {
    constructor(
        private _matDialog: MatDialog,
        private _store: Store<AppState>,
    ) {}

    isAdmin: boolean = localStorage.getItem('accessToken') !== 'null'

    faculties$ = this._store.pipe(
        select(StateEnum.FACULTY),
        map((x) => new TransformEntity(x).toArray()),
    )

    ngOnInit(): void {
        this._store.dispatch(StoreAction.FACULTY.LOAD())
    }

    addFaculty() {
        this._matDialog.open(FacultyAddComponent, {
            panelClass: ['w-1/2', 'drop-shadow-sm', 'rounded-none'],
        })
    }
}
