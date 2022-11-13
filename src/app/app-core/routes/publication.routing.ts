import {Route} from '@angular/router'
import {PublicationsComponent} from 'app/modules/admin/publications/publications.component'

export const PUBLICATION_ROUTING: Route[] = [
    {
        path: '',
        component: PublicationsComponent,
    },
]
