import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { WatchComponent } from './components/watch/watch.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"signin", component:SigninComponent},
  {path:"signup", component:SignupComponent},
  {path:"watch", component:WatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
