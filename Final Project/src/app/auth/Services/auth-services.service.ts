import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models/Users';
import { NotifyService } from 'src/app/core/services/notify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  private _authUsers$ = new BehaviorSubject<User|null>(null);
  public authUsers$ = this._authUsers$.asObservable();

  constructor(private notify:NotifyService, private router:Router) { }

  isAuthenticated(): Observable<boolean>{
    return this.authUsers$.pipe(take(1),map( (user)=> !!user ));
  }
}
