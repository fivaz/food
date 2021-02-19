import {MealIngredientInterface} from "./meal-ingredient.interface";

export class MealIngredient implements MealIngredientInterface {
  id: number;
  ingredientId: number;
  mealId: number;
  quantity: number;

  constructor(id: number, ingredientId: number, mealId: number, quantity: number) {
    this.id = id;
    this.ingredientId = ingredientId;
    this.mealId = mealId;
    this.quantity = quantity;
  }
}
