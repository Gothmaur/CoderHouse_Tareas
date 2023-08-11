import { Injectable } from '@angular/core';
import { User, UserCreation, UserUpdating } from '../models/Users';
import { BehaviorSubject, Observable, Subject, delay, filter, map, mergeMap, of, take } from 'rxjs';
import { NotifyService } from 'src/app/core/services/notify.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarios$ = new BehaviorSubject<User[]>([]);
  
  constructor(private notify: NotifyService,private httpClient:HttpClient) { }
  
  
  //cargar usuarios
  loadUsers(): void{
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
  }

  //Obtener usuarios
  getUsers(): Observable<User[]>{
    return this.usuarios$.asObservable();
  }
 
  //Obtener usuarios por ID
  getUsersById(id: Number):Observable < User | undefined >{
    return this.usuarios$.pipe(
      map( ( users ) => users.find( ( u ) => u.id === id) ),
      take(1)
    );
  }

  //Crear usuario en la vista
  createUser(usuario:UserCreation): void{
    this.httpClient.post<User>('http://localhost:3000/users',usuario).pipe( //
      mergeMap((usuarioNuevo) => this.usuarios$.pipe(
        take(1),
        map((arrayActual)=>[...arrayActual, usuarioNuevo])
      ))
    ).subscribe({
      next: (arrayActualizado) => {
        this.usuarios$.next(arrayActualizado);
      },
      error: () => this.notify.showError("Error al conectar con el servidor")
    })
  }
  
  //Actualizar usuario
  updateUserById(id: number, usuario:UserUpdating): void{
    this.httpClient.put('http://localhost:3000/users/'+id, usuario).subscribe({
      next: () => this.loadUsers(),
      error: () => this.notify.showError("Error al conectar con el servidor")

    })
  }

  //Eliminar Usuario
  deleteUserById(id: number): void{
    this.httpClient.delete<User>('http://localhost:3000/users/'+id) //Eliminar usuario de la lista
    .pipe( mergeMap( (/* NecesitoVariable? */) => this.usuarios$.pipe(
      take(1),
      map( (arrayActual) => arrayActual.filter( (u) => u.id !== id) )//Filtrar lista sin el usuario eliminado
      ))).subscribe({
        next: (arrayActualizado) => this.usuarios$.next(arrayActualizado), // Mostrar lista nueva
      })
      this.notify.showSuccess("Usuario eliminado");
  }
}