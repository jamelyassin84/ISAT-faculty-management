import {FacultyEffects} from './../../app-core/store/ngrx/faculty/faculty.effects'
import {EffectsModule} from '@ngrx/effects'

export const sharedEffects = [EffectsModule.forFeature(FacultyEffects)]
