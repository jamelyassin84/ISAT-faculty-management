import {BaseModel} from './base.model'

export interface Publication extends BaseModel {
    title: string
    description: string
    files: URL[]
}
