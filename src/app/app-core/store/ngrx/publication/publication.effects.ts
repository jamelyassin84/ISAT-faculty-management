import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {from, map, switchMap} from 'rxjs'
import {StoreAction} from '../../core/action.enum'
import {PublicationService} from './publication.service'

@Injectable({providedIn: 'root'})
export class PublicationEffects {
    constructor(
        private _actions$: Actions,
        private _publicationService: PublicationService,
    ) {}

    get$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.PUBLICATION.LOAD),
            switchMap(() =>
                this._publicationService.get().pipe(
                    map((publications) =>
                        StoreAction.PUBLICATION.LOAD_SUCCESS({
                            publications: publications,
                        }),
                    ),
                ),
            ),
        ),
    )

    add$ = createEffect(
        () =>
            this._actions$.pipe(
                ofType(StoreAction.PUBLICATION.ADD),
                switchMap((action) =>
                    from(this._publicationService.add(action.publication)).pipe(
                        map((publication) =>
                            StoreAction.PUBLICATION.ADD_SUCCESS({
                                publication: publication,
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
                ofType(StoreAction.PUBLICATION.UPSERT),
                switchMap((action) =>
                    from(
                        this._publicationService.update(action.publication),
                    ).pipe(
                        map((publication) =>
                            StoreAction.PUBLICATION.UPSERT_SUCCESS({
                                publication: publication,
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
                ofType(StoreAction.PUBLICATION.REMOVE),
                switchMap((action) =>
                    from(this._publicationService.remove(action.id)).pipe(
                        map(() =>
                            StoreAction.PUBLICATION.REMOVE_SUCCESS({
                                id: action.id,
                            }),
                        ),
                    ),
                ),
            ),
        {dispatch: false},
    )
}
