import {BaseModel} from './base.model'

export interface Seminar extends BaseModel {
    title: string
    description: string
    files: URL[]
}
