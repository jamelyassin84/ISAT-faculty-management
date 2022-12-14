import {map, Observable, of, tap} from 'rxjs'
import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {Faculty} from 'app/app-core/models/faculty.model'
import {CollectionEnum} from 'app/app-core/enum/collections.enum'

@Injectable({providedIn: 'root'})
export class FacultyService {
    constructor(private _angularFireStore: AngularFirestore) {}

    get(): Observable<Faculty[]> {
        return this._angularFireStore
            .collection(CollectionEnum.FACULTIES)
            .valueChanges({idField: 'id'}) as Observable<Faculty[]>
    }

    async add(faculty: Faculty): Promise<Faculty> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.FACULTIES)
                .add({
                    ...faculty,
                    createdAt: Date.now(),
                    updateAt: Date.now(),
                })

            return faculty
        } catch (error) {}
    }

    async update(faculty: Faculty): Promise<Faculty> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.FACULTIES)
                .doc(faculty.id)
                .update({
                    ...faculty,
                    updateAt: Date.now(),
                })

            return faculty
        } catch (error) {}
    }

    async remove(id: string): Promise<void> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.FACULTIES)
                .doc(id)
                .delete()
        } catch (error) {}
    }
}
