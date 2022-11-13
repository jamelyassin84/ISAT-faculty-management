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

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class AuthSignInComponent implements OnInit {
    constructor(
        private _router: Router,
        public _angularFireAuth: AngularFireAuth,
        private _formBuilder: UntypedFormBuilder,
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

    signIn(): void {
        if (this.form.invalid) {
            return
        }
        this.form.disable()

        this.showAlert = false

        this._angularFireAuth
            .signInWithEmailAndPassword(
                this.form.value.email,
                this.form.value.password,
            )
            .then((data) => {
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

                // this._router.navigate(['/profile'])
            })
            .catch(() => {
                this.form.enable()

                this.signInNgForm.resetForm()

                this.alert = {
                    type: 'error',
                    message: 'Wrong email or password',
                }

                this.showAlert = true
            })
    }
}
