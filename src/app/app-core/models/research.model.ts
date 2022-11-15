import {Faculty} from './faculty.model'
import {BaseModel} from './base.model'
import {ResearchLevelEnum} from '../enum/research-level.enum'

export interface Research extends BaseModel {
    title: string
    faculties: Faculty[]
    level: ResearchLevelEnum
    completedDate: Date
}
