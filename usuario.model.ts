export class Usuario {
  id: number = 0;
  nombre: string = "";
  correo: string = "";
  contraseña: string = "";
  tipo: string = "";
  idiomaPreferido: string = "";

  iniciarSesion(): void {
    throw new Error("Método no implementado.");
  }
  cerrarSesion(): void {
    throw new Error("Método no implementado.");
  }
  cambiarIdioma(): void {
    throw new Error("Método no implementado.");
  }
}

export class Administrador extends Usuario {
  gestionarUsuarios(): void {
    throw new Error("Método no implementado.");
  }
  eliminarContenido(): void {
    throw new Error("Método no implementado.");
  }
}
