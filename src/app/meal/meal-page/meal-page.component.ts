import {Component, OnInit, ViewChild} from '@angular/core';
import {Meal} from "../meal";
import {MealService} from "../meal.service";
import {ConfirmDeleteComponent} from "../../shared/confirm-delete/confirm-delete.component";
import {MealFormComponent} from "../meal-form/meal-form.component";

@Component({
  templateUrl: './meal-page.component.html'
})
export class MealPageComponent implements OnInit {

  meals: Meal[] = [];
  //TODO check if all these ! are the best practices
  @ViewChild(MealFormComponent, {static: false}) form!: MealFormComponent;
  @ViewChild(ConfirmDeleteComponent, {static: false}) confirm!: ConfirmDeleteComponent;

  constructor(private api: MealService) {
  }

  ngOnInit(): void {
    this.api.findAll().subscribe(meals => this.meals = meals, console.log);
  }

  openForm(meal?: Meal) {
    this.form.open(meal);
  }

  openConfirm(id: number) {
    this.confirm.open(id);
  }

  removeMeal(mealId: number) {
    this.api.delete(mealId).subscribe(() =>
      this.removeMealFromList(mealId));
  }

  removeMealFromList(mealId: number) {
    const index = this.meals.findIndex(meal => meal.id === mealId);
    this.meals.splice(index, 1);
  }

  addMeal(meal: Meal) {
    this.meals.push(meal);
  }

  updateMeal(newMeal: Meal) {
    const index = this.meals.findIndex(meal => meal.id === newMeal.id);
    this.meals.splice(index, 1);
    this.meals[index] = newMeal;
  }
}
