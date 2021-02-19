import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MealPageComponent} from "./meal/meal-page/meal-page.component";
import {IngredientPageComponent} from "./ingredient/ingredient-page/ingredient-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'meals',
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
