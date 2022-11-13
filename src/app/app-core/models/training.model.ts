import {BaseModel} from './base.model'

export interface Training extends BaseModel {
    title: string
    description: string
    files: URL[]
}
