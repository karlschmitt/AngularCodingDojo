import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionHeadlineComponent } from './action-headline.component';

describe('ActionHeadlineComponent', () => {
  let component: ActionHeadlineComponent;
  let fixture: ComponentFixture<ActionHeadlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionHeadlineComponent]
    });
    fixture = TestBed.createComponent(ActionHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
