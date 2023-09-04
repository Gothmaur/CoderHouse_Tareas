export interface Products{
    id: number;
    nombre: string;
    especialidad: string;
    tipo: string;
    precio: number;
    profesor: string;
}

export interface ProductCreation{
    nombre: string;
    especialidad: string;
    tipo: string;
    precio: number;
    profesor: string;
}

export interface ProductUpdating{
    nombre?: string;
    especialidad?: string;
    tipo?: string;
    precio?: number;
    profesor?: string;
}
