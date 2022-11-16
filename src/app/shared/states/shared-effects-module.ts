import {FacultyEffects} from './../../app-core/store/ngrx/faculty/faculty.effects'
import {EffectsModule} from '@ngrx/effects'
import {ProfileEffects} from 'app/app-core/store/ngrx/profile/profile.effects'
import {PublicationEffects} from 'app/app-core/store/ngrx/publication/publication.effects'
import {ResearchEffects} from 'app/app-core/store/ngrx/research/research.effects'
import {SubjectEffects} from 'app/app-core/store/ngrx/subject/subject.effects'

export const sharedEffects = [
    EffectsModule.forFeature([
        FacultyEffects,
        ProfileEffects,
        PublicationEffects,
        ResearchEffects,
        SubjectEffects,
    ]),
]
