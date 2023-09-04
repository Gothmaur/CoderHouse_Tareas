import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ProductosComponent } from './productos.component';



@NgModule({
  declarations: [
    ProductosComponent,
    ProductDialogComponent,
    ProductTableComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule
  ]
})
export class ProductosModule { }
