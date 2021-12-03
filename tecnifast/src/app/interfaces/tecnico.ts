
export interface Estado{
    registrado: string;
    sinRegistrar: string;

}
export interface Estudios{
    ingeniero: string;
    tecnologo: string;
    egresado: string;

}
export interface TecnicoInterface {
    id?: number;
    name?: string;
    email?: string;
    telefono?: string;
    descripcion: string;
    direccion: string;
    estudios: Estudios;
    estado?: Estado; 
}

