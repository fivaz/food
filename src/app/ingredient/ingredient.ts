import {MealIngredient} from "../meal/meal-ingredient";
import {IngredientInterface} from "./ingredient.interface";

export class Ingredient {

  id: number;
  name: string;
  unit: string;
  isCountable: boolean;
  price: number;
  mealIngredients: MealIngredient;
  quantity: number;

  constructor(id: number, name: string, unit: string, isCountable: boolean, price: number, mealIngredients: MealIngredient, quantity: number) {
    this.id = id;
    this.name = name;
    this.unit = unit;
    this.isCountable = isCountable;
    this.price = price;
    //TODO ref
    if (mealIngredients != undefined)
      this.mealIngredients = mealIngredients;
    else
      this.mealIngredients = new MealIngredient(0, 0, 0, 0);
    this.quantity = quantity;
  }
}
