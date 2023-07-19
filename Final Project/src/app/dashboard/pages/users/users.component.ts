import { Component, Pipe } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { User } from './models/Users';

const ELEMENT_DATA: User[] = [
  {
    id: 1,
    nombre:'Mauricio',
    apellido1:'Trejo',
    apellido2:'Miranda',
    email: 'mtrejom1501@alumno.ipn.mx',
    clave: '123123'
  }
]

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  public users: User[] = ELEMENT_DATA;
  
  constructor(private matDialog: MatDialog){}



  onCreateUser():void{
    //Abre form
    const dialogRef=this.matDialog.open(UserDialogComponent)
    //Cuando cierre, haré esto
    .afterClosed().subscribe({
      next: (v) => {
        //Log para ver que retorna el form
        //console.log(v);
        if(v) {
          //console.log('recibí el valor ',v);
          this.users = [
            ...this.users,
            {
              id: this.users.length+1,
              nombre: v.Nombre,
              apellido1: v.PrimerApellido,
              apellido2: v.SegundoApellido,
              email: v.Email,
              clave: v.Clave
            }
          ];
          //console.log('Aprobado');
        }
        else{ 
          //console.log('cancelado');
        }
      },
    });
  }

  onDeleteUser(userToDelete:User):void{
    if(confirm("¿Está seguro de eliminar este usuario? {{userToDelete.nombre}}")){
      this.users = this.users.filter((u) => u.id != userToDelete.id);
    }
  }

  onEditUser(userToEdit:User):void{
    this.matDialog.open(UserDialogComponent,{
      data: userToEdit
    })
    .afterClosed().subscribe({
      next: (data) =>{
        this.users = this.users.map((user)=>{
          if(user.id==userToEdit.id){
            console.log("Intento cambiar el usuario");
            console.log({...user});
            console.log({...data});
            console.log({...user,...data});
            return {...user,...data}
          }else{
            return user;
          }
          });
        }
      });
    }
}
