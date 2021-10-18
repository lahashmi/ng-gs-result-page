import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFiltersComponent } from './result-filters.component';

describe('ResultFiltersComponent', () => {
  let component: ResultFiltersComponent;
  let fixture: ComponentFixture<ResultFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
