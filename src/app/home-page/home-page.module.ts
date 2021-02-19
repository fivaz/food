import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {NavbarModule} from "../shared/navbar/navbar.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    NavbarModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class HomePageModule { }
