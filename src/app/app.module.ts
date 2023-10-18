import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';
import { CodingDojoModule } from './coding-dojo/coding-dojo.module';
import { HtmlParkModule } from './html-park/html-park.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    CodingDojoModule,
    HtmlParkModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
