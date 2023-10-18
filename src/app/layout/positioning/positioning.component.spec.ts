import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositioningComponent } from './positioning.component';

describe('PositioningComponent', () => {
  let component: PositioningComponent;
  let fixture: ComponentFixture<PositioningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositioningComponent]
    });
    fixture = TestBed.createComponent(PositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
