const lugares = [
  {
    nombre: "Hotel Poseidón",
    tipo: "Hotel",
    descripcion: "Hotel frente al mar con piscina y restaurante.",
  },
  {
    nombre: "Hotel Oro Verde",
    tipo: "Hotel",
    descripcion: "Hotel 5 estrellas con vista a la playa y spa.",
  },
  {
    nombre: "Restaurante La Casa Rosada",
    tipo: "Restaurante",
    descripcion: "Gastronomía típica de la costa ecuatoriana.",
  },
  {
    nombre: "Museo Cancebí",
    tipo: "Museo",
    descripcion: "Historia y cultura de Manta y Manabí.",
  }
];

const inputBusqueda = document.getElementById("busqueda");
const divResultados = document.getElementById("resultados");

inputBusqueda.addEventListener("input", () => {
  const texto = inputBusqueda.value.toLowerCase();
  divResultados.innerHTML = "";

  if (texto.length > 1) {
    const resultadosFiltrados = lugares.filter(lugar =>
      lugar.nombre.toLowerCase().includes(texto) ||
      lugar.tipo.toLowerCase().includes(texto)
    );

    if (resultadosFiltrados.length > 0) {
      resultadosFiltrados.forEach(lugar => {
        const div = document.createElement("div");
        div.className = "resultado";
        div.innerHTML = `<strong>${lugar.nombre}</strong><br>${lugar.descripcion}`;
        divResultados.appendChild(div);
      });
    } else {
      divResultados.innerHTML = "<p>No se encontraron resultados.</p>";
    }
  }
});