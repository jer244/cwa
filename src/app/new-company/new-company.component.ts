import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cwa-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent {

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.email = route.snapshot.params['email'];
  }

  getPersonalInfo: boolean = true;
  companyExists: boolean = false;
  company: string = '';
  alias: string = '';
  firstName: string = '';
  lastName: string = '';
  displayName: string = '';
  password: string = '';
  email: string = '';

  createUser() {

    let newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      displayName: this.displayName,
      email: this.email,
      password: this.password,
      company: this.company
    }

    this.userService.checkCompany(newUser.company)
      .subscribe((data: any) => {
        if (data.companyExists) {
          this.companyExists = true;
          return;
        } else {
          this.userService.createUser(newUser)
            .subscribe((data) => {
              alert(`New User Created - ${JSON.stringify(data)}`);
              this.getPersonalInfo = false;
              this.company = '';
              this.alias = '';
              this.firstName = '';
              this.lastName = '';
              this.displayName = '';
              this.password = '';
              this.email = '';
            });
        }
      })
  }
}
