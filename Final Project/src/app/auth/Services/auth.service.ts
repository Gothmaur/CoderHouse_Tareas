import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { LoginPayload, User } from 'src/app/dashboard/pages/users/models/Users';
import { NotifyService } from 'src/app/core/services/notify.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUsers$ = new BehaviorSubject<User|null>(null);
  public authUsers$ = this._authUsers$.asObservable();

  constructor(private notify:NotifyService, private router:Router, private httpClient:HttpClient) { }

  isAuthenticated(): Observable<boolean>{
    return this.authUsers$.pipe(take(1),map( (user)=> !!user ));
  }

  login(payload:LoginPayload):void{
    this.httpClient.get<user>('http://localhost/3000/users',{
      params:{
        email:payload.email || '',
        clave:payload.clave || ''
      }
    }).subscribe({
      next: (response) => {
        if(response.length){
          this._authUsers$.next(response[0]);
          this.router.navigate(['/dashboard']);
        }else{
          this.notify.showError('Usuario y/o contraseña incorrecta');
          this._authUsers$.next(null);
        }
      }
    })
  }
}
