import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'cwa-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{

  displayModal: boolean;
  userExists: boolean;
  showJoin: boolean;
  company: string;
  alias: string;
  firstName: string;
  lastName: string;
  displayName: string;
  password: string;
  email: string;

  constructor(private userService: UserService, private router: Router) { }

ngOnInit() {
  this.displayModal = false;
  this.userExists = false;
  this.showJoin = false;
  this.company = '';
  this.alias = '';
  this.firstName = '';
  this.lastName = '';
  this.displayName = '';
  this.password = '';
  this.email = '';
}
  onClick(email) {
    this.email = email;
    this.userService.checkEmail(email)
      .subscribe((data: any) => {
        if(data.userExists == true){
          this.userExists = true;
          return;
        }
        if(data.companyExists == true) {
          this.company = data.company.parent;
          this.alias = data.company.alias;
          this.displayModal = true;
          return;
        }
        this.router.navigate([`/new/${this.email}`]);
      });;
  }

  closeModal() {
    this.displayModal = false;
    this.showJoin = true;
    console.log(this.alias, this.company);
  }

  createUser() {
    let newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      displayName: this.displayName,
      email: this.email,
      password: this.password,
      company: this.company
    }
    this.userService.createUser(newUser)
      .subscribe((data) => {
        alert(`New User Created - ${JSON.stringify(data)}`);
        this.showJoin = false;
        this.company = '';
        this.alias = '';
        this.firstName = '';
        this.lastName = '';
        this.displayName = '';
        this.password = '';
        this.email = '';
      })
  }
}
