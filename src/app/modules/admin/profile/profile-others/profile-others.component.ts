import {Component, Input, OnInit} from '@angular/core'
import {FormBuilder} from '@angular/forms'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {empty} from '@digital_brand_work/pipes/is-empty.pipe'
import {select, Store} from '@ngrx/store'
import {GenderEnum} from 'app/app-core/enum/gender.enum'
import {Faculty} from 'app/app-core/models/faculty.model'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map, take} from 'rxjs'

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

    subjects$ = this._store.pipe(
        select(StateEnum.SUBJECT),
        map((x) => new TransformEntity(x).toArray()),
    )

    @Input('faculty')
    set setFaculty(faculty: Faculty) {
        this.form.setValue({
            awards: faculty.awards ?? '',
            subjects: faculty.subjects
                ? (faculty.subjects.map((subject) => subject.id) as any)
                : '',
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
        subjects: [''],
    })

    ngOnInit(): void {}

    save() {
        this.subjects$.pipe(take(1)).subscribe((subjects) => {
            this._store.dispatch(
                StoreAction.PROFILE.UPSERT({
                    faculty: {
                        ...this.faculty,
                        ...this.form.value,
                        subjects: subjects.filter((subject) =>
                            this.form.value.subjects.includes(subject.id),
                        ),
                    },
                }),
            )
        })
    }
}
