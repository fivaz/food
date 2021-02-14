import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

import {Meal} from "../meal";

@Component({
  selector: 'f-meal-row',
  templateUrl: './meal-row.component.html',
  styleUrls: ['./meal-row.component.css']
})
export class MealRowComponent implements OnInit {

  @Input() meal!: Meal;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  editIcon = faPencilAlt;
  deleteIcon = faTrash;

  constructor() {
  }

  ngOnInit(): void {
  }

  delete() {
    this.onDelete.emit(this.meal.id);
  }

  edit() {
    this.onEdit.emit(this.meal);
  }
}
