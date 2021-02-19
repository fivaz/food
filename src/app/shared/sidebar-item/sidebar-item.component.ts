import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'f-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements OnInit {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() path!: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  changeRoute() {
    this.router.navigateByUrl(this.path).then();
  }
}
