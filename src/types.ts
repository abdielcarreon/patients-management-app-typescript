export interface Cita {
    [key: string] : string // Index Signature para definir un tipo de dato con propiedades que se pueden acceder mediante claves en el e.target
    id: string;
    paciente: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
}