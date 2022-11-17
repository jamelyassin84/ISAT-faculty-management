import {Pipe, PipeTransform} from '@angular/core'
import {Faculty} from 'app/app-core/models/faculty.model'
import {pipe} from 'rxjs'

@Pipe({pure: true, name: 'to_full_name'})
export class ToFullNamePipe implements PipeTransform {
    transform(faculty: Faculty): string {
        return to_full_name(faculty)
    }
}

export function to_full_name(faculty: Faculty): string {
    return `${faculty.last_name}, ${faculty.first_name}, ${faculty.middle_name}`
}
