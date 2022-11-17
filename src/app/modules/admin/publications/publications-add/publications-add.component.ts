import {Component, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {Publication} from 'app/app-core/models/publication.model'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'

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

    form = this._formBuilder.group({
        title: ['', Validators.required],
        journal: ['', Validators.required],
        volume: ['', Validators.required],
        year: ['', Validators.required],
        authors: this._formBuilder.array([]),
        files: this._formBuilder.array([]),
    })

    ngOnInit(): void {}

    async save() {
        if (this.form.invalid) {
            return
        }

        this.form.disable()

        const payload = {...this.form.value} as Publication

        this._store.dispatch(
            StoreAction.PUBLICATION.ADD({publication: payload}),
        )

        this.form.enable()
    }
}
