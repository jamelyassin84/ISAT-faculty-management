import {AlertService} from '@digital_brand_work/services/alert.service'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {from, map, switchMap, tap} from 'rxjs'
import {StoreAction} from '../../core/action.enum'
import {ProfileService} from './profile.service'

@Injectable({providedIn: 'root'})
export class ProfileEffects {
    constructor(
        private _actions$: Actions,
        private _alertService: AlertService,
        private _profileService: ProfileService,
    ) {}

    upsert$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.PROFILE.UPSERT),
            switchMap((action) =>
                from(this._profileService.update(action.faculty)).pipe(
                    map((faculty) =>
                        StoreAction.PROFILE.UPSERT_SUCCESS({
                            faculty: faculty,
                        }),
                    ),
                    tap((faculty) => {
                        localStorage.setItem(
                            'user',
                            JSON.stringify({
                                ...faculty,
                            }),
                        )

                        this._alertService.addAlert({
                            type: 'success',
                            title: 'Profile Updated!',
                            message:
                                'Your profile has been successfully updated',
                        })
                    }),
                ),
            ),
        ),
    )
}
