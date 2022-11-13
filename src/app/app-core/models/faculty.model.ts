import {GenderEnum} from '../enum/gender.enum'
import {BaseModel} from './base.model'

export interface Faculty extends BaseModel {
    email: string
    password: string

    first_name: string
    last_name: string
    middle_name: string
    phone: string

    department: string
    college: string
    position: string
    bachelor: string
    masters: string
    phD: string
    designation: string

    title: string
    date_of_birth: string
    sex: GenderEnum
    photoURL: string
}
