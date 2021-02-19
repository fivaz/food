import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Ingredient} from "./ingredient";
import {IngredientInterface} from "./ingredient.interface";
import {map} from "rxjs/operators";

const API_URL = environment.apiUrl + '/ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Ingredient[]>(API_URL)
      .pipe(map(ingredientsObject => this.buildIngredients(ingredientsObject)));
  }

  create(ingredient: Ingredient) {
    return this.http.post<Ingredient>(API_URL, ingredient)
      .pipe(map(ingredientObject => this.buildIngredient(ingredientObject)));
  }

  edit(ingredient: Ingredient) {
    return this.http.put<Ingredient>(API_URL + '/' + ingredient.id, ingredient)
      .pipe(map(ingredientObject => this.buildIngredient(ingredientObject)));
  }

  delete(id: number) {
    return this.http.delete(API_URL + '/' + id);
  }

  buildIngredients(objects: IngredientInterface[]) {
    return objects.map(object => this.buildIngredient(object));
  }

  buildIngredient(object: IngredientInterface) {
    return new Ingredient(
      object.id,
      object.name,
      object.unit,
      object.isCountable,
      object.price,
      object.mealIngredients,
      object.quantity
    );
  }
}
