import {Component} from '@angular/core'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {select, Store} from '@ngrx/store'
import {map, tap} from 'rxjs'
import {StoreAction} from './app-core/store/core/action.enum'
import {AppState} from './app-core/store/core/app.state'
import {StateEnum} from './app-core/store/core/state.enum'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private _store: Store<AppState>) {}

    alerts$ = this._store.pipe(
        select(StateEnum.ALERTS),
        map((x) => new TransformEntity(x).toArray()),
        tap((x) => console.log(x)),
    )

    removeAlert(id: string) {
        this._store.dispatch(StoreAction.ALERT.deleteAlert({id: id}))
    }

    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
