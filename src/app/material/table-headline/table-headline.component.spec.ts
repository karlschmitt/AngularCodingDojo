import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadlineComponent } from './table-headline.component';

describe('TableHeadlineComponent', () => {
  let component: TableHeadlineComponent;
  let fixture: ComponentFixture<TableHeadlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableHeadlineComponent]
    });
    fixture = TestBed.createComponent(TableHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
