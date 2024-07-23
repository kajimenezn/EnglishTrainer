export interface DatosUsuario{
    nombreCompleto:string;
    nombreUsuario:string;
    email:string;
    fechaNacimiento:Date;
    telefono:string;
    direccion:string;

}

export interface RequestLogin{
    usuario:string;
    contrasenia:string;
}

export interface Usuario{
    usuario:string;
    contrasenia:string;
    datosUsuario:DatosUsuario;
}