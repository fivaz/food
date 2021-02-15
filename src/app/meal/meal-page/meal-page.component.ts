import {Component, OnInit, ViewChild} from '@angular/core';
import {Meal} from "../meal";
import {MealService} from "../meal.service";
import {ConfirmDeleteComponent} from "../../shared/confirm-delete/confirm-delete.component";
import {MealFormComponent} from "../meal-form/meal-form.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  templateUrl: './meal-page.component.html',
  styleUrls: ['./meal-page.component.css']
})
export class MealPageComponent implements OnInit {

  meals: Meal[] = [];
  columnsToDisplay = ['name', 'category', 'actions'];
  //TODO check if all these ! are the best practices
  @ViewChild(MealFormComponent, {static: false}) form!: MealFormComponent;
  @ViewChild(ConfirmDeleteComponent, {static: false}) confirm!: ConfirmDeleteComponent;

  constructor(private api: MealService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.api.findAll().subscribe(meals => this.meals = meals, console.log);
  }

  openForm(meal?: Meal) {
    this.form.open(meal);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      name: 'testando'
    };

    this.dialog.open(MealFormComponent, dialogConfig);
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
