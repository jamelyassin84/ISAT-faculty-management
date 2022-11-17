import {Research} from './../../../../app-core/models/research.model'
import {Component, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {AppState} from 'app/app-core/store/core/app.state'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {ResearchLevelEnum} from 'app/app-core/enum/research-level.enum'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map, take} from 'rxjs'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'

@Component({
    selector: 'research-add',
    templateUrl: './research-add.component.html',
    styleUrls: ['./research-add.component.scss'],
})
export class ResearchAddComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<AppState>,
    ) {}

    readonly LEVELS = Object.values(ResearchLevelEnum)

    faculties$ = this._store.pipe(
        select(StateEnum.FACULTY),
        map((x) => new TransformEntity(x).toArray()),
    )

    form = this._formBuilder.group({
        title: ['', Validators.required],
        level: ['', Validators.required],
        completedDate: ['', Validators.required],
        files: [''],
        faculties: ['', Validators.required],
    })

    ngOnInit(): void {}

    async save() {
        if (this.form.invalid) {
            return
        }

        const payload = {...this.form.value} as any

        this.faculties$.pipe(take(1)).subscribe((faculties) => {
            this._store.dispatch(
                StoreAction.RESEARCH.ADD({
                    research: {
                        ...payload,
                        faculties: faculties.filter((faculty) =>
                            payload.faculties.includes(faculty.id),
                        ),
                    },
                }),
            )
        })
    }
}
