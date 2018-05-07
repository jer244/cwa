import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

/*
*   USE SERVICE TO MAKE HTTP CALLS TO API
*/

  checkEmail(email: String) {
    return this.http.get(`/api/checkuser/${email}`);
  }

  checkCompany(company: String) {
    return this.http.get(`/api/checkcompany/${company}`);
  }

  createUser(user: any) {
    return this.http.post('/api/newUser', user);
  }

  addDomain(domain: String, parent: String) {
    let alias = {
      domain: domain, 
      parent: parent
    }
      return this.http.post('/api/addDomain', alias);
  }
}
