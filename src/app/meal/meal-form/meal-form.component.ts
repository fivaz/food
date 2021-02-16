import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
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
  @Output() onCreate = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  meal: Meal;
  categories: Category[] = Object.values(Category);
  searchIcon = faSearch;
  ingredients: Ingredient[] = [];
  filteredIngredients!: Observable<Ingredient[]>;

  constructor(private formBuilder: FormBuilder,
              private mealAPI: MealService,
              private ingredientAPI: IngredientService,
              public dialogRef: MatDialogRef<MealFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Meal) {
    if (this.data)
      this.meal = this.data;
    else
      this.meal = this.emptyMeal();
  }

  ngOnInit(): void {
    this.buildForm();

    this.ingredientAPI.findAll()
      .subscribe(ingredients => {
        this.ingredients = ingredients;

        this.filteredIngredients = this.mealForm.get('ingredients')!.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      }, console.log);
  }

  private _filter(ingredientName: string): Ingredient[] {
    return this.ingredients.filter(ingredient =>
      ingredient.name.toLowerCase().includes(ingredientName.toLowerCase()));
  }

  emptyMeal(): Meal {
    return {id: 0, name: '', category: Category.breakfast};
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.updateAccount();
    if (this.meal?.id)
      this.edit();
    else
      this.create();
  }

  updateAccount() {
    this.meal.name = this.mealForm.get('name')?.value;
    this.meal.category = this.mealForm.get('category')?.value;
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
      ingredients: [[]],
    });
  }

  getTitle(): string {
    return `${this.meal?.id ? 'edit' : 'create'} meal`;
  }
}
