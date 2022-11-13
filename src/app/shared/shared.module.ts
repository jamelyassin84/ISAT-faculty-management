import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {globalPipes} from './pipes/global-pipes'
import {sharedPipes} from './pipes/shared-pipes'
import {globalDirectives} from './directives/global-directives'
import {sharedDirectives} from './directives/shared-directives'
import {modalComponents} from './components/modal-components'
import {popUpComponents} from './components/pop-up-components'
import {sharedComponents} from './components/shared-components'
import {globalComponents} from './components/global-components'
import {globalForms} from './components/global-forms'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {NgApexchartsModule} from 'ng-apexcharts'
import {sharedEffects} from './states/shared-ffects-module'
import {sharedStateModules} from './states/shared-state-modules'
import {angularMaterialModules} from './angular-material/angular-material-modules'

const pipes = [...globalPipes, ...sharedPipes]

const directives = [...globalDirectives, ...sharedDirectives]

const components = [
    ...modalComponents,
    ...popUpComponents,
    ...sharedComponents,
    ...globalComponents,
    ...globalForms,
]

const modules = [
    RouterModule,
    FormsModule,
    CommonModule,

    ReactiveFormsModule,
    NgApexchartsModule,
    ...sharedEffects,
    ...sharedStateModules,
    ...angularMaterialModules,
]

@NgModule({
    imports: [...modules],
    declarations: [...components, ...directives, ...pipes],
    exports: [...components, ...directives, ...pipes, ...modules],
    providers: [
        // {
        //     provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
        //     useClass: DefaultMatCalendarRangeStrategy,
        // },
    ],
})
export class SharedModule {}
