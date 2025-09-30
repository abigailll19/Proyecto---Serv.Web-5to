export class Resena {
  id: number = 0;
  autor: string = "";
  destino: string = "";
  mensaje: string = "";
  fecha: Date = new Date();
  fotos: string[] = [];

  publicar(): void {
    throw new Error("Método no implementado.");
  }
}
