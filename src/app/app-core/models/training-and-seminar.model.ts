import {Faculty} from 'app/app-core/models/faculty.model'
import {TrainingAndSeminarEnum} from '../enum/training-and-seminar-level.enum'
import {BaseModel} from './base.model'

export interface TrainingAndSeminar extends BaseModel {
    faculty: Faculty[]
    title: string
    involvement: string
    description: string
    level: TrainingAndSeminarEnum
    agency: string
    startDate: string
    endDate: string
    files: URL[]
}
