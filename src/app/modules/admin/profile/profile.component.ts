import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {select, Store} from '@ngrx/store'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map} from 'rxjs'

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute,
        private _store: Store<AppState>,
    ) {}

    currentFacultyId = this._route.snapshot.paramMap.get('id')

    faculty$ = this._store.pipe(
        select(StateEnum.FACULTY),
        map((x) => new TransformEntity(x).toArray()),
        map((faculties) =>
            faculties.find((faculty) => faculty.id === this.currentFacultyId),
        ),
    )

    profile$ = this._store.pipe(
        select(StateEnum.PROFILE),
        map((x) => new TransformEntity(x).toObject()),
    )

    ngOnInit(): void {
        this._store.dispatch(StoreAction.FACULTY.LOAD())
    }
}
