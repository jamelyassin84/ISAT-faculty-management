import {StoreAction} from 'app/app-core/store/core/action.enum'
import {Component, OnInit} from '@angular/core'
import {FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {SubjectPayload} from 'app/app-core/http/payloads/subject.payload'
import {AppState} from 'app/app-core/store/core/app.state'
import {Subject} from 'app/app-core/models/subjects.model'

@Component({
    selector: 'subject-add',
    templateUrl: './subject-add.component.html',
    styleUrls: ['./subject-add.component.scss'],
})
export class SubjectAddComponent implements OnInit {
    constructor(
        private _store: Store<AppState>,
        private _formBuilder: NonNullableFormBuilder,
    ) {}

    subjectForm: FormGroup<SubjectPayload> = this._formBuilder.group({
        code: ['', Validators.required],
        title: ['', Validators.required],
    })

    ngOnInit(): void {}

    async save() {
        if (this.subjectForm.invalid) {
            return
        }

        this.subjectForm.disable()

        const payload = {...this.subjectForm.value} as Subject

        this._store.dispatch(StoreAction.SUBJECT.ADD({subject: payload}))

        this.subjectForm.enable()
    }
}
