import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexPropertyComponent } from './flex-property.component';

describe('FlexPropertyComponent', () => {
  let component: FlexPropertyComponent;
  let fixture: ComponentFixture<FlexPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexPropertyComponent]
    });
    fixture = TestBed.createComponent(FlexPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
