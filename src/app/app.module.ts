import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealPageComponent } from './meal/meal-page/meal-page.component';
import { MealRowComponent } from './meal/meal-row/meal-row.component';
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmDeleteComponent } from './shared/confirm-delete/confirm-delete.component';
import { MealFormComponent } from './meal/meal-form/meal-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MealPageComponent,
    MealRowComponent,
    ConfirmDeleteComponent,
    MealFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
