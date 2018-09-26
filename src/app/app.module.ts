import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {AuthenticationService} from "./services/authentication.service";
import { RegisterService} from "./services/register.service";
import {UserService} from "./services/user.service";
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { CookieService } from 'ngx-cookie-service';
import { SecurityService } from './services/security.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChangePassComponent } from './users/change-pass/change-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterComponent,
    UserListComponent,
    EditUserComponent,
    ChangePassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
   ],
  providers: [AuthenticationService, UserService, CookieService, RegisterService, SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
