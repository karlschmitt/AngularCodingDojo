import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AligningButtonsComponent } from './aligning-buttons.component';

describe('AligningButtonsComponent', () => {
  let component: AligningButtonsComponent;
  let fixture: ComponentFixture<AligningButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AligningButtonsComponent]
    });
    fixture = TestBed.createComponent(AligningButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
