import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MealFormModule} from "../meal-form/meal-form.module";
import {MealRowModule} from "../meal-row/meal-row.module";
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";

import {MealPageComponent} from "./meal-page.component";
import {ConfirmDeleteModule} from "../../shared/confirm-delete/confirm-delete.module";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MealFormComponent} from "../meal-form/meal-form.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [MealPageComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    ConfirmDeleteModule,
    MealFormModule,
    MealRowModule,
    MatButtonModule,
  ],
  exports: [MealPageComponent],
  entryComponents: [MealFormComponent],
})
export class MealPageModule {
}
