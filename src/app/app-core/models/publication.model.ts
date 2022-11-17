import {Faculty} from './faculty.model'
import {BaseModel} from './base.model'

export interface Publication extends BaseModel {
    authors: any
    title: string
    journal: string
    volume: string
    year: string
    files: string
}
