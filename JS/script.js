// ============================================
// MENU HAMBURGUESA
// ============================================

const botonMenu = document.querySelector(".boton-menu");
const menu = document.querySelector(".navegacion ul");

if (botonMenu && menu) {
  botonMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-abierto");

    const menuAbierto = menu.classList.contains("menu-abierto");

    if (menuAbierto) {
      botonMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      botonMenu.setAttribute("aria-label", "Cerrar menú");
    } else {
      botonMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
      botonMenu.setAttribute("aria-label", "Abrir menú");
    }
  });
}

/* =========================================================
   DROPDOWN DE TEMPORADAS
   ========================================================= */

const menuTemporadas = document.querySelector(".menu-desplegable");
const enlaceTemporadas = document.querySelector(".enlace-temporadas");

if (menuTemporadas && enlaceTemporadas) {
    enlaceTemporadas.addEventListener("click", function (evento) {
        const esMobile = window.innerWidth <= 800;

        if (esMobile) {
            evento.preventDefault();

            menuTemporadas.classList.toggle("submenu-abierto");
        }
    });
}

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

const formulario = document.querySelector(".formulario-contacto form");

if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const anterior = formulario.querySelector(".mensaje-exito");

    if (anterior) {
      anterior.remove();
    }

    const mensajeExito = document.createElement("p");

    mensajeExito.textContent = "Mensaje enviado correctamente.";
    mensajeExito.classList.add("mensaje-exito");

    formulario.appendChild(mensajeExito);

    formulario.reset();
  });
}

// ============================================
// INFORMACION DE LAS TEMPORADAS
// ============================================

const temporadas = {
  // ========================================
  // TEMPORADA 1
  // ========================================

  1: {
    año: "2011",
    episodios: "12",

    descripcion:
      "Mike Ross, un joven brillante con una memoria extraordinaria, consigue trabajo como asociado de Harvey Specter a pesar de no haber asistido a la facultad de Derecho.",

    imagen: "IMG/temporada01.webp",

    listaEpisodios: [
      {
        nombre: "Pilot",
        sinopsis:
          "Harvey Specter conoce a Mike Ross, un joven con una memoria extraordinaria, y decide contratarlo como su nuevo asociado a pesar de que Mike nunca estudió Derecho.",
      },

      {
        nombre: "Errors and Omissions",
        sinopsis:
          "Mike comienza a adaptarse a su nuevo trabajo mientras Harvey le asigna un caso que pone a prueba sus habilidades.",
      },

      {
        nombre: "Inside Track",
        sinopsis:
          "Harvey y Mike trabajan en un importante caso empresarial mientras Mike intenta demostrar que puede desenvolverse en el mundo\u00A0legal.",
      },

      {
        nombre: "Dirty Little Secrets",
        sinopsis:
          "Un secreto del pasado amenaza con complicar uno de los casos de Harvey y Mike.",
      },

      {
        nombre: "Bail Out",
        sinopsis:
          "Harvey representa a un cliente en problemas mientras Mike empieza a comprender las consecuencias de trabajar en casos de alto\u00A0riesgo.",
      },

      {
        nombre: "Tricks of the Trade",
        sinopsis:
          "Mike aprende nuevas estrategias para enfrentarse a abogados experimentados y comienza a ganar reconocimiento dentro del\u00A0bufete.",
      },

      {
        nombre: "Play the Man",
        sinopsis:
          "Harvey y Mike se enfrentan a un rival que intenta aprovechar una situación complicada para ponerlos contra las cuerdas.",
      },

      {
        nombre: "Identity Crisis",
        sinopsis:
          "Mike debe utilizar su ingenio para resolver un problema relacionado con la identidad de uno de los involucrados en un\u00A0caso.",
      },

      {
        nombre: "Undefeated",
        sinopsis:
          "Harvey se enfrenta a uno de sus rivales más difíciles mientras Mike busca una manera de ayudarlo a conseguir la victoria.",
      },

      {
        nombre: "The Shelf Life",
        sinopsis:
          "Mike se encuentra con un caso que demuestra que incluso los abogados más experimentados pueden cometer errores.",
      },

      {
        nombre: "Rules of the Game",
        sinopsis:
          "Harvey y Mike deben enfrentarse a un caso en el que las reglas del juego cambian constantemente.",
      },

      {
        nombre: "Dog Fight",
        sinopsis:
          "Harvey y Mike enfrentan un caso especialmente difícil que pone a prueba todo lo que han aprendido trabajando juntos.",
      },
    ],
  },

  // ========================================
  // TEMPORADA 2
  // ========================================

  2: {
    año: "2012",
    episodios: "16",

    descripcion:
      "Harvey y Mike intentan mantener su secreto mientras Pearson Hardman enfrenta nuevos conflictos internos y una fuerte competencia.",

    imagen: "IMG/temporada02.webp",

    listaEpisodios: [
      {
        nombre: "She Knows",
        sinopsis:
          "Jessica descubre la verdad sobre Mike y Harvey debe decidir cómo proteger a su\u00A0protegido.",
      },

      {
        nombre: "The Choice",
        sinopsis:
          "Harvey y Jessica enfrentan una situación que obliga a tomar decisiones importantes sobre el futuro del bufete.",
      },

      {
        nombre: "Meet the New Boss",
        sinopsis:
          "La llegada de un nuevo socio cambia el equilibrio de poder dentro de Pearson Hardman.",
      },

      {
        nombre: "Discovery",
        sinopsis:
          "Mike trabaja en un caso en el que descubrir información oculta puede ser la clave para conseguir una victoria.",
      },

      {
        nombre: "Break Point",
        sinopsis:
          "La presión sobre Mike aumenta mientras Harvey intenta mantener el control de un caso cada vez más complicado.",
      },

      {
        nombre: "All In",
        sinopsis:
          "Harvey apuesta todo para ganar un importante caso mientras Mike debe demostrar que está preparado para asumir mayores responsabilidades.",
      },

      {
        nombre: "Sucker Punch",
        sinopsis:
          "Un movimiento inesperado de un rival deja a Harvey y Mike en una posición complicada.",
      },

      {
        nombre: "Rewind",
        sinopsis:
          "Mike revisa decisiones del pasado para encontrar una solución a un problema que amenaza su futuro profesional.",
      },

      {
        nombre: "Asterisk",
        sinopsis:
          "Harvey se enfrenta a las consecuencias de una decisión anterior mientras Mike intenta\u00A0ayudarlo.",
      },

      {
        nombre: "High Noon",
        sinopsis:
          "Un enfrentamiento directo entre abogados lleva la competencia dentro del bufete a un nuevo nivel.",
      },

      {
        nombre: "Blind-Sided",
        sinopsis:
          "Harvey recibe un golpe inesperado que cambia el rumbo de uno de sus casos.",
      },

      {
        nombre: "Blood in the Water",
        sinopsis:
          "Los conflictos internos hacen que los rivales del bufete detecten una oportunidad para\u00A0atacar.",
      },

      {
        nombre: "Zane vs. Zane",
        sinopsis:
          "Harvey se enfrenta nuevamente a Robert Zane en un caso donde ambos tienen mucho que perder.",
      },

      {
        nombre: "He's Back",
        sinopsis:
          "El regreso de una persona del pasado vuelve a alterar las relaciones dentro del bufete.",
      },

      {
        nombre: "Normandy",
        sinopsis:
          "Harvey y Mike deben trabajar juntos mientras una batalla legal pone a prueba sus\u00A0estrategias.",
      },

      {
        nombre: "War",
        sinopsis:
          "La temporada llega a un enfrentamiento decisivo que obliga a todos los integrantes de la firma a tomar partido.",
      },
    ],
  },

  // ========================================
  // TEMPORADA 3
  // ========================================

  3: {
    año: "2013",
    episodios: "16",

    descripcion:
      "La llegada de nuevos desafíos pone a prueba la relación entre Harvey y Mike mientras la firma atraviesa importantes cambios.",

    imagen: "IMG/temporada03.webp",

    listaEpisodios: [
      {
        nombre: "The Arrangement",
        sinopsis:
          "Harvey y Jessica deben encontrar una forma de mantener el control del bufete mientras Mike enfrenta nuevos\u00A0desafíos.",
      },

      {
        nombre: "I Want You to Want Me",
        sinopsis:
          "Mike intenta demostrar su valor mientras Harvey debe lidiar con nuevas presiones dentro de la\u00A0firma.",
      },

      {
        nombre: "Unfinished Business",
        sinopsis:
          "Un asunto del pasado vuelve a aparecer y obliga a Harvey a enfrentarse a problemas que creía resueltos.",
      },

      {
        nombre: "Conflict of Interest",
        sinopsis:
          "Mike se encuentra involucrado en un caso donde los intereses de diferentes clientes generan un conflicto complicado.",
      },

      {
        nombre: "Shadow of a Doubt",
        sinopsis:
          "Las dudas sobre una decisión importante ponen a prueba la confianza entre varios miembros de la firma.",
      },

      {
        nombre: "The Other Time",
        sinopsis:
          "El episodio muestra acontecimientos del pasado que ayudan a comprender mejor la relación entre Harvey y\u00A0Donna.",
      },

      {
        nombre: "She's Mine",
        sinopsis:
          "Harvey intenta proteger a una persona cercana mientras enfrenta una situación legal cada vez más complicada.",
      },

      {
        nombre: "Endgame",
        sinopsis:
          "Los conflictos acumulados llegan a un punto decisivo y Harvey debe preparar su estrategia\u00A0final.",
      },

      {
        nombre: "Bad Faith",
        sinopsis:
          "Mike se enfrenta a un problema que pone en duda la confianza de sus compañeros.",
      },

      {
        nombre: "Stay",
        sinopsis:
          "Una decisión profesional importante obliga a varios personajes a pensar en qué quieren realmente para su\u00A0futuro.",
      },

      {
        nombre: "Buried Secrets",
        sinopsis:
          "Secretos que permanecían ocultos comienzan a salir a la luz y amenazan con afectar a la\u00A0firma.",
      },

      {
        nombre: "Yesterday's Gone",
        sinopsis:
          "Harvey debe aceptar que algunas situaciones del pasado ya no pueden recuperarse.",
      },

      {
        nombre: "Moot Point",
        sinopsis:
          "Mike trabaja en un caso mientras las tensiones personales dentro de la firma continúan aumentando.",
      },

      {
        nombre: "Heartburn",
        sinopsis:
          "Las relaciones personales y profesionales comienzan a mezclarse y complican las decisiones de los abogados.",
      },

      {
        nombre: "Know When to Fold 'Em",
        sinopsis:
          "Harvey debe decidir cuándo continuar luchando y cuándo aceptar que una estrategia ya no\u00A0funciona.",
      },

      {
        nombre: "No Way Out",
        sinopsis:
          "Una situación límite obliga a Harvey, Mike y sus compañeros a buscar una solución antes de que sea demasiado tarde.",
      },
    ],
  },

  // ========================================
  // TEMPORADA 4
  // ========================================

  4: {
    año: "2014",
    episodios: "16",

    descripcion:
      "Mike comienza una nueva etapa profesional mientras Harvey enfrenta decisiones que pueden cambiar el futuro de la firma.",

    imagen: "IMG/temporada04.webp",

    listaEpisodios: [
      {
        nombre: "One-Two-Three Go...",
        sinopsis:
          "Mike comienza una nueva etapa laboral y debe demostrar que puede desenvolverse fuera de la protección de Harvey.",
      },

      {
        nombre: "Breakfast, Lunch and Dinner",
        sinopsis:
          "Mike y Harvey se encuentran enfrentados profesionalmente mientras intentan mantener su relación personal.",
      },

      {
        nombre: "Two in the Knees",
        sinopsis:
          "Un nuevo conflicto empresarial obliga a los abogados a utilizar estrategias poco convencionales.",
      },

      {
        nombre: "Leveraged",
        sinopsis:
          "Harvey intenta utilizar información estratégica para conseguir ventaja frente a sus\u00A0rivales.",
      },

      {
        nombre: "Pound of Flesh",
        sinopsis:
          "Mike busca demostrar que puede competir al mismo nivel que los abogados más experimentados.",
      },

      {
        nombre: "Litt the Hell Up",
        sinopsis:
          "Louis Litt enfrenta una situación que amenaza su posición dentro de la firma.",
      },

      {
        nombre: "We're Done",
        sinopsis:
          "Una relación profesional llega a un punto crítico y obliga a los personajes a reconsiderar sus\u00A0alianzas.",
      },

      {
        nombre: "Exposure",
        sinopsis:
          "Una amenaza de revelar información importante pone a varios miembros de la firma bajo\u00A0presión.",
      },

      {
        nombre: "Gone",
        sinopsis:
          "Harvey debe enfrentarse a las consecuencias de una decisión mientras intenta proteger a las personas que considera importantes.",
      },

      {
        nombre: "This Is Rome",
        sinopsis:
          "Harvey intenta resolver un conflicto mientras las tensiones dentro del bufete alcanzan nuevos niveles.",
      },

      {
        nombre: "Enough Is Enough",
        sinopsis:
          "Los problemas acumulados hacen que varios personajes decidan poner límites a situaciones que ya no pueden\u00A0tolerar.",
      },

      {
        nombre: "Respect",
        sinopsis:
          "Mike busca ganarse nuevamente el respeto de sus compañeros después de varios enfrentamientos profesionales.",
      },

      {
        nombre: "Fork in the Road",
        sinopsis:
          "Una decisión importante abre diferentes caminos para Mike y cambia sus planes profesionales.",
      },

      {
        nombre: "Derailed",
        sinopsis:
          "Un caso toma un rumbo inesperado y obliga a Harvey y Mike a cambiar completamente su\u00A0estrategia.",
      },

      {
        nombre: "Intent",
        sinopsis:
          "Las acciones de Mike generan nuevas consecuencias y Harvey debe decidir cómo reaccionar.",
      },

      {
        nombre: "Not Just a Pretty Face",
        sinopsis:
          "Donna demuestra una vez más que sus habilidades son fundamentales para que la firma pueda superar una situación complicada.",
      },
    ],
  },

  // ========================================
  // TEMPORADA 5
  // ========================================

  5: {
    año: "2015",
    episodios: "16",

    descripcion:
      "La presión aumenta sobre Mike y Harvey, mientras los secretos y las decisiones del pasado comienzan a tener consecuencias.",

    imagen: "IMG/temporada05.webp",

    listaEpisodios: [
      {
        nombre: "Denial",
        sinopsis:
          "Mike intenta continuar con su vida profesional mientras la presión sobre su secreto aumenta.",
      },

      {
        nombre: "Compensation",
        sinopsis:
          "Harvey debe enfrentarse a las consecuencias de una decisión mientras intenta proteger a su\u00A0equipo.",
      },

      {
        nombre: "No Refills",
        sinopsis:
          "Una disputa profesional pone a Harvey en una posición complicada y obliga a Mike a\u00A0intervenir.",
      },

      {
        nombre: "No Puedo Hacerlo",
        sinopsis:
          "Mike se enfrenta a una situación personal y profesional que empieza a superar su capacidad para mantener todo bajo\u00A0control.",
      },

      {
        nombre: "Toe to Toe",
        sinopsis:
          "Harvey y Mike se enfrentan a rivales que están decididos a aprovechar cualquier debilidad.",
      },

      {
        nombre: "Privilege",
        sinopsis:
          "Un caso relacionado con información privilegiada pone a prueba la ética profesional de\u00A0Mike.",
      },

      {
        nombre: "Hitting Home",
        sinopsis:
          "Los problemas profesionales comienzan a afectar seriamente la vida personal de los protagonistas.",
      },

      {
        nombre: "Mea Culpa",
        sinopsis:
          "Mike debe asumir responsabilidad por algunas de sus decisiones mientras intenta reparar el daño causado.",
      },

      {
        nombre: "Uninvited Guests",
        sinopsis:
          "La llegada inesperada de ciertos personajes complica todavía más la situación dentro de la\u00A0firma.",
      },

      {
        nombre: "Faith",
        sinopsis:
          "Harvey debe confiar en sus compañeros mientras enfrenta uno de los momentos más difíciles de su carrera.",
      },

      {
        nombre: "Blowback",
        sinopsis:
          "Las decisiones tomadas anteriormente comienzan a generar consecuencias que amenazan al bufete.",
      },

      {
        nombre: "Live to Fight...",
        sinopsis:
          "Mike intenta encontrar una forma de seguir adelante mientras Harvey lucha por mantener unido al equipo.",
      },

      {
        nombre: "God's Green Earth",
        sinopsis:
          "Una nueva amenaza obliga a Harvey y Mike a tomar decisiones difíciles mientras intentan proteger a la firma.",
      },

      {
        nombre: "Self Defense",
        sinopsis:
          "Mike debe defenderse de acusaciones que podrían cambiar completamente su\u00A0futuro.",
      },

      {
        nombre: "Tick Tock",
        sinopsis:
          "El tiempo comienza a agotarse y los personajes deben actuar rápidamente para evitar consecuencias mayores.",
      },

      {
        nombre: "25th Hour",
        sinopsis:
          "El futuro de Mike queda en juego mientras Harvey intenta encontrar una última oportunidad para ayudarlo.",
      },
    ],
  },

  // ========================================
  // TEMPORADA 6
  // ========================================

  6: {
    año: "2016",
    episodios: "16",

    descripcion:
      "Mike debe enfrentar las consecuencias de sus decisiones mientras Harvey y el resto del equipo luchan por mantener la firma en pie.",

    imagen: "IMG/temporada06.webp",

    listaEpisodios: [
      {
        nombre: "To Trouble",
        sinopsis:
          "Mike comienza una nueva etapa después de los acontecimientos anteriores mientras intenta reconstruir su\u00A0vida.",
      },

      {
        nombre: "Accounts Payable",
        sinopsis:
          "Harvey y Jessica buscan una manera de mantener la firma económicamente estable.",
      },

      {
        nombre: "Back on the Map",
        sinopsis:
          "Mike intenta encontrar nuevamente su lugar en el mundo profesional.",
      },

      {
        nombre: "Turn",
        sinopsis:
          "Una nueva oportunidad obliga a Mike a decidir qué camino quiere seguir.",
      },

      {
        nombre: "Trust",
        sinopsis:
          "La confianza entre los miembros de la firma vuelve a ser puesta a prueba.",
      },

      {
        nombre: "Spain",
        sinopsis:
          "Una situación relacionada con el pasado de Harvey genera nuevas tensiones entre los\u00A0personajes.",
      },

      {
        nombre: "Shake the Trees",
        sinopsis:
          "Harvey utiliza todos sus recursos para encontrar información que pueda ayudar a resolver un\u00A0caso.",
      },

      {
        nombre: "Borrowed Time",
        sinopsis:
          "Mike intenta aprovechar una oportunidad mientras sabe que tiene poco tiempo para conseguir sus objetivos.",
      },

      {
        nombre: "The Hand That Feeds You",
        sinopsis:
          "Una alianza importante comienza a complicarse cuando los intereses de las partes dejan de\u00A0coincidir.",
      },

      {
        nombre: "P.S.L.",
        sinopsis:
          "Los problemas internos de la firma obligan a sus integrantes a reconsiderar su futuro.",
      },

      {
        nombre: "She's Gone",
        sinopsis:
          "Una ausencia importante cambia el equilibrio emocional y profesional dentro de la firma.",
      },

      {
        nombre: "The Painting",
        sinopsis:
          "Harvey se enfrenta a recuerdos personales mientras intenta resolver un problema profesional.",
      },

      {
        nombre: "Teeth, Nose, Teeth",
        sinopsis:
          "Mike y Harvey deben enfrentarse a una situación especialmente complicada utilizando estrategias diferentes.",
      },

      {
        nombre: "Admission of Guilt",
        sinopsis:
          "Una confesión cambia el rumbo de un caso y obliga a los abogados a reconsiderar su\u00A0estrategia.",
      },

      {
        nombre: "Quid Pro Quo",
        sinopsis:
          "Harvey intenta conseguir una ventaja negociando un intercambio que podría beneficiar a ambas partes.",
      },

      {
        nombre: "Character and Fitness",
        sinopsis:
          "Mike enfrenta una importante evaluación que puede determinar su futuro como abogado.",
      },
    ],
  },

  // ========================================
  // TEMPORADA 7
  // ========================================

  7: {
    año: "2017",
    episodios: "16",

    descripcion:
      "La firma entra en una nueva etapa y sus integrantes deben adaptarse a importantes cambios personales y\u00A0profesionales.",

    imagen: "IMG/temporada07.webp",

    listaEpisodios: [
      {
        nombre: "Skin in the Game",
        sinopsis:
          "Harvey intenta adaptarse a su nueva posición mientras Mike busca demostrar que está preparado para mayores responsabilidades.",
      },

      {
        nombre: "The Statue",
        sinopsis:
          "Una decisión de la firma genera un conflicto entre Harvey y sus compañeros.",
      },

      {
        nombre: "Mudmare",
        sinopsis:
          "Mike se enfrenta a un caso complicado mientras intenta equilibrar su trabajo con su vida\u00A0personal.",
      },

      {
        nombre: "Divide and Conquer",
        sinopsis:
          "Los abogados deben dividir sus esfuerzos para resolver varios problemas que amenazan a la\u00A0firma.",
      },

      {
        nombre: "Brooklyn Housing",
        sinopsis:
          "Mike trabaja en un caso relacionado con viviendas mientras descubre nuevos desafíos fuera del entorno habitual de la\u00A0firma.",
      },

      {
        nombre: "Home to Roost",
        sinopsis:
          "Las decisiones del pasado comienzan a regresar y afectan a varios miembros de la firma.",
      },

      {
        nombre: "Full Disclosure",
        sinopsis:
          "La posibilidad de revelar información importante obliga a los personajes a decidir cuánto están dispuestos a\u00A0contar.",
      },

      {
        nombre: "100",
        sinopsis:
          "Harvey y Mike enfrentan un momento importante mientras la firma celebra un acontecimiento especial.",
      },

      {
        nombre: "Shame",
        sinopsis:
          "Un conflicto personal hace que Harvey tenga que enfrentarse a sus propias decisiones.",
      },

      {
        nombre: "Donna",
        sinopsis:
          "Donna adquiere un papel cada vez más importante dentro de la firma y comienza a explorar nuevas posibilidades.",
      },

      {
        nombre: "Hard Truths",
        sinopsis:
          "Los personajes deben aceptar verdades difíciles que pueden cambiar sus relaciones profesionales.",
      },

      {
        nombre: "Bad Man",
        sinopsis:
          "Harvey se enfrenta a un rival decidido a utilizar cualquier recurso para conseguir ventaja.",
      },

      {
        nombre: "Inevitable",
        sinopsis:
          "Una situación que parecía inevitable finalmente obliga a los personajes a tomar una\u00A0decisión.",
      },

      {
        nombre: "Pulling the Goalie",
        sinopsis:
          "Harvey debe arriesgarse y cambiar su estrategia para intentar conseguir una victoria\u00A0importante.",
      },

      {
        nombre: "Tiny Violin",
        sinopsis:
          "Los personajes deben enfrentarse a problemas personales mientras intentan mantener el control de sus\u00A0carreras.",
      },

      {
        nombre: "Good-Bye",
        sinopsis:
          "Una etapa importante llega a su fin y varios personajes deben prepararse para cambios\u00A0significativos.",
      },
    ],
  },

  // ========================================
  // TEMPORADA 8
  // ========================================

  8: {
    año: "2018",
    episodios: "16",

    descripcion:
      "Con nuevos integrantes y nuevos desafíos, la firma intenta mantener su posición mientras sus relaciones personales vuelven a ponerse\u00A0a\u00A0prueba.",

    imagen: "IMG/temporada08.webp",

    listaEpisodios: [
      {
        nombre: "Right-Hand Man",
        sinopsis:
          "Harvey debe adaptarse a nuevos cambios dentro de la firma mientras intenta mantener su posición.",
      },

      {
        nombre: "Pecking Order",
        sinopsis:
          "La llegada de nuevos integrantes genera una lucha por establecer quién tiene mayor autoridad.",
      },

      {
        nombre: "Promises, Promises",
        sinopsis:
          "Las promesas hechas entre los personajes comienzan a entrar en conflicto con sus responsabilidades profesionales.",
      },

      {
        nombre: "Revenue Per Client",
        sinopsis:
          "La firma analiza nuevas estrategias para aumentar sus ingresos mientras surgen conflictos entre sus integrantes.",
      },

      {
        nombre: "Good Mudding",
        sinopsis:
          "Harvey y sus compañeros deben trabajar juntos para resolver un problema que afecta a varios clientes.",
      },

      {
        nombre: "Cats, Ballet, Harvey Specter",
        sinopsis:
          "Harvey intenta manejar una situación poco habitual mientras su vida profesional continúa complicándose.",
      },

      {
        nombre: "Sour Grapes",
        sinopsis:
          "Una rivalidad personal comienza a afectar las decisiones profesionales dentro de la firma.",
      },

      {
        nombre: "Coral Gables",
        sinopsis:
          "Un nuevo caso lleva a los abogados a enfrentarse a una situación con importantes consecuencias.",
      },

      {
        nombre: "Motion to Adjourn",
        sinopsis:
          "Los abogados buscan una nueva estrategia para ganar tiempo y conseguir una ventaja en un caso complicado.",
      },

      {
        nombre: "Managing Partner",
        sinopsis:
          "La posición de socio gerente vuelve a ser motivo de tensión entre los miembros de la firma.",
      },

      {
        nombre: "Rocky 8",
        sinopsis:
          "Harvey debe enfrentarse nuevamente a un rival conocido en una batalla profesional especialmente intensa.",
      },

      {
        nombre: "Whale Hunt",
        sinopsis:
          "La firma intenta conseguir un cliente extremadamente importante que podría cambiar su\u00A0futuro.",
      },

      {
        nombre: "The Greater Good",
        sinopsis:
          "Los personajes deben decidir entre sus intereses personales y lo que consideran mejor para el\u00A0equipo.",
      },

      {
        nombre: "Shelter from the Storm",
        sinopsis:
          "Una crisis obliga a los integrantes de la firma a apoyarse mutuamente para superar la\u00A0situación.",
      },

      {
        nombre: "Stalking Horse",
        sinopsis:
          "Una estrategia inesperada permite a la firma acercarse a una posición de ventaja.",
      },

      {
        nombre: "Harvey",
        sinopsis:
          "Harvey enfrenta importantes decisiones personales mientras sus compañeros intentan ayudarlo a encontrar el camino\u00A0correcto.",
      },
    ],
  },

  // ========================================
  // TEMPORADA 9
  // ========================================

  9: {
    año: "2019",
    episodios: "10",

    descripcion:
      "La temporada final lleva a los personajes a enfrentar sus últimos grandes desafíos mientras buscan definir el futuro de la firma.",

    imagen: "IMG/temporada09.webp",

    listaEpisodios: [
      {
        nombre: "Everything's Changed",
        sinopsis:
          "La firma comienza una nueva etapa mientras Harvey y sus compañeros deben adaptarse a importantes cambios.",
      },

      {
        nombre: "Special Master",
        sinopsis:
          "Un conflicto profesional obliga a los abogados a enfrentarse a una nueva autoridad externa.",
      },

      {
        nombre: "Windmills",
        sinopsis:
          "Harvey y Mike vuelven a trabajar juntos mientras intentan resolver un problema que afecta a personas cercanas.",
      },

      {
        nombre: "Cairo",
        sinopsis:
          "Una nueva situación obliga a Harvey a reconsiderar sus prioridades personales y\u00A0profesionales.",
      },

      {
        nombre: "If the Shoe Fits",
        sinopsis:
          "Una oportunidad inesperada lleva a los personajes a tomar decisiones que pueden cambiar sus planes.",
      },

      {
        nombre: "Whatever It Takes",
        sinopsis:
          "Los integrantes de la firma están dispuestos a hacer todo lo necesario para proteger aquello que consideran importante.",
      },

      {
        nombre: "Scenic Route",
        sinopsis:
          "Harvey y sus compañeros toman caminos inesperados para resolver sus problemas.",
      },

      {
        nombre: "Prisoner's Dilemma",
        sinopsis:
          "Los personajes se encuentran atrapados en una situación en la que cualquier decisión puede tener consecuencias importantes.",
      },

      {
        nombre: "Thunder Away",
        sinopsis:
          "Los últimos conflictos profesionales y personales comienzan a llegar a su punto culminante.",
      },

      {
        nombre: "One Last Con",
        sinopsis:
          "Harvey y sus compañeros enfrentan su último gran desafío mientras intentan cerrar definitivamente una etapa de sus\u00A0vidas.",
      },
    ],
  },
};

// ============================================
// PAGINA DE DETALLE DE TEMPORADA
// ============================================

const tituloTemporada = document.querySelector("#titulo-temporada");
const descripcionTemporada = document.querySelector("#descripcion-temporada");
const añoTemporada = document.querySelector("#año-temporada");
const episodiosTemporada = document.querySelector("#episodios-temporada");
const imagenTemporada = document.querySelector("#imagen-temporada");
const listaEpisodios = document.querySelector("#lista-episodios");

// Verificamos si estamos en temporada.html

if (tituloTemporada) {
  const parametros = new URLSearchParams(window.location.search);

  const numeroTemporada = parametros.get("temporada");

  const temporadaAnterior = document.querySelector("#temporada-anterior");
  const temporadaSiguiente = document.querySelector("#temporada-siguiente");

  const temporada = temporadas[numeroTemporada];

  // ========================================
  // SI LA TEMPORADA EXISTE
  // ========================================

  if (temporada) {
    const numero = Number(numeroTemporada);

    if (temporadaAnterior) {
      if (numero > 1) {
        temporadaAnterior.href = "temporada.html?temporada=" + (numero - 1);
        temporadaAnterior.querySelector("strong").textContent =
          "Temporada " + (numero - 1);
      } else {
        temporadaAnterior.style.visibility = "hidden";
      }
    }

    if (temporadaSiguiente) {
      if (numero < 9) {
        temporadaSiguiente.href = "temporada.html?temporada=" + (numero + 1);
        temporadaSiguiente.querySelector("strong").textContent =
          "Temporada " + (numero + 1);
      } else {
        temporadaSiguiente.style.visibility = "hidden";
      }
    }

    tituloTemporada.textContent = "Temporada " + numeroTemporada;

    descripcionTemporada.textContent = temporada.descripcion;

    añoTemporada.textContent = temporada.año;

    episodiosTemporada.textContent = temporada.episodios;

    imagenTemporada.src = temporada.imagen;

    imagenTemporada.alt = "Imagen de la temporada " + numeroTemporada;

    document.title = "Suits | Temporada " + numeroTemporada;

    // ====================================
    // GENERAR EPISODIOS
    // ====================================

    if (listaEpisodios) {
      // Limpiamos la lista por seguridad

      listaEpisodios.innerHTML = "";

      temporada.listaEpisodios.forEach(function (episodioDatos, indice) {
        // ------------------------------
        // CONTENEDOR DEL EPISODIO
        // ------------------------------

        const episodio = document.createElement("article");

        episodio.classList.add("episodio");

        // ------------------------------
        // NUMERO DEL EPISODIO
        // ------------------------------

        const numero = document.createElement("div");

        numero.classList.add("numero-episodio");

        numero.textContent = String(indice + 1).padStart(2, "0");

        // ------------------------------
        // INFORMACION
        // ------------------------------

        const informacion = document.createElement("div");

        informacion.classList.add("info-episodio");

        // Titulo

        const titulo = document.createElement("h3");

        titulo.textContent = episodioDatos.nombre;

        // Numero de episodio

        const texto = document.createElement("p");

        texto.textContent = "Episodio " + (indice + 1);

        informacion.appendChild(titulo);
        informacion.appendChild(texto);

        // ------------------------------
        // ICONO
        // ------------------------------

        const icono = document.createElement("i");

        icono.classList.add("fa-solid", "fa-chevron-right", "icono-episodio");

        // ------------------------------
        // SINOPSIS
        // ------------------------------

        const sinopsis = document.createElement("div");

        sinopsis.classList.add("sinopsis-episodio");

        sinopsis.textContent = episodioDatos.sinopsis;

        // ------------------------------
        // ARMAMOS EL EPISODIO
        // ------------------------------

        episodio.appendChild(numero);

        episodio.appendChild(informacion);

        episodio.appendChild(icono);

        episodio.appendChild(sinopsis);

        // ------------------------------
        // ABRIR / CERRAR
        // ------------------------------

        episodio.addEventListener("click", function () {
          episodio.classList.toggle("abierto");
        });

        // ------------------------------
        // AGREGAR A LA LISTA
        // ------------------------------

        listaEpisodios.appendChild(episodio);
      });
    }
  }
}

// ============================================
// LIGHTBOX DE GALERÍA
// ============================================

const fotosGaleria = document.querySelectorAll(".foto");

const lightbox = document.querySelector("#lightbox");
const lightboxImagen = document.querySelector("#lightbox-imagen");
const lightboxTitulo = document.querySelector("#lightbox-titulo");
const lightboxDescripcion = document.querySelector("#lightbox-descripcion");

const botonCerrarLightbox = document.querySelector("#lightbox-cerrar");
const botonAnteriorLightbox = document.querySelector("#lightbox-anterior");
const botonSiguienteLightbox = document.querySelector("#lightbox-siguiente");

let indiceFotoActual = 0;


// ============================================
// VERIFICAMOS SI EXISTE LA GALERÍA
// ============================================

if (fotosGaleria.length > 0 && lightbox) {

  // ========================================
  // MOSTRAR IMAGEN
  // ========================================

  function mostrarFoto(indice) {

    const foto = fotosGaleria[indice];

    const imagen = foto.querySelector("img");
    const titulo = foto.querySelector(".info-foto h2");
    const descripcion = foto.querySelector(".info-foto p");

    indiceFotoActual = indice;

    lightboxImagen.src = imagen.src;
    lightboxImagen.alt = imagen.alt;

    lightboxTitulo.textContent = titulo.textContent;
    lightboxDescripcion.textContent = descripcion.textContent;
  }


  // ========================================
  // ABRIR LIGHTBOX
  // ========================================

  fotosGaleria.forEach(function (foto, indice) {

    foto.addEventListener("click", function () {

      mostrarFoto(indice);

      lightbox.classList.add("activo");
      lightbox.setAttribute("aria-hidden", "false");

      document.body.classList.add("lightbox-abierto");
    });

  });


  // ========================================
  // CERRAR LIGHTBOX
  // ========================================

  function cerrarLightbox() {

    lightbox.classList.remove("activo");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-abierto");
  }


  botonCerrarLightbox.addEventListener("click", cerrarLightbox);


  // ========================================
  // FOTO ANTERIOR
  // ========================================

  botonAnteriorLightbox.addEventListener("click", function (evento) {

    evento.stopPropagation();

    indiceFotoActual--;

    if (indiceFotoActual < 0) {
      indiceFotoActual = fotosGaleria.length - 1;
    }

    mostrarFoto(indiceFotoActual);
  });


  // ========================================
  // FOTO SIGUIENTE
  // ========================================

  botonSiguienteLightbox.addEventListener("click", function (evento) {

    evento.stopPropagation();

    indiceFotoActual++;

    if (indiceFotoActual >= fotosGaleria.length) {
      indiceFotoActual = 0;
    }

    mostrarFoto(indiceFotoActual);
  });


  // ========================================
  // CERRAR HACIENDO CLICK AFUERA
  // ========================================

  lightbox.addEventListener("click", function (evento) {

    if (evento.target === lightbox) {
      cerrarLightbox();
    }

  });


  // ========================================
  // TECLADO
  // ========================================

  document.addEventListener("keydown", function (evento) {

    if (!lightbox.classList.contains("activo")) {
      return;
    }

    if (evento.key === "Escape") {
      cerrarLightbox();
    }

    if (evento.key === "ArrowLeft") {

      indiceFotoActual--;

      if (indiceFotoActual < 0) {
        indiceFotoActual = fotosGaleria.length - 1;
      }

      mostrarFoto(indiceFotoActual);
    }

    if (evento.key === "ArrowRight") {

      indiceFotoActual++;

      if (indiceFotoActual >= fotosGaleria.length) {
        indiceFotoActual = 0;
      }

      mostrarFoto(indiceFotoActual);
    }

  });

}