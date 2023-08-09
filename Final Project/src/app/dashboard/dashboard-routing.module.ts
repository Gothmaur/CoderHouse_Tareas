import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { UsersComponent } from "./pages/users/users.component";
import { UserDetailComponent } from "./pages/users/pages/user-detail/user-detail.component";
import { ProductosComponent } from "./pages/productos/productos.component";

@NgModule({
    imports:[
        RouterModule.forChild([
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
        ]),
    ],
    exports : [ RouterModule ]
})
export class DashboardRoutingModule{}
