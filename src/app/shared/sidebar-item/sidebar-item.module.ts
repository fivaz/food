import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from './sidebar-item.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [SidebarItemComponent],
  exports: [
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SidebarItemModule { }
