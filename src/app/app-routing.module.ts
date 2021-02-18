import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MealPageComponent} from "./meal/meal-page/meal-page.component";
import {IngredientPageComponent} from "./ingredient/ingredient-page/ingredient-page.component";

const routes: Routes = [
  {
    path: '',
    component: MealPageComponent,
  }, {
    path: 'ingredients',
    component: IngredientPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
