import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {NavbarComponent} from "./navbar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
