import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyPositioningComponent } from './sticky-positioning.component';

describe('StickyPositioningComponent', () => {
  let component: StickyPositioningComponent;
  let fixture: ComponentFixture<StickyPositioningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyPositioningComponent]
    });
    fixture = TestBed.createComponent(StickyPositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
