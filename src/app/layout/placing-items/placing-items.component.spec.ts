import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacingItemsComponent } from './placing-items.component';

describe('PlacingItemsComponent', () => {
  let component: PlacingItemsComponent;
  let fixture: ComponentFixture<PlacingItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacingItemsComponent]
    });
    fixture = TestBed.createComponent(PlacingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
