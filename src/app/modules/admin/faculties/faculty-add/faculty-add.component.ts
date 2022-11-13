import {empty} from '@digital_brand_work/pipes/is-empty.pipe'
import {Component, OnInit} from '@angular/core'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {FuseValidators} from '@fuse/validators'
import {FacultyPayload} from 'app/app-core/http/payloads/faculty.payload'
import {Firestore, collection} from '@angular/fire/firestore/firebase'
import {CollectionEnum} from 'app/app-core/enum/collections.enum'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {AlertService} from '@digital_brand_work/services/alert.service'
import {slug_to_sentence} from '@digital_brand_work/pipes/slug-to-sentence.pipe'
@Component({
    selector: 'faculty-add',
    templateUrl: './faculty-add.component.html',
    styleUrls: ['./faculty-add.component.scss'],
})
export class FacultyAddComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _alertService: AlertService,
        private _angularFireAuth: AngularFireAuth,
        private _angularFireStore: AngularFirestore,
    ) {}

    facultyForm: FormGroup<FacultyPayload> = this._formBuilder.group(
        {
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            middle_name: ['', Validators.required],
            email: [
                '',
                [
                    Validators.email,
                    Validators.required,
                    Validators.minLength(6),
                ],
            ],
            position: ['', Validators.required],
            password: ['', Validators.required, Validators.minLength(6)],
            confirmPassword: ['', Validators.required],
        },
        {
            validators: FuseValidators.mustMatch('password', 'confirmPassword'),
        },
    )

    ngOnInit(): void {}

    async save() {
        if (this.facultyForm.invalid) {
            return
        }

        this.facultyForm.disable()

        const data = {...this.facultyForm.value}

        this._angularFireAuth
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(() => {
                this._angularFireStore
                    .collection(CollectionEnum.FACULTIES)
                    .add({
                        ...this.facultyForm.value,
                    })
                    .catch(() => {
                        this.facultyForm.enable()
                    })
                    .finally(() => document.getElementById('close')?.click())
            })
            .catch(() => {
                this.facultyForm.enable()
            })
    }
}
