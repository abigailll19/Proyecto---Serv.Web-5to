export class Transporte {
  id: number = 0;
  tipo: string = "";
  empresa: string = "";
  tarifa: number = 0;

  calcularRuta(): void {
    throw new Error("Método no implementado.");
  }
}
