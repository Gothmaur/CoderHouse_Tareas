import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      //dashboard/productos
      path:'productos', 
      component: ProductosComponent
    }/*,
    {
      //dashboard/productos/:id
      path:'product:id',
      //component: ProductsDetailComponent
    },*/
  ]
    
  )],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
