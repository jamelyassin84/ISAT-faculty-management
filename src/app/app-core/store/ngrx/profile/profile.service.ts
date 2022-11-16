import {Injectable} from '@angular/core'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {CollectionEnum} from 'app/app-core/enum/collections.enum'
import {Faculty} from 'app/app-core/models/faculty.model'
import {Observable} from 'rxjs'

@Injectable({providedIn: 'root'})
export class ProfileService {
    constructor(
        private _angularFireAuth: AngularFireAuth,
        private _angularFireStore: AngularFirestore,
    ) {}

    get(faculty: Faculty): Observable<Faculty> {
        return this._angularFireStore
            .collection(CollectionEnum.FACULTIES)
            .doc(faculty.id)
            .valueChanges() as Observable<Faculty>
    }

    // TODO : Update also user and password
    async update(faculty: Faculty): Promise<Faculty> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.FACULTIES)
                .doc(faculty.id)
                .update({
                    ...faculty,
                })

            return faculty
        } catch (error) {}
    }
}
