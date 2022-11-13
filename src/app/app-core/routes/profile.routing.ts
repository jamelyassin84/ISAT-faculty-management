import {Route} from '@angular/router'
import {ProfileComponent} from 'app/modules/admin/profile/profile.component'

export const PROFILE_ROUTING: Route[] = [
    {
        path: '',
        component: ProfileComponent,
    },
]
