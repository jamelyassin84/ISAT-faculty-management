import {NgModule} from '@angular/core'
import {PublicationsComponent} from './publications.component'
import {PublicationsAddComponent} from './publications-add/publications-add.component'
import {PublicationsEditComponent} from './publications-edit/publications-edit.component'
import {PublicationsListComponent} from './publications-list/publications-list.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'
import {PUBLICATION_ROUTING} from 'app/app-core/routes/publication.routing'

const components = [
    PublicationsComponent,
    PublicationsAddComponent,
    PublicationsEditComponent,
    PublicationsListComponent,
]

const modules = [SharedModule, RouterModule.forChild(PUBLICATION_ROUTING)]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class PublicationsModule {}
