import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientPageComponent} from "./ingredient-page.component";


@NgModule({
  declarations: [IngredientPageComponent],
  imports: [
    CommonModule
  ],
  exports: [IngredientPageComponent]
})
export class IngredientPageModule {
}
