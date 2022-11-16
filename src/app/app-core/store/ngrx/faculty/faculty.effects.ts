import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {from, map, switchMap} from 'rxjs'
import {StoreAction} from '../../core/action.enum'
import {FacultyService} from './faculty.service'

@Injectable({providedIn: 'root'})
export class FacultyEffects {
    constructor(
        private _actions$: Actions,
        private _facultyService: FacultyService,
    ) {}

    get$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.FACULTY.LOAD),
            switchMap(() =>
                this._facultyService.get().pipe(
                    map((faculties) =>
                        StoreAction.FACULTY.LOAD_SUCCESS({
                            faculties: faculties,
                        }),
                    ),
                ),
            ),
        ),
    )

    add$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(StoreAction.FACULTY.ADD),
                switchMap((action) =>
                    from(this._facultyService.add(action.faculty)).pipe(
                        map((faculty) =>
                            StoreAction.FACULTY.ADD_SUCCESS({
                                faculty: faculty,
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
                ofType(StoreAction.FACULTY.UPSERT),
                switchMap((action) =>
                    from(this._facultyService.update(action.faculty)).pipe(
                        map((faculty) =>
                            StoreAction.FACULTY.UPSERT_SUCCESS({
                                faculty: faculty,
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
                ofType(StoreAction.FACULTY.REMOVE),
                switchMap((action) =>
                    from(this._facultyService.remove(action.id)).pipe(
                        map(() =>
                            StoreAction.FACULTY.REMOVE({
                                id: action.id,
                            }),
                        ),
                    ),
                ),
            ),
        {dispatch: false},
    )
}
