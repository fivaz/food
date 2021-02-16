import {Category} from "./category.enum";
import {Ingredient} from "../ingredient/ingredient";

export interface Meal {

  id: number;
  name: string;
  category: Category;
  ingredients: Ingredient[];
}
