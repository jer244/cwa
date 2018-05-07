import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StartComponent } from './start/start.component';
import { ModalComponent } from './start/modal/modal.component';
import { UserExistsErrorComponent } from './start/user-exists-error/user-exists-error.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { CompanyExistsErrorComponent } from './new-company/company-exists-error/company-exists-error.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { PwresetComponent } from './pwreset/pwreset.component';
import { TcComponent } from './tc/tc.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    StartComponent,
    ModalComponent,
    UserExistsErrorComponent,
    NewCompanyComponent,
    CompanyExistsErrorComponent,
    LoginComponent,
    PwresetComponent,
    TcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
