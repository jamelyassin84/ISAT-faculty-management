import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingAndSeminarsComponent } from './training-and-seminars.component';
import { TrainingAndSeminarsListComponent } from './training-and-seminars-list/training-and-seminars-list.component';
import { TrainingAndSeminarsAddComponent } from './training-and-seminars-add/training-and-seminars-add.component';
import { TrainingAndSeminarsEditComponent } from './training-and-seminars-edit/training-and-seminars-edit.component';



@NgModule({
  declarations: [
    TrainingAndSeminarsComponent,
    TrainingAndSeminarsListComponent,
    TrainingAndSeminarsAddComponent,
    TrainingAndSeminarsEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TrainingAndSeminarsModule { }
