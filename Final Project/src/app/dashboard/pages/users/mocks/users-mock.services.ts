import { User } from "../models/Users";

export class UserMockService{
    private usuarios: User[] = [
        {
          id: 1,
          nombre:'Falso',
          apellido1:'Falso',
          apellido2:'Falso',
          email: 'Falso@Falso',
          clave: 'Falso'
        }
      ];
      
        getUsers(): User[]{
          return this.usuarios;
        }
        
}
