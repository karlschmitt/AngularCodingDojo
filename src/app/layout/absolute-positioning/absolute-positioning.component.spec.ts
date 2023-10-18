import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsolutePositioningComponent } from './absolute-positioning.component';

describe('AbsolutePositioningComponent', () => {
  let component: AbsolutePositioningComponent;
  let fixture: ComponentFixture<AbsolutePositioningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsolutePositioningComponent]
    });
    fixture = TestBed.createComponent(AbsolutePositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
