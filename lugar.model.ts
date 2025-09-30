export class Lugar {
  id: number = 0;
  nombre: string = "";
  descripcion: string = "";
  ubicacion: string = "";
  tipo: string = "";
  precio: number = 0;
  horario: string = "";
  accesibilidad: string = "";

  mostrarInformacion(): void {
    throw new Error("Método no implementado.");
  }
}
