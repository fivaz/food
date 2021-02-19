import {MealIngredient} from "../meal/meal-ingredient";
import {IngredientInterface} from "./ingredient.interface";

export class Ingredient implements IngredientInterface {
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
    this.mealIngredients = mealIngredients;
    this.quantity = quantity;
  }
}
