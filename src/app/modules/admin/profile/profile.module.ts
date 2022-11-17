import {PROFILE_ROUTING} from './../../../app-core/routes/profile.routing'
import {NgModule} from '@angular/core'
import {ProfileComponent} from './profile.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'
import {ProfileAccountComponent} from './profile-account/profile-account.component'
import {ProfileInformationComponent} from './profile-information/profile-information.component'
import {ProfileEmploymentComponent} from './profile-employment/profile-employment.component'
import {ProfileEducationalBackgroundComponent} from './profile-educational-backround/profile-educational-backround.component'
import {ProfileOthersComponent} from './profile-others/profile-others.component'

const components = [
    ProfileComponent,
    ProfileAccountComponent,
    ProfileInformationComponent,
    ProfileEmploymentComponent,
    ProfileEducationalBackgroundComponent,
    ProfileOthersComponent,
]

const modules = [SharedModule, RouterModule.forChild(PROFILE_ROUTING)]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class ProfileModule {}
