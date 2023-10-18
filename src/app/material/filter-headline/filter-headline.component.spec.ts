import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHeadlineComponent } from './filter-headline.component';

describe('FilterHeadlineComponent', () => {
  let component: FilterHeadlineComponent;
  let fixture: ComponentFixture<FilterHeadlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterHeadlineComponent]
    });
    fixture = TestBed.createComponent(FilterHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
