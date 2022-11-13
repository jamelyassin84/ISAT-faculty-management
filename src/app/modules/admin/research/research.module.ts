import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchComponent } from './research/research.component';
import { ResearchAddComponent } from './research-add/research-add.component';
import { ResearchEditComponent } from './research-edit/research-edit.component';
import { ResearchListComponent } from './research-list/research-list.component';



@NgModule({
  declarations: [
    ResearchComponent,
    ResearchAddComponent,
    ResearchEditComponent,
    ResearchListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResearchModule { }
