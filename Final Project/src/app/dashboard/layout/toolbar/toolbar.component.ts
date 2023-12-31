import { Component, Input, Pipe } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/Services/auth.service';
import { User } from '../../pages/users/models/Users';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selector';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input()
  public drawer?: MatDrawer;

  public authUser$: Observable<User | null>;

  constructor(private AuthService: AuthService, private store: Store){
    //this.authUser$ = this.AuthService.authUsers$
    this.authUser$ = this.store.select(selectAuthUser);
  }
}
