import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBodyComponent } from './material/display-body/display-body.component';
import { AbsolutePositioningComponent } from './layout/absolute-positioning/absolute-positioning.component';
import { LayoutingComponent } from './layout/layouting/layouting.component';
import { TableauComponent } from './coding-dojo/tableau/tableau.component';
import { FixedPositioningComponent } from './layout/fixed-positioning/fixed-positioning.component';
import { RudiesDiagrammComponent } from './coding-dojo/rudies-diagramm/rudies-diagramm.component';
import { DisplayCssGritMatCardComponent } from './material/display-css-grit-mat-card/display-css-grit-mat-card.component';
import { AligningButtonsComponent } from './material/aligning-buttons/aligning-buttons.component';
import { ExampleRideComponent } from './html-park/example-ride/example-ride.component';


const routes: Routes = [
{ path: 'display-body', component: DisplayBodyComponent},
{ path: 'display-css-grit-mat-card', component: DisplayCssGritMatCardComponent},
{ path: 'absolute-positioning', component: AbsolutePositioningComponent},
{ path: 'layouting', component: LayoutingComponent},
{ path: 'tableau', component: TableauComponent },
{ path: '', component: TableauComponent },
{ path: 'fixed-positioning', component: FixedPositioningComponent},
{ path: 'rudis-diagramm', component: RudiesDiagrammComponent},
{ path: 'aligning-buttons', component: AligningButtonsComponent },
{ path: 'example-ride', component: ExampleRideComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
