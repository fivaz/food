import {Component, Inject, OnInit} from '@angular/core';
import {Ingredient} from "../ingredient";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'f-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {
  ingredientForm!: FormGroup;
  ingredient: Ingredient;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<IngredientFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Ingredient) {

    this.ingredient = this.data || IngredientFormComponent.emptyIngredient();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.ingredientForm = this.formBuilder.group({
      name: [this.ingredient?.name || '', Validators.required],
      unit: [this.ingredient?.unit || '', Validators.required],
      isCountable: [this.ingredient?.isCountable || ''],
      price: [this.ingredient?.price || ''],
      quantity: [this.ingredient?.quantity || ''],
    });
  }

  getTitle(): string {
    return `${this.ingredient?.id ? 'edit' : 'create'} ingredient`;
  }

  private static emptyIngredient(): Ingredient {
    return {
      id: 0,
      name: '',
      unit: '',
      isCountable: false,
      mealIngredients: {id: 0, mealId: 0, ingredientId: 0, quantity: 0},
      quantity: 0,
      price: 0
    };
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.updateIngredient();
    if (this.ingredient.id)
      this.edit();
    else
      this.create();
  }

  updateIngredient() {
    // this.ingredient.name = this.ingredientForm.get('name')?.value;
    // this.ingredient.category = this.ingredientForm.get('category')?.value;
  }

  create() {
    // this.ingredientAPI.create(this.ingredient)
    //   .subscribe(ingredient => this.dialogRef.close(ingredient));
  }

  edit() {
    // this.ingredientAPI.edit(this.ingredient)
    //   .subscribe(ingredient => this.dialogRef.close(ingredient));
  }

}
