import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cwa-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor() { }

  //TRIGGER CLOSE MODAL IN PARENT COMPONENT TO CONTROL PARENT COMPONENT STATE
  @Output() close = new EventEmitter();
  
}
