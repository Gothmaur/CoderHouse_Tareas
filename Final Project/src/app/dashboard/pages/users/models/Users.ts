export interface User{
    id: number;
    nombre:string;
    apellido1:string;
    apellido2:string;
    email:string;
    clave:string;
}

export interface UserCreation{
    nombre:string;
    apellido1:string;
    apellido2:string;
    email:string;
    clave:string;
}

export interface UserUpdating{
    nombre?:string;
    apellido1?:string;
    apellido2?:string;
    email?:string;
    clave?:string;
}