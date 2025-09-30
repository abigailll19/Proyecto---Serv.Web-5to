import { Usuario } from "./usuario.model";
import { Resena } from "./resena.model";
import { Lugar } from "./lugar.model";
import { Restaurante } from "./restaurante.model";
import { Transporte } from "./transporte.model";

export class Turista extends Usuario {
  preferencias: string[] = [];

  verLugares(): Lugar[] {
    return [];
  }
  verRestaurantes(): Restaurante[] {
    return [];
  }
  verTransportes(): Transporte[] {
    return [];
  }
  verRecomendaciones(): any[] {
    return [];
  }
  aplicarFiltros(): void {
    throw new Error("Método no implementado.");
  }
  escribirResena(resena: Resena): void {
    throw new Error("Método no implementado.");
  }
}
