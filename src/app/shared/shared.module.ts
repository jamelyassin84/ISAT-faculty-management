import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'

const modules = [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
]

@NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules],
})
export class SharedModule {}
