import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsolutePositioningComponent } from './absolute-positioning/absolute-positioning.component';
import { FlexPropertyComponent } from './flex-property/flex-property.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FloatExampleComponent } from './float-example/float-example.component';
import { GridComponent } from './grid/grid.component';
import { NormalFlowComponent } from './normal-flow/normal-flow.component';
import { PlacingItemsComponent } from './placing-items/placing-items.component';
import { PositioningComponent } from './positioning/positioning.component';
import { RelativePositioningComponent } from './relative-positioning/relative-positioning.component';
import { LayoutingComponent } from './layouting/layouting.component';
import { FlexComponent } from './flex/flex.component';
import { FixedPositioningComponent } from './fixed-positioning/fixed-positioning.component';
import { StickyPositioningComponent } from './sticky-positioning/sticky-positioning.component';
import { FlexWrapExampleComponent } from './flex-wrap-example/flex-wrap-example.component';



@NgModule({
  declarations: [
    AbsolutePositioningComponent,
    FlexPropertyComponent,
    FlexboxComponent,
    FloatExampleComponent,
    GridComponent,
    NormalFlowComponent,
    PlacingItemsComponent,
    PositioningComponent,
    RelativePositioningComponent,
    LayoutingComponent,
    FlexComponent,
    FixedPositioningComponent,
    StickyPositioningComponent,
    FlexWrapExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AbsolutePositioningComponent,
    LayoutingComponent,
    FixedPositioningComponent,
    FlexWrapExampleComponent

  ]
})
export class LayoutModule { }
