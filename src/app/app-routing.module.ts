import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing' , pathMatch: 'full'},
  { path: 'landing', component: LandingComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'hotel-list', component: HotelListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }