import {StoreModule} from '@ngrx/store'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {alertReducer} from 'app/app-core/store/ngrx/alerts/alert.reducer'
import {facultyReducer} from 'app/app-core/store/ngrx/faculty/faculty.reducer'
import {profileReducer} from 'app/app-core/store/ngrx/profile/profile.reducer'
import {publicationReducer} from 'app/app-core/store/ngrx/publication/publication.reducer'
import {researchReducer} from 'app/app-core/store/ngrx/research/research.reducer'
import {subjectReducer} from 'app/app-core/store/ngrx/subject/subject.reducer'

export const sharedStateModules = [
    StoreModule.forFeature(StateEnum.ALERTS, alertReducer),
    StoreModule.forFeature(StateEnum.FACULTY, facultyReducer),
    StoreModule.forFeature(StateEnum.PROFILE, profileReducer),
    StoreModule.forFeature(StateEnum.PUBLICATION, publicationReducer),
    StoreModule.forFeature(StateEnum.RESEARCH, researchReducer),
    StoreModule.forFeature(StateEnum.SUBJECT, subjectReducer),
]
