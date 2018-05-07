import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { LoginComponent } from './login/login.component';
import { PwresetComponent } from './pwreset/pwreset.component';
import { TcComponent } from './tc/tc.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'new/:email', component: NewCompanyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pwreset', component: PwresetComponent },
  { path: 'tc', component: TcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
