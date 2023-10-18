import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexWrapExampleComponent } from './flex-wrap-example.component';

describe('FlexWrapExampleComponent', () => {
  let component: FlexWrapExampleComponent;
  let fixture: ComponentFixture<FlexWrapExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexWrapExampleComponent]
    });
    fixture = TestBed.createComponent(FlexWrapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
