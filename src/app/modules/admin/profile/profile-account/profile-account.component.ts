import {empty} from '@digital_brand_work/pipes/is-empty.pipe'
import {ActivatedRoute} from '@angular/router'
import {Faculty} from 'app/app-core/models/faculty.model'
import {Component, Input, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {AppState} from 'app/app-core/store/core/app.state'
import {Store} from '@ngrx/store'
import {StoreAction} from 'app/app-core/store/core/action.enum'

@Component({
    selector: 'profile-account',
    templateUrl: './profile-account.component.html',
    styleUrls: ['./profile-account.component.scss'],
})
export class ProfileAccountComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<AppState>,
    ) {}

    @Input('faculty')
    set setFaculty(faculty: Faculty) {
        this.form.setValue({
            email: faculty.email,
            password: faculty.password,
            phone: faculty.phone ?? '',
            photoURL: faculty.photoURL ?? '',
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
        email: [''],
        password: [''],
        phone: [''],
        photoURL: [''],
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
