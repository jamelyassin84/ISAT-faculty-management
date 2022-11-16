import {FacultyEffects} from './../../app-core/store/ngrx/faculty/faculty.effects'
import {EffectsModule} from '@ngrx/effects'
import {ProfileEffects} from 'app/app-core/store/ngrx/profile/profile.effects'

export const sharedEffects = [
    EffectsModule.forFeature([FacultyEffects, ProfileEffects]),
]
