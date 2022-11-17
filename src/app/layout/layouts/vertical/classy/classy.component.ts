import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {map, Subject, takeUntil} from 'rxjs'
import {FuseMediaWatcherService} from '@fuse/services/media-watcher'
import {
    FuseNavigationService,
    FuseVerticalNavigationComponent,
} from '@fuse/components/navigation'
import {Navigation} from 'app/core/navigation/navigation.types'
import {NavigationService} from 'app/core/navigation/navigation.service'
import {User} from 'app/core/user/user.types'
import {UserService} from 'app/core/user/user.service'
import {AppState} from 'app/app-core/store/core/app.state'
import {select, Store} from '@ngrx/store'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'

@Component({
    selector: 'classy-layout',
    templateUrl: './classy.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ClassyLayoutComponent implements OnInit, OnDestroy {
    constructor(
        private _store: Store<AppState>,
        private _userService: UserService,
        private _navigationService: NavigationService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
    ) {}

    isScreenSmall: boolean
    navigation: Navigation
    user: User
    destroyed$: Subject<any> = new Subject<any>()

    profile$ = this._store.pipe(
        select(StateEnum.PROFILE),
        map((x) => new TransformEntity(x).toObject()),
    )

    isAdmin: boolean = localStorage.getItem('accessToken') !== 'null'

    get currentYear(): number {
        return new Date().getFullYear()
    }

    ngOnInit(): void {
        this._navigationService.navigation$
            .pipe(takeUntil(this.destroyed$))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation
            })

        this._userService.user$
            .pipe(takeUntil(this.destroyed$))
            .subscribe((user: User) => {
                this.user = user
            })

        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(({matchingAliases}) => {
                this.isScreenSmall = !matchingAliases.includes('md')
            })
    }

    ngOnDestroy(): void {
        this.destroyed$.next(null)
        this.destroyed$.complete()
    }

    toggleNavigation(name: string): void {
        const navigation =
            this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                name,
            )

        if (navigation) {
            navigation.toggle()
        }
    }
}
