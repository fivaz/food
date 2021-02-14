import {Component, OnInit, ViewChild} from '@angular/core';
import {Meal} from "../meal";
import {MealService} from "../meal.service";
import {ConfirmDeleteComponent} from "../../shared/confirm-delete/confirm-delete.component";

@Component({
  templateUrl: './meal-page.component.html'
})
export class MealPageComponent implements OnInit {

  meals: Meal[] | undefined;
  @ViewChild(ConfirmDeleteComponent, {static: false}) confirm!: ConfirmDeleteComponent;

  constructor(private api: MealService) {
  }

  ngOnInit(): void {
    this.api.findAll().subscribe(meals => this.meals = meals, console.log);
  }

  openConfirm(id: number) {
    this.confirm.open(id);
  }
}
