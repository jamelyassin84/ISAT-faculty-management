import {TrainingAndSeminarEnum} from '../enum/training-and-seminar-level.enum'
import {BaseModel} from './base.model'

export interface TrainingAndSeminar extends BaseModel {
    title: string
    involvement: string
    description: string
    level: TrainingAndSeminarEnum
    agency: string
    startDate: string
    endDate: string
    files: URL[]
}
