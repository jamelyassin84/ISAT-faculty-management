import {BaseModel} from './base.model'

export interface Admin extends BaseModel {
    name: string
    email: string
    password: string
    photoURL: string
}
