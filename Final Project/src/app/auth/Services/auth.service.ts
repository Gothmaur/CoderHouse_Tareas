import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { NotifyService } from 'src/app/core/services/notify.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginPayload } from '../Models';
import { User } from 'src/app/dashboard/pages/users/models/Users';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUsers$ = new BehaviorSubject<User | null>(null);
  public authUsers$ = this._authUsers$.asObservable();

  constructor(private notify:NotifyService, private router:Router, private httpClient:HttpClient) { }

  isAuthenticated(): Observable<boolean>{
    //return this.authUsers$.pipe(take(1),map( (user)=> !!user ));
    return this.httpClient.get<User[]>(environment.baseApiURL + '/users',{
      params:{
        token: localStorage.getItem('token') || '',
      }
    }).pipe(
      map((usersResult) =>{
        return !!usersResult.length;
      })
    )
  }

  login(payload:LoginPayload):void{
    
    this.httpClient.get<User[]>(environment.baseApiURL + '/users',{
      params:{
        email: payload.email || '',
        clave: payload.password || ''
      }
    }).subscribe({//Se consultan los datos de la DB usando http
      next:(response)=> {
        if(response.length){
          const authUser = response[0];
          this._authUsers$.next(response[0]);
          this.router.navigate(['/dashboard/home']);
          localStorage.setItem('token',authUser.token);
        }else{
          this.notify.showError('E-mail o contraseña no validos');
          this._authUsers$.next(null);
        }
      },
      error: () =>{
        //Si hay algún error, mostrar "Error al conectar".
        this.notify.showError("Error al conectar con el servidor") 
      }
    })
  
  }
}
