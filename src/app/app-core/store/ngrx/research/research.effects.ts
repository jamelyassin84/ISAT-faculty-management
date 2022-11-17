import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {from, map, switchMap} from 'rxjs'
import {StoreAction} from '../../core/action.enum'
import {ResearchService} from './research.service'

@Injectable({providedIn: 'root'})
export class ResearchEffects {
    constructor(
        private _actions$: Actions,
        private _researchService: ResearchService,
    ) {}

    get$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.RESEARCH.LOAD),
            switchMap(() =>
                this._researchService.get().pipe(
                    map((researches) =>
                        StoreAction.RESEARCH.LOAD_SUCCESS({
                            researches: researches,
                        }),
                    ),
                ),
            ),
        ),
    )

    add$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(StoreAction.RESEARCH.ADD),
                switchMap((action) =>
                    from(this._researchService.add(action.research)).pipe(
                        map((research) =>
                            StoreAction.RESEARCH.ADD_SUCCESS({
                                research: research,
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
                ofType(StoreAction.RESEARCH.UPSERT),
                switchMap((action) =>
                    from(this._researchService.update(action.research)).pipe(
                        map((research) =>
                            StoreAction.RESEARCH.UPSERT_SUCCESS({
                                research: research,
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
                ofType(StoreAction.RESEARCH.REMOVE),
                switchMap((action) =>
                    from(this._researchService.remove(action.id)).pipe(
                        map(() =>
                            StoreAction.RESEARCH.REMOVE_SUCCESS({
                                id: action.id,
                            }),
                        ),
                    ),
                ),
            ),
        {dispatch: false},
    )
}
