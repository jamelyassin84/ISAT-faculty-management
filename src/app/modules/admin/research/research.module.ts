import {NgModule} from '@angular/core'
import {ResearchComponent} from './research/research.component'
import {ResearchAddComponent} from './research-add/research-add.component'
import {ResearchEditComponent} from './research-edit/research-edit.component'
import {ResearchListComponent} from './research-list/research-list.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'
import {RESEARCH_ROUTING} from 'app/app-core/routes/research.routing'

const components = [
    ResearchComponent,
    ResearchAddComponent,
    ResearchEditComponent,
    ResearchListComponent,
]

const modules = [SharedModule, RouterModule.forChild(RESEARCH_ROUTING)]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class ResearchModule {}
