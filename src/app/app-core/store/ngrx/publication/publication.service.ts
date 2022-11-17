import {map, Observable, of, tap} from 'rxjs'
import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {CollectionEnum} from 'app/app-core/enum/collections.enum'
import {Publication} from 'app/app-core/models/publication.model'

@Injectable({providedIn: 'root'})
export class PublicationService {
    constructor(private _angularFireStore: AngularFirestore) {}

    get(): Observable<Publication[]> {
        return this._angularFireStore
            .collection(CollectionEnum.PUBLICATIONS)
            .valueChanges({idField: 'id'}) as Observable<Publication[]>
    }

    async add(publication: Publication): Promise<Publication> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.PUBLICATIONS)
                .add({
                    ...publication,
                })

            return publication
        } catch (error) {}
    }

    async update(publication: Publication): Promise<Publication> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.PUBLICATIONS)
                .doc(publication.id)
                .update({
                    ...publication,
                })

            return publication
        } catch (error) {}
    }

    async remove(id: string): Promise<void> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.PUBLICATIONS)
                .doc(id)
                .delete()
        } catch (error) {}
    }
}
