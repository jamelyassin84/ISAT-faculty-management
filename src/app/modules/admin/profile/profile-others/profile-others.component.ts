import {Component, Input, OnInit} from '@angular/core'
import {FormBuilder} from '@angular/forms'
import {empty} from '@digital_brand_work/pipes/is-empty.pipe'
import {Store} from '@ngrx/store'
import {GenderEnum} from 'app/app-core/enum/gender.enum'
import {Faculty} from 'app/app-core/models/faculty.model'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'

@Component({
    selector: 'profile-others',
    templateUrl: './profile-others.component.html',
    styleUrls: ['./profile-others.component.scss'],
})
export class ProfileOthersComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<AppState>,
    ) {}

    readonly genders = Object.values(GenderEnum)

    @Input('faculty')
    set setFaculty(faculty: Faculty) {
        this.form.setValue({
            awards: faculty.awards ?? '',
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
        awards: [''],
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
