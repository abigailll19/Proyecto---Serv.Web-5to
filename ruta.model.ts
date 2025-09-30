export class Ruta {
  id: number = 0;
  origen: string = "";
  destino: string = "";
  modoTransporte: string = "";
  tiempoEstimado: string = "";

  calcularDistancia(): void {
    throw new Error("Método no implementado.");
  }
}
