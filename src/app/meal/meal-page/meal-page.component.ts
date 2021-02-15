import {Component, OnInit, ViewChild} from '@angular/core';
import {Meal} from "../meal";
import {MealService} from "../meal.service";
import {ConfirmDeleteComponent} from "../../shared/confirm-delete/confirm-delete.component";
import {MealFormComponent} from "../meal-form/meal-form.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatTable} from "@angular/material/table";

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
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(private api: MealService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.api.findAll().subscribe(meals => this.meals = meals, console.log);
  }

  openDialog(itemIndex?: number) {
    console.log(itemIndex);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if (itemIndex != undefined) {
      dialogConfig.data = this.meals[itemIndex];
    }

    const dialogRef = this.dialog.open(MealFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      meal => {
        if (meal != undefined) {
          this.addOrUpdateMeal(meal);
        }
      }
    );
  }

  addOrUpdateMeal(newMeal: Meal) {
    const index = this.meals.findIndex(meal => meal.id === newMeal.id);
    if (index == -1)
      this.meals.push(newMeal);
    else
      this.meals[index] = newMeal;
    this.table.renderRows();
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
}
