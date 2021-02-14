import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Meal} from "./meal";

const API_URL = environment.apiUrl + '/meals';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Meal[]>(API_URL);
  }
}
