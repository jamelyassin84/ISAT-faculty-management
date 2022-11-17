import {StoreAction} from 'app/app-core/store/core/action.enum'
import {Faculty} from './../../../app-core/models/faculty.model'
import {CollectionEnum} from 'app/app-core/enum/collections.enum'
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core'
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    NgForm,
    Validators,
} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {fuseAnimations} from '@fuse/animations'
import {FuseAlertType} from '@fuse/components/alert'
import {AuthService} from 'app/core/auth/auth.service'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {Store} from '@ngrx/store'
import {AppState} from 'app/app-core/store/core/app.state'

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class AuthSignInComponent implements OnInit {
    constructor(
        private _router: Router,
        private _store: Store<AppState>,
        private _formBuilder: UntypedFormBuilder,
        public _angularFireAuth: AngularFireAuth,
        private _angularFireStore: AngularFirestore,
    ) {}

    @ViewChild('signInNgForm') signInNgForm: NgForm

    alert: {type: FuseAlertType; message: string} = {
        type: 'success',
        message: '',
    }
    form: UntypedFormGroup = this._formBuilder.group({
        email: ['admin@isat.edu.ph', [Validators.required, Validators.email]],
        password: ['admin123', Validators.required],
    })

    showAlert: boolean = false

    ngOnInit(): void {}

    async signIn(): Promise<void> {
        if (this.form.invalid) {
            return
        }
        this.form.disable()

        this.checkIfFaculty()

        this.showAlert = false
    }

    async checkIfFaculty() {
        const {email, password} = this.form.value

        try {
            const querySnapshot = await this._angularFireStore
                .collection(CollectionEnum.FACULTIES)
                .ref.where('email', '==', email)
                .where('password', '==', password)
                .get()

            if (querySnapshot) {
                let faculties: Faculty[] = []

                querySnapshot.forEach((faculty) => {
                    const data = faculty.data() as any

                    faculties.push({...data, id: faculty.id})
                })

                const faculty: Faculty = faculties[0]

                this._store.dispatch(
                    StoreAction.PROFILE.UPSERT_SUCCESS({faculty: faculty}),
                )

                localStorage.setItem('accessToken', 'null')

                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        ...faculty,
                    }),
                )

                setTimeout(() => {
                    this._router.navigate(['/profile/' + faculty.id])
                }, 1000)

                return
            }

            this.loginAsAdmin()
        } catch (error) {
            this.loginAsAdmin()
        }
    }

    async loginAsAdmin() {
        const {email, password} = this.form.value

        try {
            const data = await this._angularFireAuth.signInWithEmailAndPassword(
                email,
                password,
            )
            const user = (data.user.multiFactor as any).user

            localStorage.setItem('accessToken', user.accessToken)
            localStorage.setItem(
                'user',
                JSON.stringify({
                    id: user.uid,
                    ...user.metadata,
                    phone: user.phoneNumber,
                    photoURL: user.photoURL,
                }),
            )

            this._router.navigate(['/faculties'])
        } catch (error) {
            this.form.enable()

            this.signInNgForm.resetForm()

            this.alert = {
                type: 'error',
                message: 'Wrong email or password',
            }

            this.showAlert = true
        }
    }
}
