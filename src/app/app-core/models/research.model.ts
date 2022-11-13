import {BaseModel} from './base.model'

export interface Research extends BaseModel {
    title: string
    description: string
    files: URL[]
}
