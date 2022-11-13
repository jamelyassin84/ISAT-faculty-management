import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications.component';
import { PublicationsAddComponent } from './publications-add/publications-add.component';
import { PublicationsEditComponent } from './publications-edit/publications-edit.component';
import { PublicationsListComponent } from './publications-list/publications-list.component';



@NgModule({
  declarations: [
    PublicationsComponent,
    PublicationsAddComponent,
    PublicationsEditComponent,
    PublicationsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicationsModule { }
