import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AuthGuard } from './services/auth.guard';
import { BookingsComponent } from './bookings/bookings.component';
import { HotelSingleComponent } from './hotel-single/hotel-single.component';
import { AccountComponent } from './account/account.component';
import { ViewBookingsComponent} from './view-bookings/view-bookings.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { EditHotelComponent } from './edit-hotel/edit-hotel.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'hotel-list', component: HotelListComponent},
  { path: 'hotel/:id', component: HotelSingleComponent},
  { path: 'hotel/:id/book', component: BookingsComponent, canActivate : [AuthGuard]},
  { path: 'account', component: AccountComponent, canActivate : [AuthGuard]},
  { path: 'add-hotel', component: AddHotelComponent, canActivate : [AuthGuard]},
  { path: 'edit-hotel', component: EditHotelComponent, canActivate : [AuthGuard]},
  { path: 'view-bookings', component: ViewBookingsComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
