import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalFlowComponent } from './normal-flow.component';

describe('NormalFlowComponent', () => {
  let component: NormalFlowComponent;
  let fixture: ComponentFixture<NormalFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalFlowComponent]
    });
    fixture = TestBed.createComponent(NormalFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
