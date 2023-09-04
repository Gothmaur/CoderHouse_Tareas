import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { NotifyService } from 'src/app/core/services/notify.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginPayload } from '../Models';
import { User } from 'src/app/dashboard/pages/users/models/Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUsers$ = new BehaviorSubject<User | null>(null);
  public authUsers$ = this._authUsers$.asObservable();

  constructor(private notify:NotifyService, private router:Router, private httpClient:HttpClient) { }

  isAuthenticated(): Observable<boolean>{
    return this.authUsers$.pipe(take(1),map( (user)=> !!user ));
  }

  login(payload:LoginPayload):void{
    
    this.httpClient.get<User[]>('http://localhost:3000/users',{
      params:{
        email: payload.email || '',
        clave: payload.password || ''
      }
    }).subscribe({//Se consultan los datos de la DB usando http
      next:(response)=> {
        if(response.length){
          this._authUsers$.next(response[0]);
          this.router.navigate(['/dashboard/home']);
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
  /* 
    this.httpClient.get<User[]>('http://localhost:3000/users').subscribe({//Se consultan los datos de la DB usando http
      next:(response)=> {
        console.log(response);
        this.usuarios$.next(response);
      },
      error: () =>{
        //Si hay algún error, mostrar "Error al conectar".
        this.notify.showError("Error al conectar con el servidor") 
      }
    })
  */
  
  }
}
