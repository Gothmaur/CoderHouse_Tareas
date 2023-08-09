import { Injectable } from '@angular/core';
import { User, UserCreation, UserUpdating } from '../models/Users';
import { BehaviorSubject, Observable, Subject, delay, map, of, take } from 'rxjs';
import { NotifyService } from 'src/app/core/services/notify.service';

//Cargar Database con 1 seg de delay 
const UserDB: Observable<User[]> = of ([{
    id: 1,
    nombre:'Mauricio',
    apellido1:'Trejo',
    apellido2:'Miranda',
    email: 'mtrejom1501@alumno.ipn.mx',
    clave: '123123'
  }]
).pipe(delay(1000));

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarios: User[] = [
  
];

  private usuarios$ = new BehaviorSubject<User[]>([]);
  private notify = new NotifyService;

  constructor() { }
  //cargar usuarios
  loadUsers(): void{
    UserDB.subscribe({
      next: (usuariosFromDB) => this.usuarios$.next(usuariosFromDB),
    });
    this.usuarios$.next(this.usuarios);
  }

  //Obtener usuarios
  getUsers(): Observable<User[]>{
    return this.usuarios$.asObservable();
  }
 
  //Obtener usuarios
  getUsersById(id: Number):Observable < User | undefined >{
    return this.usuarios$.pipe(
      map( ( users ) => users.find( ( u ) => u.id === id) ),
      take(1)
    );
  }

  //Crear usuario en la vista
  createUser(usuario:UserCreation): void{
    this.usuarios$.pipe(take(1)).subscribe({
      next:(arrayActual)=>{
        this.usuarios$.next([
          ...arrayActual,{id: arrayActual.length+1, ...usuario}
        ]);
        this.notify.showSuccess("Usuario Cargado");
      }
    })
  }
  
  //Actualizar usuario
  updateUserById(id: number, usuario:UserUpdating): void{
    this.usuarios$.pipe(take(1)).subscribe({
      next:(arrayActual)=>{
        this.usuarios$.next(
          arrayActual.map((u) => 
            u.id === id ? {...u, ...usuario} : u) 
        )
        this.notify.showSuccess("Usuario Actualizado");
      }
    })
  }

  //Eliminar Usuario
  deleteUserById(id: number): void{
    this.usuarios$.pipe(take(1)).subscribe({
      next:(arrayActual)=>{
        this.usuarios$.next(arrayActual.filter((u)=> u.id !==id));
        this.notify.showSuccess("Usuario Actualizado");
      }
    })
  }

}