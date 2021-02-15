import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {MealFormComponent} from "./meal-form.component";


@NgModule({
  declarations: [MealFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [MealFormComponent]
})
export class MealFormModule {
}
