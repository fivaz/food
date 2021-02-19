import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientPageComponent} from "./ingredient-page.component";
import {MatCardModule} from "@angular/material/card";
import {NavbarModule} from "../../shared/navbar/navbar.module";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {IngredientFormModule} from "../ingredient-form/ingredient-form.module";


@NgModule({
  declarations: [IngredientPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    NavbarModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    IngredientFormModule
  ],
  exports: [IngredientPageComponent]
})
export class IngredientPageModule {
}
