import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatExampleComponent } from './float-example.component';

describe('FloatExampleComponent', () => {
  let component: FloatExampleComponent;
  let fixture: ComponentFixture<FloatExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatExampleComponent]
    });
    fixture = TestBed.createComponent(FloatExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
