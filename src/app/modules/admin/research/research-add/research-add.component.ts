import {Research} from './../../../../app-core/models/research.model'
import {Component, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {AppState} from 'app/app-core/store/core/app.state'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {ResearchLevelEnum} from 'app/app-core/enum/research-level.enum'

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

    form = this._formBuilder.group({
        title: ['', Validators.required],
        level: ['', Validators.required],
        completedDate: ['', Validators.required],
        faculties: this._formBuilder.array([]),
    })

    ngOnInit(): void {}

    async save() {
        if (this.form.invalid) {
            return
        }

        this.form.disable()

        const payload = {...this.form.value} as any

        this._store.dispatch(StoreAction.RESEARCH.ADD({research: payload}))

        this.form.enable()
    }
}
