import {Component, OnInit} from '@angular/core';
import {Meal} from "../meal";
import {MealService} from "../meal.service";

@Component({
  templateUrl: './meal-page.component.html'
})
export class MealPageComponent implements OnInit {

  meals: Meal[] | undefined;

  constructor(private api: MealService) {
  }

  ngOnInit(): void {
    this.api.findAll().subscribe(meals => this.meals = meals, console.log);
  }
}
