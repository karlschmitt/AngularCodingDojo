import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeadlineComponent } from './table-headline/table-headline.component';
import { TableCardComponent } from './table-card/table-card.component';
import { FilterCardComponent } from './filter-card/filter-card.component';
import { FilterHeadlineComponent } from './filter-headline/filter-headline.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { ActionHeadlineComponent } from './action-headline/action-headline.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { DisplayBodyComponent } from './display-body/display-body.component';
import { DisplayCssGritMatCardComponent } from './display-css-grit-mat-card/display-css-grit-mat-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AligningButtonsComponent } from './aligning-buttons/aligning-buttons.component';


@NgModule({
  declarations: [
    TableHeadlineComponent,
    TableCardComponent,
    FilterCardComponent,
    FilterHeadlineComponent,
    ActionCardComponent,
    ActionHeadlineComponent,
    DisplayBodyComponent,
    DisplayCssGritMatCardComponent,
    AligningButtonsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    DisplayBodyComponent,
    DisplayCssGritMatCardComponent,
    AligningButtonsComponent 
  ]
})
export class MaterialModule { }
