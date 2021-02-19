import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../ingredient";
import {IngredientService} from "../ingredient.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {IngredientFormComponent} from "../ingredient-form/ingredient-form.component";
import {MatTable} from "@angular/material/table";

@Component({
  templateUrl: './ingredient-page.component.html',
  styleUrls: ['./ingredient-page.component.css']
})
export class IngredientPageComponent implements OnInit {
  ingredients: Ingredient[] = [];
  @ViewChild(MatTable) table!: MatTable<any>;
  columnsToDisplay = [
    'name',
    'unit',
    'isCountable',
    'price',
    'quantity',
    'actions',
  ];

  constructor(private api: IngredientService,
              public formDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.api.findAll().subscribe(ingredients => this.ingredients = ingredients);
  }

  openFormDialog(itemIndex?: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    // dialogConfig.width = '500px';

    if (itemIndex != undefined)
      dialogConfig.data = this.ingredients[itemIndex];

    const formDialogRef = this.formDialog.open(IngredientFormComponent, dialogConfig);

    formDialogRef.afterClosed().subscribe(
      meal => meal && this.addOrUpdateMeal(meal));
  }

  addOrUpdateMeal(newIngredient: Ingredient) {
    const index = this.ingredients.findIndex(ingredient => ingredient.id === newIngredient.id);
    if (index == -1)
      this.ingredients.push(newIngredient);
    else
      this.ingredients[index] = newIngredient;
    this.table.renderRows();
  }
}
