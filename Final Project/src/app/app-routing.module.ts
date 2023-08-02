import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { UserDetailComponent } from './dashboard/pages/users/pages/user-detail/user-detail.component';
import { ProductosComponent } from './dashboard/pages/productos/productos.component';
import { RegisterComponentComponent } from './auth/pages/registro/register-component/register-component.component';
import { LoginComponentComponent } from './auth/pages/LogIn/login-component/login-component.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      { //dashboard/home
        path:'home', component: HomeComponent
      },
      {
        //dashboard/users
        path:'users', component: UsersComponent
      },
      {
        //dashboard/users/:id
        path:'users/:id',
        component: UserDetailComponent
      },
      {
        //dashboard/productoss
        path:'products',
        component: ProductosComponent
      },
      {
        path: '**',
        redirectTo: '/home'
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children:[
      {
        //auth/login/
        path:'login',
        component: LoginComponentComponent
      },
      {
        //auth/registrarse/
        path:'register',
        component: RegisterComponentComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
