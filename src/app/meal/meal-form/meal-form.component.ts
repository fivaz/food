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
import {MealIngredient} from "../meal-ingredient";

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

  availableIngredients: Ingredient[] = [];
  filteredIngredients!: Observable<Ingredient[]>;

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
      .subscribe(allIngredients => {
        //remove from list the existing ingredients
        if (this.meal.id)
          this.availableIngredients = allIngredients.filter(ingredient =>
            !this.meal.ingredients.find(existingIngredient => ingredient.id == existingIngredient.id));
        else
          this.availableIngredients = allIngredients;

        this.filteredIngredients = this.selectAvailableIngredients.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.availableIngredients.slice())
          );

      }, console.log);
  }

  emptyMeal(): Meal {
    return {id: 0, name: '', category: Category.breakfast, ingredients: []};
  }

  buildForm() {
    this.mealForm = this.formBuilder.group({
      name: [this.meal?.name || '', Validators.required],
      category: [this.meal?.category || this.categories[0]],
    });
  }

  addIngredient() {
    const index = this.availableIngredients.findIndex(ingredient => ingredient.id == this.selectAvailableIngredients.value.id);
    this.availableIngredients[index].mealIngredients = this.emptyMealIngredient(this.availableIngredients[index].id);
    this.meal.ingredients.push(...this.availableIngredients.splice(index, 1));
    this.selectAvailableIngredients.setValue('');
  }

  emptyMealIngredient(ingredientId: number): MealIngredient {
    return {
      id: 0,
      ingredientId: ingredientId,
      mealId: this.meal.id,
      quantity: 0
    };
  }

  removeIngredient(id: number) {
    const index = this.meal.ingredients.findIndex(ingredient => ingredient.id == id);
    this.availableIngredients.push(...this.meal.ingredients.splice(index, 1));
    //this is to display the ingredients back to the list
    this.selectAvailableIngredients.setValue('');
  }

  updateQuantity(event: Event, ingredientId: number) {
    //TODO check if I can do it better
    const index = this.meal.ingredients.findIndex(ingredient => ingredient.id == ingredientId);
    if (this.meal.ingredients[index].mealIngredients == undefined)
      this.meal.ingredients[index].mealIngredients = this.emptyMealIngredient(index);
    this.meal.ingredients[index].mealIngredients.quantity = Number((event.target as HTMLInputElement).value);
  }

  displayName(ingredient: Ingredient): string {
    return ingredient && ingredient.name ? ingredient.name : '';
  }

  private _filter(name: string): Ingredient[] {
    const filterValue = name.toLowerCase();

    return this.availableIngredients.filter(ingredient => ingredient.name.toLowerCase().indexOf(filterValue) === 0);
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.updateMeal();
    if (this.meal.id)
      this.edit();
    else
      this.create();
  }

  updateMeal() {
    this.meal.name = this.mealForm.get('name')?.value;
    this.meal.category = this.mealForm.get('category')?.value;
  }

  create() {
    console.log(this.meal);
    this.mealAPI.create(this.meal)
      .subscribe(meal => this.dialogRef.close(meal));
  }

  edit() {
    this.mealAPI.edit(this.meal)
      .subscribe(meal => this.dialogRef.close(meal));
  }

  getTitle(): string {
    return `${this.meal?.id ? 'edit' : 'create'} meal`;
  }
}
