import {Component, Input, OnInit} from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

import {Meal} from "../meal";

@Component({
  selector: 'f-meal-row',
  templateUrl: './meal-row.component.html',
  styleUrls: ['./meal-row.component.css']
})
export class MealRowComponent implements OnInit {

  @Input() meal!: Meal;

  edit = faPencilAlt;
  delete = faTrash;

  constructor() {
  }

  ngOnInit(): void {
  }

}
