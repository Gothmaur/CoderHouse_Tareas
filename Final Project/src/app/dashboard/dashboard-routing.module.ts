import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProductosComponent } from "./pages/productos/productos.component";
import { UsersComponent } from "./pages/users/users.component";

@NgModule({
    imports:[
        RouterModule.forChild([
            { //dashboard/home
                path:'home', component: HomeComponent
              },
              {
                //dashboard/users
                path:'users', 
                component: UsersComponent,
                loadChildren: () => import('./pages/users/users.module').then( (m) => m.UsersModule),
              },
              {
                //dashboard/productoss
                path:'products',
                component: ProductosComponent
              }/*,
              {
                path: '**',
                redirectTo: 'home'
              }*/
        ]),
    ],
    exports : [ RouterModule ]
})
export class DashboardRoutingModule{}
