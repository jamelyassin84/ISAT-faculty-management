import {map, Observable, of, tap} from 'rxjs'
import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {CollectionEnum} from 'app/app-core/enum/collections.enum'
import {TrainingAndSeminar} from 'app/app-core/models/training-and-seminar.model'

@Injectable({providedIn: 'root'})
export class TrainingAndSeminarService {
    constructor(private _angularFireStore: AngularFirestore) {}

    get(): Observable<TrainingAndSeminar[]> {
        return this._angularFireStore
            .collection(CollectionEnum.TRAININGS_AND_SEMINARS)
            .valueChanges({idField: 'id'}) as Observable<TrainingAndSeminar[]>
    }

    async add(
        trainingAndSeminar: TrainingAndSeminar,
    ): Promise<TrainingAndSeminar> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.TRAININGS_AND_SEMINARS)
                .add({
                    ...trainingAndSeminar,
                    createdAt: Date.now(),
                    updateAt: Date.now(),
                })

            return trainingAndSeminar
        } catch (error) {}
    }

    async update(
        trainingAndSeminar: TrainingAndSeminar,
    ): Promise<TrainingAndSeminar> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.TRAININGS_AND_SEMINARS)
                .doc(trainingAndSeminar.id)
                .update({
                    ...trainingAndSeminar,
                    updateAt: Date.now(),
                })

            return trainingAndSeminar
        } catch (error) {}
    }

    async remove(id: string): Promise<void> {
        try {
            await this._angularFireStore
                .collection(CollectionEnum.TRAININGS_AND_SEMINARS)
                .doc(id)
                .delete()
        } catch (error) {}
    }
}
