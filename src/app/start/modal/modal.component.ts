import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cwa-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() close = new EventEmitter();
}
