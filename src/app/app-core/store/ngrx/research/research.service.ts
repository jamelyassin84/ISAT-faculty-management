import {map, Observable, of, tap} from 'rxjs'
import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {CollectionEnum} from 'app/app-core/enum/collections.enum'
import {Research} from 'app/app-core/models/research.model'

@Injectable({providedIn: 'root'})
export class ResearchService {
    constructor(private _angularFireStore: AngularFirestore) {}

    get(): Observable<Research[]> {
        return this._angularFireStore
            .collection(CollectionEnum.RESEARCHES)
            .valueChanges({idField: 'id'}) as Observable<Research[]>
    }

    async add(research: Research): Promise<Research> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.RESEARCHES)
                .add({
                    ...research,
                })

            return research
        } catch (error) {}
    }

    async update(research: Research): Promise<Research> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.RESEARCHES)
                .doc(research.id)
                .update({
                    ...research,
                })

            return research
        } catch (error) {}
    }

    async remove(id: string): Promise<void> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.RESEARCHES)
                .doc(id)
                .delete()
        } catch (error) {}
    }
}
