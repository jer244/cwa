import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cwa-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent {

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.email = route.snapshot.params['email'];
  }

  domains: String[] = [];

  getPersonalInfo: boolean = true;
  companyExists: boolean = false;
  company: string = '';
  alias: string = '';
  firstName: string = '';
  lastName: string = '';
  displayName: string = '';
  password: string = '';
  email: string = '';
  domainValue: string = '';
  companyMode: String = '';

  createUser() {
    let newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      displayName: this.displayName,
      email: this.email,
      password: this.password,
      company: this.company
    };
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
            });
        }
      })
  }

  removeTag(index: number) {
    this.domains.splice(index, 1);
  }

  addTag() {
    this.domains.push(this.domainValue);
    this.domainValue = '';
  }
  
  //WHEN COMPANYMODE IS OPEN (AS OPPOSED TO INVITE ONLY), ADD DOMAINS FROM ALL TAGS
  onSave() {
    let counter = 0;
    //MAKE SURE MODE IS SELECTED
    if (this.companyMode == '') {
      alert('please select a mode');
      return;
    } 
    //IF INVITE ONLY MODE, NO NEED TO SAVE DOMAINS, RESET VARIABLES AND NAVIGATE TO HOME PAGE
    else if (this.companyMode == 'invite') {
      alert('Company saved');
      this.reset();
    } 
    //IF OPEN MODE, LOOP THROUGH AND SAVE ALL TAGS
    //ONCE DONE, RESET VARIABLES AND NAVIGATE TO HOME PAGE
    else {
      this.domains.forEach((domain) => {
        this.userService.addDomain(domain, this.company)
          .subscribe(() => {
            counter++;
            console.log(counter);
            if(counter == this.domains.length){
              alert('Domains Saved');
              this.reset();
            }
          })
      })
    }
  }

  //RESET VARIABLES AND NAVIGATE TO HOME PAGE
  reset() {
    this.company = '';
    this.alias = '';
    this.firstName = '';
    this.lastName = '';
    this.displayName = '';
    this.password = '';
    this.email = '';
    this.router.navigate(['/']);
  }
}
