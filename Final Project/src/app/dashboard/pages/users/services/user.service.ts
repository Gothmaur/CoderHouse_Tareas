import { Injectable } from '@angular/core';
import { User } from '../models/Users';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarios: User[] = [
  {
    id: 1,
    nombre:'Mauricio',
    apellido1:'Trejo',
    apellido2:'Miranda',
    email: 'mtrejom1501@alumno.ipn.mx',
    clave: '123123'
  }
];

  private usuarios$ = new BehaviorSubject<User[]>([]);

  constructor() { }

  loadUsers(): void{
    this.usuarios$.next(this.usuarios);
  }

  getUsers(): Observable<User[]>{
    return this.usuarios$.asObservable();
  }
 
  
  createUser(usuario:User): void{
    this.usuarios = [
      ...this.usuarios, usuario
    ]
  }

}