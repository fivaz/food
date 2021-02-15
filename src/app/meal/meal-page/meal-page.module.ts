import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MealPageComponent} from "./meal-page.component";
import {MealFormModule} from "../meal-form/meal-form.module";
import {MealRowModule} from "../meal-row/meal-row.module";
import {ConfirmDeleteModule} from "../../shared/confirm-delete/confirm-delete.module";


@NgModule({
  declarations: [MealPageComponent],
  imports: [
    CommonModule,
    MealFormModule,
    MealRowModule,
    ConfirmDeleteModule
  ],
  exports: [MealPageComponent]
})
export class MealPageModule {
}
