import {FormControl} from '@angular/forms'

export interface FacultyPayload {
    first_name: FormControl<string>
    last_name: FormControl<string>
    middle_name: FormControl<string>
    email: FormControl<string>
    password: FormControl<string>
    position: FormControl<string>
    confirmPassword: FormControl<string>
}
