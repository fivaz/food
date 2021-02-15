import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {MealRowComponent} from "./meal-row.component";


@NgModule({
  declarations: [MealRowComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [MealRowComponent]
})
export class MealRowModule {
}
