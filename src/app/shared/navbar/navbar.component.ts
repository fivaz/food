import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'f-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @Input() title: string = '';

  showFiller = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToMealsPage() {
    this.router.navigateByUrl('/');
  }

  goToIngredientsPage() {
    this.router.navigateByUrl('/ingredients');
  }
}
