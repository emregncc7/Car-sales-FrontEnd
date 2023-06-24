import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { LoginGuard } from './guards/login.guard';
import { ViewdetailComponent } from './components/viewdetail/viewdetail.component';
import { RulesComponent } from './components/rules/rules.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/colors/:colorId",component:CarComponent},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"cars/cardetails/:carId",component:CardetailComponent},
  { path: 'rules', component: RulesComponent },
  { path: 'loginpage', component: LoginPageComponent }


] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
