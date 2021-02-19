import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientFormComponent} from './ingredient-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [IngredientFormComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
  ],
  exports: [IngredientFormComponent],
})
export class IngredientFormModule {
}
