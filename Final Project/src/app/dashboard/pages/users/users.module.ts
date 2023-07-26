import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { UserService } from './services/user.service';
import { UserMockService } from './mocks/users-mock.services';
import { CommonModule } from '@angular/common';

 



@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UserDialogComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatGridListModule,
    MatTableModule
  ],
  exports:[
    UsersComponent
  ],
  providers:[
    {
      provide:'Is_Dev',
      useValue: false
    },
    {
      provide: UserService,
      useFactory: () => {
        const Is_Dev = false;
        return Is_Dev ? new UserMockService() : new UserService;
      },
    },
  ]

})
export class UsersModule { 
  
}
