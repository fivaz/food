import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'f-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string = 'Waser Food';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }
}
