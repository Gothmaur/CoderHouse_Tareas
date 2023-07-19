import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { SharedModule } from 'src/app/Shared/shared.module';

 



@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UserDialogComponent
  ],
  imports: [
    SharedModule,
    MatGridListModule,
    MatTableModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { 
  
}
