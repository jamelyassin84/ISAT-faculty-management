import {Publication} from 'app/app-core/models/publication.model'
import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {AppState} from 'app/app-core/store/core/app.state'
import {StoreAction} from 'app/app-core/store/core/action.enum'

@Component({
    selector: 'publications-list',
    templateUrl: './publications-list.component.html',
    styleUrls: ['./publications-list.component.scss'],
})
export class PublicationsListComponent implements OnInit {
    constructor(private _store: Store<AppState>) {}

    @Input()
    publications: Publication[] = []

    ngOnInit(): void {}

    remove(publication: Publication): void {
        this._store.dispatch(
            StoreAction.PUBLICATION.REMOVE({id: publication.id}),
        )
    }

    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
