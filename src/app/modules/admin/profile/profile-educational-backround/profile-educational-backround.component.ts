import {Component, Input, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {empty} from '@digital_brand_work/pipes/is-empty.pipe'
import {Store} from '@ngrx/store'
import {Faculty} from 'app/app-core/models/faculty.model'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'

@Component({
    selector: 'profile-educational-background',
    templateUrl: './profile-educational-backround.component.html',
    styleUrls: ['./profile-educational-backround.component.scss'],
})
export class ProfileEducationalBackgroundComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<AppState>,
    ) {}

    @Input('faculty')
    set setFaculty(faculty: Faculty) {
        this.form.setValue({
            educational_attainment: faculty.educational_attainment ?? '',
            license_number: faculty.license_number ?? '',
            college: faculty.college ?? '',
            department: faculty.department ?? '',
            bachelor: faculty.bachelor ?? '',
            masters: faculty.masters ?? '',
            phD: faculty.phD ?? '',
        })

        this.faculty = faculty
    }

    @Input('profile')
    set setProfile(profile: Faculty) {
        if (this.faculty.id !== profile?.id || empty(profile)) {
              this.form.disable()
          }
    }

    faculty: Faculty

    form = this._formBuilder.group({
        educational_attainment: [''],
        license_number: [''],
        college: [''],
        department: [''],
        bachelor: [''],
        masters: [''],
        phD: [''],
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
