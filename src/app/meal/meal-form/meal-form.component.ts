import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Meal} from "../meal";
import {Category} from "../category.enum";

@Component({
  selector: 'f-meal-form',
  templateUrl: './meal-form.component.html'
})
export class MealFormComponent implements OnInit {

  visible: boolean = false;
  mealForm: FormGroup = new FormGroup({id: new FormControl(), name: new FormControl(), category: new FormControl()});
  @Output() onCreate = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  meal: Meal | undefined;
  categories: Category[] = Object.values(Category);

  constructor(private formBuilder: FormBuilder) {
    console.log(this.categories);
  }

  ngOnInit(): void {
  }

  open(meal?: Meal) {
    this.visible = true;
    if (meal)
      this.meal = meal;
    this.buildForm();
  }

  close() {
    this.visible = false;
    this.meal = undefined;
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
