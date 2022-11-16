import {StoreModule} from '@ngrx/store'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {alertReducer} from 'app/app-core/store/ngrx/alerts/alert.reducer'
import {facultyReducer} from 'app/app-core/store/ngrx/faculty/faculty.reducer'
import {profileReducer} from 'app/app-core/store/ngrx/profile/profile.reducer'

export const sharedStateModules = [
    StoreModule.forFeature(StateEnum.ALERTS, alertReducer),
    StoreModule.forFeature(StateEnum.FACULTY, facultyReducer),
    StoreModule.forFeature(StateEnum.PROFILE, profileReducer),
]
