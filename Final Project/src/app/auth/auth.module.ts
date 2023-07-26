import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponentComponent } from './pages/registro/register-component/register-component.component';
import { LoginComponentComponent } from './pages/LogIn/login-component/login-component.component';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    RegisterComponentComponent,
    LoginComponentComponent,
    AuthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
