import { Usuario } from "./usuario.model";

export class Restaurante extends Usuario {
  nombreRestaurante: string = "";
  ubicacion: string = "";
  tipoComida: string = "";

  publicarMenu(): void {
    throw new Error("Método no implementado.");
  }
  recibirResenas(): void {
    throw new Error("Método no implementado.");
  }
}
