import {Faculty} from './faculty.model'
import {BaseModel} from './base.model'
import {ResearchLevelEnum} from '../enum/research-level.enum'

export interface Research extends BaseModel {
    title: string
    level: ResearchLevelEnum
    completedDate: Date
    faculties: Faculty[]
}
