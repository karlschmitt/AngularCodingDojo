import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRideComponent } from './example-ride.component';

describe('ExampleRideComponent', () => {
  let component: ExampleRideComponent;
  let fixture: ComponentFixture<ExampleRideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleRideComponent]
    });
    fixture = TestBed.createComponent(ExampleRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
