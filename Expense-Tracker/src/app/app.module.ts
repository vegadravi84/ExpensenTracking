import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddExpensiveComponent } from './add-expensive/add-expensive.component';
import { BudgetComponent } from './budget/budget.component';
import { CategoriesComponent } from './categories/categories.component';
import { TableModule } from 'primeng/table';
import { NgChartsModule } from 'ng2-charts';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SocketIoComponent } from './socket-io/socket-io.component';
import { GoogleLoginFormComponent } from './google-login-form/google-login-form.component';

//import { angularxSocialLoginModule, GoogleLoginProvider,SocialAuthServiceConfig } from '@abacritt/angularx-social-login/providers';
const googleOAuthClientId = '627760524628-qng2vks70bn227r3vsrb7gsisa6d8nr4.apps.googleusercontent.com'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddExpensiveComponent,
    BudgetComponent,
    CategoriesComponent,
    TemplateDrivenComponent,
    SocketIoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    NgChartsModule,
    ListboxModule,
    MultiSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(googleOAuthClientId),
        },
      ],
    } as SocialAuthServiceConfig,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
