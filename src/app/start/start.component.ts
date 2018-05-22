import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cwa-start',
  templateUrl: './start.component.html'
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

  //RESET VARIABLES ON PAGE LOAD
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

  //WHEN NEXT BUTTON PUSHED, CHECK IF EMAIL OR DOMAIN ARE IN USE
  onClick(email) {
    this.email = email;
    //CHECK IF EMAIL IS ALREADY IN USE
    this.userService.checkEmail(email)
      .subscribe((data: any) => {
        if(data.userExists == true){
          //EMAIL IN USE - THROW ERROR STATE
          this.userExists = true;
          return;
        }
        if(data.companyExists == true) {
          //COMPANY ALREADY EXISTS - DIRECT TO ADD USER TO EXISTING COMPANY
          this.company = data.company.parent;
          this.alias = data.company.alias;
          this.displayModal = true;
          return;
        }
        //IF EMAIL AND DOMAIN ARE NEW
        this.router.navigate([`/new/${this.email}`]);
      });;
  }

  //REMOVE MODAL FROM SCREEN AND SHOW FORM FOR NEW USER TO EXISTING COMPANY
  closeModal() {
    this.displayModal = false;
    this.showJoin = true;
    console.log(this.alias, this.company);
  }

  createUser() {
    //CONSTRUCT USER
    let newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      displayName: this.displayName,
      email: this.email,
      password: this.password,
      company: this.company
    }
    //SAVE USER AND RESET FORM
    this.userService.createUser(newUser)
      .subscribe((data) => {
        alert(`New User Created - ${JSON.stringify(data)}`);
        //RESET
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
