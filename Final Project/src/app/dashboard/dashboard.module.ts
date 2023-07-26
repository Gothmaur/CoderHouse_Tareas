import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../Shared/shared.module';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    UsersModule
  ],
  exports:  [
    DashboardComponent
  ]
})
export class DashboardModule { 
  
}
