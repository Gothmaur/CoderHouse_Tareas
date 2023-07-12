import { Component, Pipe } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './models/Users';

const ELEMENT_DATA: User[] = [
  {
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

  //Validaciones requeridas para cada uno de los campos 
  NombreControl = new FormControl(null,[
    Validators.required, //Requerido
    Validators.minLength(2) //Tamaño minimo de 2 caracteres
  ]);
  PrimerApellidoControl = new FormControl(null,[
    Validators.required, //Requerido
    Validators.minLength(2) //Tamaño minimo de 2 caracteres
  ]);
  SegundoApellidoControl = new FormControl(null,[
    Validators.minLength(2) //Tamaño minimo de 2 caracteres
  ]);
  EmailControl = new FormControl(null,[
    Validators.required, //Requerido
    Validators.email //Debe cumplir con las características de un e-mail
  ]);
  ClaveControl = new FormControl(null,[
    Validators.required, //Requerido
  ]);

  usersForm = new FormGroup({
    Nombre: this.NombreControl,
    PrimerApellido: this.PrimerApellidoControl,
    SegundoApellido: this.SegundoApellidoControl,
    Email: this.EmailControl,
    Clave: this.ClaveControl
  });

  onSubmint():void{
    if(this.usersForm.invalid){
      alert("Por favor llene todos los campos correctamente");
    }else{
      alert(JSON.stringify(this.usersForm.value));
    }
  }
}
