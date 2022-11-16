import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {from, map, switchMap} from 'rxjs'
import {StoreAction} from '../../core/action.enum'
import {SubjectService} from './subject.service'

@Injectable({providedIn: 'root'})
export class SubjectEffects {
    constructor(
        private _actions$: Actions,
        private _subjectService: SubjectService,
    ) {}

    get$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.SUBJECT.LOAD),
            switchMap(() =>
                this._subjectService.get().pipe(
                    map((subjects) =>
                        StoreAction.SUBJECT.LOAD_SUCCESS({
                            subjects: subjects,
                        }),
                    ),
                ),
            ),
        ),
    )

    add$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(StoreAction.SUBJECT.ADD),
                switchMap((action) =>
                    from(this._subjectService.add(action.subject)).pipe(
                        map((subject) =>
                            StoreAction.SUBJECT.ADD_SUCCESS({
                                subject: subject,
                            }),
                        ),
                    ),
                ),
            ),
        {dispatch: false},
    )

    upsert$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(StoreAction.SUBJECT.UPSERT),
                switchMap((action) =>
                    from(this._subjectService.update(action.subject)).pipe(
                        map((subject) =>
                            StoreAction.SUBJECT.UPSERT_SUCCESS({
                                subject: subject,
                            }),
                        ),
                    ),
                ),
            ),
        {dispatch: false},
    )

    REMOVE$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(StoreAction.SUBJECT.REMOVE),
                switchMap((action) =>
                    from(this._subjectService.remove(action.id)).pipe(
                        map(() =>
                            StoreAction.RESEARCH.REMOVE({
                                id: action.id,
                            }),
                        ),
                    ),
                ),
            ),
        {dispatch: false},
    )
}
