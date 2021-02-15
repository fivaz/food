import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Meal} from "./meal";

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

  create(meal: Meal) {
    return this.http.post<Meal>(API_URL, meal);
  }

  edit(meal: Meal) {
    return this.http.put<Meal>(API_URL + '/' + meal.id, meal);
  }

  delete(id: number) {
    return this.http.delete(API_URL + '/' + id);
  }
}
