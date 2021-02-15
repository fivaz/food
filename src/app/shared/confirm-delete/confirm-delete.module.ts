import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";

import {ConfirmDeleteComponent} from "./confirm-delete.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [ConfirmDeleteComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [ConfirmDeleteComponent]
})
export class ConfirmDeleteModule {
}
