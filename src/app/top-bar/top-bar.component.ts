import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cwa-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router) { }

  //LINK ICON TO NAVIGATE TO HOME PAGE
  refresh() {
    this.router.navigate(['/']);
  }
}
