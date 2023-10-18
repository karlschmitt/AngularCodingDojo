import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPositioningComponent } from './fixed-positioning.component';

describe('FixedPositioningComponent', () => {
  let component: FixedPositioningComponent;
  let fixture: ComponentFixture<FixedPositioningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedPositioningComponent]
    });
    fixture = TestBed.createComponent(FixedPositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
