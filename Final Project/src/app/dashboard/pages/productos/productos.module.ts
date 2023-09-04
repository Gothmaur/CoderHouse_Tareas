import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './productos-routing.module';



@NgModule({
  declarations: [
    ProductosComponent,
    ProductDialogComponent,
    ProductTableComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductosModule { }
