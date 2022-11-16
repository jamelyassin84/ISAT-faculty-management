import {map, Observable, of, tap} from 'rxjs'
import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {CollectionEnum} from 'app/app-core/enum/collections.enum'
import {Subject} from 'app/app-core/models/subjects.model'
import {Firestore, collectionData, collection} from '@angular/fire/firestore'

@Injectable({providedIn: 'root'})
export class SubjectService {
    constructor(
        private _fireStore: Firestore,
        private _angularFireStore: AngularFirestore,
    ) {}

    get(): Observable<Subject[]> {
        return this._angularFireStore
            .collection(CollectionEnum.SUBJECTS)
            .valueChanges({idField: 'id'}) as any
    }

    async add(subject: Subject): Promise<Subject> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.SUBJECTS)
                .add({
                    ...subject,
                })

            return subject
        } catch (error) {}
    }

    async update(subject: Subject): Promise<Subject> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.SUBJECTS)
                .doc(subject.id)
                .update({
                    ...subject,
                })

            return subject
        } catch (error) {}
    }

    async remove(id: string): Promise<void> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.SUBJECTS)
                .doc(id)
                .delete()
        } catch (error) {}
    }
}
