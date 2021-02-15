import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Ingredient} from "./ingredient";

const API_URL = environment.apiUrl + '/ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Ingredient[]>(API_URL);
  }

  create(ingredient: Ingredient) {
    return this.http.post<Ingredient>(API_URL, ingredient);
  }

  edit(ingredient: Ingredient) {
    return this.http.put<Ingredient>(API_URL + '/' + ingredient.id, ingredient);
  }

  delete(id: number) {
    return this.http.delete(API_URL + '/' + id);
  }
}
