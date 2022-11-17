import {GenderEnum} from '../enum/gender.enum'
import {BaseModel} from './base.model'
import {Research} from './research.model'
import {Subject} from './subjects.model'
import {TrainingAndSeminar} from './training-and-seminar.model'

export interface Faculty extends BaseModel {
    email: string
    password: string
    phone?: string
    photoURL?: string

    first_name: string
    last_name: string
    middle_name: string
    date_of_birth?: string
    sex?: GenderEnum

    position: string
    rank: string
    designation: string
    years_in_service?: string
    experience?: string

    educational_attainment: string
    license_number: string
    college?: string
    department?: string
    bachelor?: string
    masters?: string
    phD?: string

    awards: string
    researches: Research
    trainingAndSeminar: TrainingAndSeminar
    subjects: Subject[]
}
