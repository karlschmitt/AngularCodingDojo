import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCssGritMatCardComponent } from './display-css-grit-mat-card.component';

describe('DisplayGritListComponent', () => {
  let component: DisplayCssGritMatCardComponent;
  let fixture: ComponentFixture<DisplayCssGritMatCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCssGritMatCardComponent]
    });
    fixture = TestBed.createComponent(DisplayCssGritMatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
