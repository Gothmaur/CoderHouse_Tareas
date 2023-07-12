import { Component } from '@angular/core';
import { User } from '../../models/Users';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  displayedColumns: string[] = ['nombre', 'apellido1', 'apellido2', 'email'];
  //@Input();
  dataSource: User[] = [];
}
