import {GenderEnum} from '../enum/gender.enum'
import {BaseModel} from './base.model'
import {Research} from './research.model'
import {Subject} from './subjects.model'
import {TrainingAndSeminar} from './training-and-seminar.model'

export interface Faculty extends BaseModel {
    email: string
    password: string

    first_name: string
    last_name: string
    middle_name: string
    date_of_birth?: string
    sex?: GenderEnum

    rank: string
    educational_attainment: string
    license_number: string
    subjects: Subject[]
    years_in_service?: number
    awards: string[]

    position: string
    phone?: string
    department?: string
    college?: string
    bachelor?: string
    masters?: string
    phD?: string
    designation: string
    experience?: number

    photoURL?: string

    researches: Research
    trainingAndSeminar: TrainingAndSeminar
}
