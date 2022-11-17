import {Research} from 'app/app-core/models/research.model'
import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'

@Component({
    selector: 'research-list',
    templateUrl: './research-list.component.html',
    styleUrls: ['./research-list.component.scss'],
})
export class ResearchListComponent implements OnInit {
    constructor(private _store: Store<AppState>) {}

    @Input()
    researches: Research[] = []

    isAdmin: boolean = localStorage.getItem('accessToken') !== 'null'

    ngOnInit(): void {}

    remove(research: Research): void {
        this._store.dispatch(StoreAction.RESEARCH.REMOVE({id: research.id}))
    }

    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
