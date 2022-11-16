import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {from, map, switchMap} from 'rxjs'
import {StoreAction} from '../../core/action.enum'
import {TrainingAndSeminarService} from './training-and-seminar.service'

@Injectable({providedIn: 'root'})
export class TrainingAndSeminarEffects {
    constructor(
        private _actions$: Actions,
        private _trainingAndSeminarService: TrainingAndSeminarService,
    ) {}

    get$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.TRAINING_AND_SEMINARS.LOAD),
            switchMap(() =>
                this._trainingAndSeminarService.get().pipe(
                    map((trainingAndSeminars) =>
                        StoreAction.TRAINING_AND_SEMINARS.LOAD_SUCCESS({
                            trainingAndSeminars: trainingAndSeminars,
                        }),
                    ),
                ),
            ),
        ),
    )

    add$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.TRAINING_AND_SEMINARS.ADD),
            switchMap((action) =>
                from(
                    this._trainingAndSeminarService.add(
                        action.trainingAndSeminar,
                    ),
                ).pipe(
                    map((trainingAndSeminar) =>
                        StoreAction.TRAINING_AND_SEMINARS.ADD_SUCCESS({
                            trainingAndSeminar: trainingAndSeminar,
                        }),
                    ),
                ),
            ),
        ),
    )

    upsert$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.TRAINING_AND_SEMINARS.UPSERT),
            switchMap((action) =>
                from(
                    this._trainingAndSeminarService.update(
                        action.trainingAndSeminar,
                    ),
                ).pipe(
                    map((trainingAndSeminar) =>
                        StoreAction.TRAINING_AND_SEMINARS.UPSERT_SUCCESS({
                            trainingAndSeminar: trainingAndSeminar,
                        }),
                    ),
                ),
            ),
        ),
    )

    REMOVE$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.TRAINING_AND_SEMINARS.REMOVE),
            switchMap((action) =>
                from(this._trainingAndSeminarService.remove(action.id)).pipe(
                    map(() =>
                        StoreAction.TRAINING_AND_SEMINARS.REMOVE({
                            id: action.id,
                        }),
                    ),
                ),
            ),
        ),
    )
}
