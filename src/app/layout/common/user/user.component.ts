import {Faculty} from 'app/app-core/models/faculty.model'
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core'
import {Router} from '@angular/router'
import {BooleanInput} from '@angular/cdk/coercion'
import {map, Subject, takeUntil, tap} from 'rxjs'
import {User} from 'app/core/user/user.types'
import {UserService} from 'app/core/user/user.service'
import {AppState} from 'app/app-core/store/core/app.state'
import {select, Store} from '@ngrx/store'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'user',
})
export class UserComponent implements OnInit, OnDestroy {
    constructor(
        private _router: Router,
        private _store: Store<AppState>,
        private _userService: UserService,
        private _changeDetectorRef: ChangeDetectorRef,
    ) {}

    @Input()
    showAvatar: boolean = true

    user: User

    static ngAcceptInputType_showAvatar: BooleanInput

    private _unsubscribeAll: Subject<any> = new Subject<any>()

    profile$ = this._store.pipe(
        select(StateEnum.PROFILE),
        map((x) => new TransformEntity(x).toObject()),
    )

    ngOnInit(): void {
        this._userService.user$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user: User) => {
                this.user = user

                this._changeDetectorRef.markForCheck()
            })
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null)
        this._unsubscribeAll.complete()
    }

    async navigateToProfile(profile: Faculty) {
        await this._router.navigate(['/profile/' + profile.id])
        setTimeout(() => {
            location.reload()
        }, 500)
    }

    updateUserStatus(status: string): void {
        if (!this.user) {
            return
        }

        this._userService
            .update({
                ...this.user,
                status,
            })
            .subscribe()
    }

    signOut(): void {
        localStorage.clear()

        this._router.navigate(['/sign-out'])
    }
}
