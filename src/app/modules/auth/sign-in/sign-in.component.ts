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

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class AuthSignInComponent implements OnInit {
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
    ) {}

    @ViewChild('signInNgForm') signInNgForm: NgForm

    alert: {type: FuseAlertType; message: string} = {
        type: 'success',
        message: '',
    }
    form: UntypedFormGroup = this._formBuilder.group({
        email: ['admin@isat.edu.ph', [Validators.required, Validators.email]],
        password: ['admin', Validators.required],
        rememberMe: [''],
    })

    showAlert: boolean = false

    ngOnInit(): void {}

    signIn(): void {
        if (this.form.invalid) {
            return
        }

        this.form.disable()

        this.showAlert = false

        this._authService.signIn(this.form.value).subscribe(
            () => {
                const redirectURL =
                    this._activatedRoute.snapshot.queryParamMap.get(
                        'redirectURL',
                    ) || '/signed-in-redirect'

                this._router.navigateByUrl(redirectURL)
            },
            (response) => {
                this.form.enable()

                this.signInNgForm.resetForm()

                this.alert = {
                    type: 'error',
                    message: 'Wrong email or password',
                }

                this.showAlert = true
            },
        )
    }
}
