import {MealIngredient} from "../meal/meal-ingredient";

export interface IngredientInterface {
  id: number;
  name: string;
  unit: string;
  isCountable: boolean;
  price: number;
  mealIngredients: MealIngredient;
  quantity: number;
}
