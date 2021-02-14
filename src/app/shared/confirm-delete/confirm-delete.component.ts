import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'f-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  visible: boolean = false;
  elementId: number | undefined;
  @Input() element!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  open(id: number) {
    this.visible = true;
    this.elementId = id;
  }

  close() {
    this.visible = false;
  }
}
