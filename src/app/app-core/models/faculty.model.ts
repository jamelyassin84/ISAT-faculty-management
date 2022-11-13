import {GenderEnum} from '../enum/gender.enum'
import {BaseModel} from './base.model'

export interface Faculty extends BaseModel {
    first_name: string
    last_name: string
    middle_name: string
    email: string
    password: string
    position: string

    phone?: string
    department?: string
    college?: string
    bachelor?: string
    masters?: string
    phD?: string
    designation: string
    years_in_service?: number
    experience?: number

    title?: string
    date_of_birth?: string
    sex?: GenderEnum
    photoURL?: string
}
