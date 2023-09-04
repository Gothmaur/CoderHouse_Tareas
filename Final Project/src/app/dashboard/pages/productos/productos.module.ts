import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ProductTableComponent } from './components/product-table/product-table.component';



@NgModule({
  declarations: [
    ProductosComponent,
    ProductDialogComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
