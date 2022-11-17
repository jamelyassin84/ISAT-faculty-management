import {TrainingAndSeminar} from './../../../../app-core/models/training-and-seminar.model'
import {Component, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {AppState} from 'app/app-core/store/core/app.state'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {TrainingAndSeminarEnum} from 'app/app-core/enum/training-and-seminar-level.enum'

@Component({
    selector: 'training-and-seminars-add',
    templateUrl: './training-and-seminars-add.component.html',
    styleUrls: ['./training-and-seminars-add.component.scss'],
})
export class TrainingAndSeminarsAddComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<AppState>,
    ) {}

    readonly LEVELS = Object.values(TrainingAndSeminarEnum)

    form = this._formBuilder.group({
        title: ['', Validators.required],
        involvement: ['', Validators.required],
        description: ['', Validators.required],
        level: [TrainingAndSeminarEnum.LOCAL, Validators.required],
        agency: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        faculties: this._formBuilder.array([]),
        files: this._formBuilder.array([]),
    })

    ngOnInit(): void {}

    async save() {
        if (this.form.invalid) {
            return
        }

        this.form.disable()

        const payload = {...this.form.value} as TrainingAndSeminar

        this._store.dispatch(
            StoreAction.TRAINING_AND_SEMINARS.ADD({
                trainingAndSeminar: payload,
            }),
        )

        this.form.enable()
    }
}
