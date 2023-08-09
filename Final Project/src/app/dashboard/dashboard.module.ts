import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../Shared/shared.module';
import {MatListModule} from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    NavMenuComponent,
    ToolbarComponent
  ],
  imports: [
    RouterOutlet,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    UsersModule,
    DashboardRoutingModule
  ],
  exports:  [
    DashboardComponent
  ]
})
export class DashboardModule { 
  
}
