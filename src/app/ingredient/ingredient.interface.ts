import {MealIngredientInterface} from "../meal/meal-ingredient.interface";

export interface IngredientInterface {
  id: number;
  name: string;
  unit: string;
  isCountable: boolean;
  price: number;
  mealIngredients: MealIngredientInterface;
  quantity: number;
}
