import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionExampleComponent } from './section-example/section-example.component';
import { ExampleRideComponent } from './example-ride/example-ride.component';
import { ArticleExampleComponent } from './article-example/article-example.component';



@NgModule({
  declarations: [
    SectionExampleComponent,
    ExampleRideComponent,
    ArticleExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleRideComponent,
    SectionExampleComponent,
    ArticleExampleComponent
  ]
})
export class HtmlParkModule { }
