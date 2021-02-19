import {Category} from "./category.enum";
import {Ingredient} from "../ingredient/ingredient";
import {MealInterface} from "./meal.interface";

export class Meal implements MealInterface {
  category: Category;
  id: number;
  ingredients: Ingredient[];
  name: string;

  constructor(category: Category, id: number, ingredients: Ingredient[], name: string) {
    this.category = category;
    this.id = id;
    this.ingredients = ingredients;
    this.name = name;
  }

  getPrice(): number {
    return this.ingredients.reduce((total, ingredient) => {
      if (ingredient.isCountable)
        return total + (ingredient.price * ingredient.mealIngredients.quantity);
      else
        return total;
    }, 0);
  }
}
