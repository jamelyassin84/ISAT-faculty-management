import {Component, Input, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {Faculty} from 'app/app-core/models/faculty.model'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'

@Component({
    selector: 'profile-employment',
    templateUrl: './profile-employment.component.html',
    styleUrls: ['./profile-employment.component.scss'],
})
export class ProfileEmploymentComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<AppState>,
    ) {}

    @Input('faculty')
    set setFaculty(faculty: Faculty) {
        this.form.setValue({
            position: faculty.position ?? '',
            rank: faculty.rank ?? '',
            designation: faculty.designation ?? '',
            years_in_service: faculty.years_in_service.toString() ?? '',
            experience: faculty.experience.toString() ?? '',
        })

        this.faculty = faculty
    }

    faculty: Faculty

    form = this._formBuilder.group({
        position: [''],
        rank: [''],
        designation: [''],
        years_in_service: [''],
        experience: [''],
    })

    ngOnInit(): void {}

    save() {
        this._store.dispatch(
            StoreAction.FACULTY.UPSERT({
                faculty: {...this.faculty, ...(this.form.value as any)},
            }),
        )
    }
}
