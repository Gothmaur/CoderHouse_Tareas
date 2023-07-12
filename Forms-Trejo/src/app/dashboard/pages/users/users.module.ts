import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { UsersTableComponent } from './components/users-table/users-table.component'

 



@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTableModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { 
  
}
