import {TrainingAndSeminar} from 'app/app-core/models/training-and-seminar.model'
import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {AppState} from 'app/app-core/store/core/app.state'
import {StoreAction} from 'app/app-core/store/core/action.enum'

@Component({
    selector: 'training-and-seminars-list',
    templateUrl: './training-and-seminars-list.component.html',
    styleUrls: ['./training-and-seminars-list.component.scss'],
})
export class TrainingAndSeminarsListComponent implements OnInit {
    constructor(private _store: Store<AppState>) {}

    @Input()
    trainingAndSeminars: TrainingAndSeminar[] = []

    ngOnInit(): void {}

    remove(trainingAndSeminar: TrainingAndSeminar): void {
        this._store.dispatch(
            StoreAction.TRAINING_AND_SEMINARS.REMOVE({
                id: trainingAndSeminar.id,
            }),
        )
    }

    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
