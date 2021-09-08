
export interface ROLE{
    cliente?: string;
    tecnico?: string;

}

export interface UserInterface {
    id?: number;
    name?: string;
    email?: string;
    role: ROLE; 
}


