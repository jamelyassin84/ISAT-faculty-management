import {Component, OnInit} from '@angular/core'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {select, Store} from '@ngrx/store'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map} from 'rxjs'

@Component({
    selector: 'dashboard-top-cards',
    templateUrl: './dashboard-top-cards.component.html',
    styleUrls: ['./dashboard-top-cards.component.scss'],
})
export class DashboardTopCardsComponent implements OnInit {
    constructor(private _store: Store<AppState>) {}

    faculties$ = this._store.pipe(
        select(StateEnum.FACULTY),
        map((x) => new TransformEntity(x).toArray()),
    )

    publications$ = this._store.pipe(
        select(StateEnum.PUBLICATION),
        map((x) => new TransformEntity(x).toArray()),
    )

    researches$ = this._store.pipe(
        select(StateEnum.RESEARCH),
        map((x) => new TransformEntity(x).toArray()),
    )

    trainingAndSeminars$ = this._store.pipe(
        select(StateEnum.TRAINING_AND_SEMINARS),
        map((x) => new TransformEntity(x).toArray()),
    )

    ngOnInit(): void {}
}
