import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './tableau/tableau.component';
import { RudiesDiagrammComponent } from './rudies-diagramm/rudies-diagramm.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    TableauComponent,
    RudiesDiagrammComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    TableauComponent,
    RudiesDiagrammComponent 
  ]
})
export class CodingDojoModule { }
