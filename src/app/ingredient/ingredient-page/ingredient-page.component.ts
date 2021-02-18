import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../ingredient";
import {IngredientService} from "../ingredient.service";

@Component({
  templateUrl: './ingredient-page.component.html',
  styleUrls: ['./ingredient-page.component.css']
})
export class IngredientPageComponent implements OnInit {
  ingredients: Ingredient[] = [];
  columnsToDisplay = [
    'name',
    'unit',
    'isCountable',
    'price',
    'quantity',
    'actions',
  ];

  constructor(private api: IngredientService) {
  }

  ngOnInit(): void {
    this.api.findAll().subscribe(ingredients => this.ingredients = ingredients);
  }

}
