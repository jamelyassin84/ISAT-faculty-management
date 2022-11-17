import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Subject} from 'app/app-core/models/subjects.model'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'

@Component({
    selector: 'subject-list',
    templateUrl: './subject-list.component.html',
    styleUrls: ['./subject-list.component.scss'],
})
export class SubjectListComponent implements OnInit {
    constructor(private _store: Store<AppState>) {}

    @Input()
    subjects: Subject[] = []

    isAdmin: boolean = localStorage.getItem('accessToken') !== 'null'

    ngOnInit(): void {}

    remove(subject: Subject): void {
        this._store.dispatch(StoreAction.SUBJECT.REMOVE({id: subject.id}))
    }

    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
