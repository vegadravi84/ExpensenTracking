import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddExpensiveComponent } from './add-expensive/add-expensive.component';
import { BudgetComponent } from './budget/budget.component';
import { CategoriesComponent } from './categories/categories.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { SocketIoComponent } from './socket-io/socket-io.component';
import { GoogleLoginFormComponent } from './google-login-form/google-login-form.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent 
  },
  {
    path:'home',
    component: HomeComponent 
  },
  {
    path:'addExpensive',
    component: AddExpensiveComponent
  },
  {
    path:'budget',
    component: BudgetComponent
  },
  {
    path:'categories',
    component: CategoriesComponent
  },
  {
    path:'googleform',
    component:GoogleLoginFormComponent
  }
  // {
  //   path:'template-driven',
  //   component:TemplateDrivenComponent
  // },
  // {
  //   path:'socketio',
  //   component:SocketIoComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
