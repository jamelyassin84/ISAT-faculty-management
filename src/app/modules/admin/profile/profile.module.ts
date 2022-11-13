import {PROFILE_ROUTING} from './../../../app-core/routes/profile.routing'
import {NgModule} from '@angular/core'
import {ProfileComponent} from './profile.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

const components = [ProfileComponent]

const modules = [SharedModule, RouterModule.forChild(PROFILE_ROUTING)]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class ProfileModule {}
