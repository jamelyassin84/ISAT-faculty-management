import {Component, Input, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {GenderEnum} from 'app/app-core/enum/gender.enum'
import {Faculty} from 'app/app-core/models/faculty.model'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'

@Component({
    selector: 'profile-information',
    templateUrl: './profile-information.component.html',
    styleUrls: ['./profile-information.component.scss'],
})
export class ProfileInformationComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<AppState>,
    ) {}

    readonly genders = Object.values(GenderEnum)

    @Input('faculty')
    set setFaculty(faculty: Faculty) {
        this.form.setValue({
            first_name: faculty.first_name,
            last_name: faculty.last_name,
            middle_name: faculty.middle_name ?? '',
            date_of_birth: faculty.date_of_birth ?? '',
            sex: faculty.sex ?? GenderEnum.MALE,
        })

        this.faculty = faculty
    }

    @Input('profile')
    set setProfile(profile: Faculty) {
        if (this.faculty.id !== profile.id) {
            this.form.disable()
        }
    }

    faculty: Faculty

    form = this._formBuilder.group({
        first_name: [''],
        last_name: [''],
        middle_name: [''],
        date_of_birth: [''],
        sex: [GenderEnum.MALE],
    })

    ngOnInit(): void {}

    save() {
        this._store.dispatch(
            StoreAction.PROFILE.UPSERT({
                faculty: {...this.faculty, ...(this.form.value as any)},
            }),
        )
    }
}
