import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Meal} from "../meal";
import {Category} from "../category.enum";
import {MealService} from "../meal.service";

@Component({
  selector: 'f-meal-form',
  templateUrl: './meal-form.component.html'
})
export class MealFormComponent implements OnInit {

  visible: boolean = false;
  mealForm!: FormGroup;
  @Output() onCreate = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  meal: Meal;
  categories: Category[] = Object.values(Category);

  constructor(private formBuilder: FormBuilder, private api: MealService) {
    this.meal = this.emptyMeal();
  }

  ngOnInit(): void {
  }

  open(meal?: Meal) {
    this.visible = true;
    if (meal)
      this.meal = meal;
    this.buildForm();
  }

  emptyMeal(): Meal {
    return {id: 0, name: '', category: Category.breakfast};
  }

  close() {
    this.visible = false;
    this.meal = this.emptyMeal();
  }

  submit() {
    this.updateAccount();
    if (this.meal?.id)
      this.edit();
    else
      this.create();
  }

  updateAccount() {
    this.meal = {
      id: this.mealForm.get('id')?.value,
      name: this.mealForm.get('name')?.value,
      category: this.mealForm.get('category')?.value
    };
  }

  create() {
    this.api.create(this.meal)
      .subscribe(meal => {
        this.onCreate.emit(meal);
        this.close();
      });
  }

  edit() {
    this.api.edit(this.meal)
      .subscribe(meal => {
        this.onEdit.emit(meal);
        this.close();
      });
  }

  buildForm() {
    this.mealForm = this.formBuilder.group({
      id: [this.meal?.id || ''],
      name: [this.meal?.name || '', Validators.required],
      category: [this.meal?.category || this.categories[0]],
    });
  }

  getTitle(): string {
    return `${this.meal?.id ? 'edit' : 'create'} meal`;
  }
}
