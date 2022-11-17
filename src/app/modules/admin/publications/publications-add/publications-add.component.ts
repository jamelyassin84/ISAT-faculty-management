import {Component, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {select, Store} from '@ngrx/store'
import {Publication} from 'app/app-core/models/publication.model'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map, take} from 'rxjs'

@Component({
    selector: 'publications-add',
    templateUrl: './publications-add.component.html',
    styleUrls: ['./publications-add.component.scss'],
})
export class PublicationsAddComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<AppState>,
    ) {}

    faculties$ = this._store.pipe(
        select(StateEnum.FACULTY),
        map((x) => new TransformEntity(x).toArray()),
    )

    form = this._formBuilder.group({
        title: ['', Validators.required],
        journal: ['', Validators.required],
        volume: ['', Validators.required],
        year: ['', Validators.required],
        authors: ['', Validators.required],
        files: [''],
    })

    ngOnInit(): void {}

    async save() {
        if (this.form.invalid) {
            return
        }

        let payload = {...this.form.value} as Publication

        this.faculties$.pipe(take(1)).subscribe((faculties) => {
            this._store.dispatch(
                StoreAction.PUBLICATION.ADD({
                    publication: {
                        ...payload,
                        authors: faculties.filter((faculty) =>
                            payload.authors.includes(faculty.id),
                        ),
                    },
                }),
            )
        })
    }
}
