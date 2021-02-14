import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealRowComponent } from './meal-row.component';

describe('MealRowComponent', () => {
  let component: MealRowComponent;
  let fixture: ComponentFixture<MealRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
