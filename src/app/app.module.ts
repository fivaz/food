import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';

import {MealPageModule} from "./meal/meal-page/meal-page.module";
import {IngredientPageModule} from "./ingredient/ingredient-page/ingredient-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    //TODO check if I can remove this MatButton
    MatButtonModule,
    MealPageModule,
    IngredientPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
