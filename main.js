
    const peliculas = {
  drama: [
    { titulo: "Oppenheimer", edadMinima: 16 },
    { titulo: "The Whale", edadMinima: 17 },
    { titulo: "A Star Is Born", edadMinima: 15 }
  ],
  comedia: [
    { titulo: "Free Guy", edadMinima: 13 },
    { titulo: "The Intern", edadMinima: 12 },
    { titulo: "Yes Day", edadMinima: 7 }
  ],
  musical: [
    { titulo: "Hamilton", edadMinima: 13 },
    { titulo: "Tick, Tick... Boom!", edadMinima: 14 },
    { titulo: "Sing 2", edadMinima: 6 }
  ],
  crimen: [
    { titulo: "The Batman", edadMinima: 14 },
    { titulo: "John Wick 4", edadMinima: 18 },
    { titulo: "The Irishman", edadMinima: 18 }
  ]
};

    function recomendar(genero) {
      const edad = parseInt(document.getElementById("edad").value);
      const lista = peliculas[genero];
      const recomendada = lista.find(p => edad >= p.edadMinima);
      
      const texto = recomendada 
        ? recomendada.titulo 
        : "Lo sentimos, no hay películas disponibles para tu edad en este género.";
      
      document.getElementById("recomendacion").innerText = texto;
    }
