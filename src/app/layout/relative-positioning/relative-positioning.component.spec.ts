import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativePositioningComponent } from './relative-positioning.component';

describe('RelativePositioningComponent', () => {
  let component: RelativePositioningComponent;
  let fixture: ComponentFixture<RelativePositioningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelativePositioningComponent]
    });
    fixture = TestBed.createComponent(RelativePositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
