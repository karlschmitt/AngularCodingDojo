import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudiesDiagrammComponent } from './rudies-diagramm.component';

describe('RudiesDiagrammComponent', () => {
  let component: RudiesDiagrammComponent;
  let fixture: ComponentFixture<RudiesDiagrammComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RudiesDiagrammComponent]
    });
    fixture = TestBed.createComponent(RudiesDiagrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
