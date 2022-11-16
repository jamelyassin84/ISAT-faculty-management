import {Faculty} from './../../../../app-core/models/faculty.model'
import {Component, Input, OnInit} from '@angular/core'
import {dbwAnimations} from '@digital_brand_work/animations/animation.api'
import {AppState} from 'app/app-core/store/core/app.state'
import {Store} from '@ngrx/store'
import {StoreAction} from 'app/app-core/store/core/action.enum'

@Component({
    selector: 'faculty-list',
    templateUrl: './faculty-list.component.html',
    styleUrls: ['./faculty-list.component.scss'],
    animations: [...dbwAnimations],
})
export class FacultyListComponent implements OnInit {
    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {}

    @Input()
    faculties: Faculty[] = []

    remove(faculty: Faculty): void {
        this._store.dispatch(StoreAction.FACULTY.REMOVE({id: faculty.id}))
    }

    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
