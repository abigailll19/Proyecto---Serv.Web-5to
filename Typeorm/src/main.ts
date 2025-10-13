import "reflect-metadata";
import { AppDataSource } from "./data-source";

// Servicios
import { LugaresTuristicosService } from "./services/lugares_turisticos_servicio";
import { GuiaCulturalService } from "./services/guia_cultural_servicio";
import { MedioTransporteService } from "./services/medio_transporte_servicio";
import { ServicioService } from "./services/servicio_servicio";
import { ResenaService } from "./services/resena_servicio";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("✅ Base de datos conectada");

    // ───── LUGARES TURISTICOS (MEMORIA) ─────
    const lugaresService = new LugaresTuristicosService();

    const lugarCreado = await lugaresService.crear({
      nombre_lugar: "Cataratas del Iguazú",
      ubicacion: "Misiones, Argentina",
      descripcion:
        "Una de las maravillas naturales del mundo, con cientos de cascadas impresionantes.",
      mostrarInformacion: function (): void {
        console.log(`📍 ${this.nombre_lugar} - ${this.descripcion}`);
      },
      verUbicacion: function (): void {
        console.log(`🗺️ Ubicación: ${this.ubicacion}`);
      },
    });
    console.log("📌 Lugar creado:", lugarCreado);

    const todosLugares = await lugaresService.listar();
    console.log("📍 Lista de lugares turísticos:", todosLugares);

    const lugarEncontrado = await lugaresService.mostrar(lugarCreado.id);
    console.log("🔍 Lugar encontrado por ID:", lugarEncontrado);

    const lugarActualizado = await lugaresService.actualizar(lugarCreado.id, {
      descripcion:
        "Una maravilla natural con cascadas impresionantes y fauna diversa.",
    });
    console.log("✏️ Lugar actualizado:", lugarActualizado);

    await lugaresService.eliminar(lugarCreado.id);
    console.log(`🗑️ Lugar con id ${lugarCreado.id} eliminado`);

    const lugaresDespuesEliminar = await lugaresService.listar();
    console.log("📭 Lista después de eliminar:", lugaresDespuesEliminar);

    // ───── GUIA CULTURAL (BD) ─────
    const guiaService = new GuiaCulturalService();
    const guia = await guiaService.create({
      titulo: "Saludos básicos",
      descripcion: "Guía con frases para saludar",
      categoria: "frases_basicas",
      contenido: "Hola, buenos días, buenas tardes, buenas noches.",
    });
    console.log("📘 Guía cultural creada:", guia);

    // ───── MEDIO DE TRANSPORTE (BD) ─────
    const transporteService = new MedioTransporteService();
    const transporte = await transporteService.create({
      nombreEmpresa: "Transportes Andinos",
      tipo_transporte: "bus",
      nombreCooperativa: "Cooperativa Andes",
      ruta: "Centro - Norte",
      tarifa: 1.25,
      distancia_km: 15,
      tiempo_estimado_min: 30,
    });
    console.log("🚐 Medio de transporte creado:", transporte);

    // ───── SERVICIO (BD) ─────
    const servicioService = new ServicioService();
    const servicio = await servicioService.create({
      descripcion: "Recorrido guiado por la ciudad histórica",
      tipo_servicio: "tour",
      horario: "08:00 - 12:00",
      precio: 25.0,
      medioTransporte: transporte, 
    });
    console.log("🛎️ Servicio creado:", servicio);

    // ───── RESEÑA (BD) ─────
    const resenaService = new ResenaService();
    const resena = await resenaService.create({
      autor: "Pedro Gómez",
      destino: "Ciudad histórica",
      mensaje: "Muy buena experiencia con el guía, muy completo.",
      calificacion: 5,
      servicio: servicio,
    });
    console.log("⭐ Reseña creada:", resena);

    // ───── Cerrar conexión ─────
    await AppDataSource.destroy();
    console.log("🔒 Conexión cerrada correctamente");
  } catch (error) {
    console.error("❌ Error en la ejecución:", error);
  }
}

main();
