import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'f-confirm-delete',
  templateUrl: './confirm-delete.component.html'
})
export class ConfirmDeleteComponent implements OnInit {

  visible: boolean = false;
  elementId: number | undefined;
  @Input() element!: string;
  @Output() onConfirm = new EventEmitter();

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

  confirm() {
    this.onConfirm.emit(this.elementId);
    this.visible = false;
  }
}
