import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Meal} from "./meal";
import {Ingredient} from "../ingredient/ingredient";
import {map} from "rxjs/operators";
import {MealInterface} from "./meal.interface";

const API_URL = environment.apiUrl + '/meals';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Meal[]>(API_URL)
      .pipe(map(mealsObject => this.buildMeals(mealsObject)));
  }

  findAllFull() {
    const params = new HttpParams().set('full', 'true');
    return this.http.get<Meal[]>(API_URL, {params})
      .pipe(map(mealsObject => this.buildMeals(mealsObject)));
  }


  find(id: number) {
    return this.http.get<Meal>(`${API_URL}/${id}`)
      .pipe(map(mealObject => this.buildMeal(mealObject)));
  }

  findIngredients(id: number) {
    return this.http.get<Ingredient[]>(`${API_URL}/${id}/ingredients`);
  }

  create(meal: Meal) {
    console.log(meal);
    return this.http.post<Meal>(API_URL, meal)
      .pipe(map(mealObject => this.buildMeal(mealObject)));
  }

  edit(meal: Meal) {
    return this.http.put<Meal>(`${API_URL}/${meal.id}`, meal)
      .pipe(map(mealObject => this.buildMeal(mealObject)));
  }

  delete(id: number) {
    return this.http.delete(`${API_URL}/${id}`);
  }

  buildMeals(objects: MealInterface[]) {
    return objects.map(object => this.buildMeal(object));
  }

  buildMeal(object: MealInterface) {
    return new Meal(object.category, object.id, object.ingredients, object.name);
  }
}
