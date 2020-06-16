import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AuthGuard } from './services/auth.guard';
import { BookingsComponent } from './bookings/bookings.component';
import { HotelSingleComponent } from './hotel-single/hotel-single.component';
import {ViewBookingsComponent} from './view-bookings/view-bookings.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing' , pathMatch: 'full'},
  { path: 'landing', component: LandingComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'hotel-list', component: HotelListComponent},
  { path: 'bookings', component: BookingsComponent, canActivate : [AuthGuard]},
  { path: 'view-bookings', component: ViewBookingsComponent, canActivate : [AuthGuard]},
  { path: 'hotel-single/:{{hotel.hotelId}}', component: HotelSingleComponent},
  { path: 'account', component: AccountComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
