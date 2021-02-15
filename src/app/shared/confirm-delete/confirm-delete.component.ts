import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'f-confirm-delete',
  templateUrl: './confirm-delete.component.html'
})
export class ConfirmDeleteComponent implements OnInit {

  name: string;
  id: number;

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = this.data.name;
    this.id = this.data.id;
  }

  ngOnInit(): void {
  }

  confirm() {
    this.dialogRef.close(this.id);
  }

  cancel() {
    this.dialogRef.close();
  }
}
