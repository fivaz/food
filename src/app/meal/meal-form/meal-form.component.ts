import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

import {Meal} from "../meal";
import {Category} from "../category.enum";
import {MealService} from "../meal.service";
import {Ingredient} from "../../ingredient/ingredient";
import {IngredientService} from "../../ingredient/ingredient.service";

@Component({
  selector: 'f-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css'],
})
export class MealFormComponent implements OnInit {

  mealForm!: FormGroup;
  meal: Meal;
  categories: Category[] = Object.values(Category);
  selectAvailableIngredients = new FormControl();

  ingredients: Ingredient[] = [];
  filteredIngredients!: Observable<Ingredient[]>;
  addedIngredients: Ingredient[] = [];

  //TODO check later how to remove the focus of the autocomplete input once I choose an option

  constructor(private formBuilder: FormBuilder,
              private mealAPI: MealService,
              private ingredientAPI: IngredientService,
              public dialogRef: MatDialogRef<MealFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Meal) {

    this.meal = this.data || this.emptyMeal();
  }

  ngOnInit(): void {
    this.buildForm();

    this.ingredientAPI.findAll()
      .subscribe(ingredients => {
        this.ingredients = ingredients;

        this.filteredIngredients = this.selectAvailableIngredients.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.ingredients.slice())
          );

      }, console.log);
  }

  addIngredient() {
    const index = this.ingredients.findIndex(ingredient => ingredient.id == this.selectAvailableIngredients.value.id);
    this.addedIngredients.push(...this.ingredients.splice(index, 1));
    this.selectAvailableIngredients.setValue('');
  }

  removeIngredient(id: number) {
    const index = this.addedIngredients.findIndex(ingredient => ingredient.id == id);
    this.ingredients.push(...this.addedIngredients.splice(index, 1));
    //this is to display the ingredients back to the list
    this.selectAvailableIngredients.setValue('');
  }


  updateQuantity(event: Event, ingredientId: number) {
    //TODO check if I can do it better
    const index = this.addedIngredients.findIndex(ingredient => ingredient.id == ingredientId);
    this.addedIngredients[index].quantity = Number((event.target as HTMLInputElement).value);
  }

  displayName(ingredient: Ingredient): string {
    return ingredient && ingredient.name ? ingredient.name : '';
  }

  private _filter(name: string): Ingredient[] {
    const filterValue = name.toLowerCase();

    return this.ingredients.filter(ingredient => ingredient.name.toLowerCase().indexOf(filterValue) === 0);
  }

  emptyMeal(): Meal {
    return {id: 0, name: '', category: Category.breakfast, ingredients: []};
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.updateMeal();
    if (this.meal?.id)
      this.edit();
    else
      this.create();
  }

  updateMeal() {
    this.meal.name = this.mealForm.get('name')?.value;
    this.meal.category = this.mealForm.get('category')?.value;
    console.log(this.addedIngredients);
    this.meal.ingredients = this.addedIngredients;
  }

  create() {
    this.mealAPI.create(this.meal)
      .subscribe(meal => this.dialogRef.close(meal));
  }

  edit() {
    this.mealAPI.edit(this.meal)
      .subscribe(meal => this.dialogRef.close(meal));
  }

  buildForm() {
    this.mealForm = this.formBuilder.group({
      name: [this.meal?.name || '', Validators.required],
      category: [this.meal?.category || this.categories[0]],
    });
  }

  getTitle(): string {
    return `${this.meal?.id ? 'edit' : 'create'} meal`;
  }
}
