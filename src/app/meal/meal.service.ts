import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Meal} from "./meal";
import {Ingredient} from "../ingredient/ingredient";

const API_URL = environment.apiUrl + '/meals';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Meal[]>(API_URL);
  }

  findAllFull() {
    const params = new HttpParams().set('full', 'true');
    return this.http.get<Meal[]>(API_URL, {params});
  }

  find(id: number) {
    return this.http.get<Meal[]>(`${API_URL}/${id}`);
  }

  findIngredients(id: number) {
    return this.http.get<Ingredient[]>(`${API_URL}/${id}/ingredients`);
  }

  create(meal: Meal) {
    console.log(meal);
    return this.http.post<Meal>(API_URL, meal);
  }

  edit(meal: Meal) {
    return this.http.put<Meal>(`${API_URL}/${meal.id}`, meal);
  }

  delete(id: number) {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
