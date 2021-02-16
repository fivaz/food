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
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(private api: MealService, public formDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.api.findAllFull().subscribe(meals => this.meals = meals, console.log);
  }

  openFormDialog(itemIndex?: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if (itemIndex != undefined)
      dialogConfig.data = this.meals[itemIndex];

    const formDialogRef = this.formDialog.open(MealFormComponent, dialogConfig);

    formDialogRef.afterClosed().subscribe(
      meal => meal && this.addOrUpdateMeal(meal));
  }

  addOrUpdateMeal(newMeal: Meal) {
    const index = this.meals.findIndex(meal => meal.id === newMeal.id);
    if (index == -1)
      this.meals.push(newMeal);
    else
      this.meals[index] = newMeal;
    this.table.renderRows();
  }

  openDeleteDialog(itemIndex: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if (itemIndex != undefined)
      dialogConfig.data = {
        name: 'meal',
        id: this.meals[itemIndex].id
      };

    const formDialogRef = this.formDialog.open(ConfirmDeleteComponent, dialogConfig);

    formDialogRef.afterClosed()
      .subscribe(itemIndex => itemIndex && this.removeMeal(itemIndex));
  }

  removeMeal(mealId: number) {
    this.api.delete(mealId).subscribe(() =>
      this.removeMealFromList(mealId));
  }

  removeMealFromList(mealId: number) {
    const index = this.meals.findIndex(meal => meal.id === mealId);
    this.meals.splice(index, 1);
    this.table.renderRows();
  }
}
