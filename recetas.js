const recetasColombianas = [
  {
    nombre: "Bandeja Paisa",
    ingredientes: ["carne de cerdo", "carne de res", "chicharrón", "arroz", "frijoles", "plátano maduro", "huevo frito", "aguacate", "arepa"],
    tiempoPreparacion: "2 horas",
    dificultad: "Media",
    origen: "Antioquia",
    imagen: "images/Bandeja_Paisa.jpg"
  },
  {
    nombre: "Ajiaco Santafereño",
    ingredientes: ["pollo", "papa criolla", "mazorca", "papa blanca", "guascas", "crema de leche", "alcaparras"],
    tiempoPreparacion: "2 horas",
    dificultad: "Media",
    origen: "Bogotá D.C.",
    imagen: "images/Ajiaco_Santafereño.jpg"
  },
  {
    nombre: "Sancocho Valluno",
    ingredientes: ["pollo", "costilla de cerdo", "papa criolla", "mazorca", "plátano", "yuka", "cilantro", "hogao"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Valle del Cauca",
    imagen: "images/Sancocho_Valluno.jpg"
  },
  {
    nombre: "Arepa de Choclo",
    ingredientes: ["choclo", "queso fresco", "mantequilla", "azúcar", "sal"],
    tiempoPreparacion: "45 minutos",
    dificultad: "Fácil",
    origen: "Cundinamarca",
    imagen: "images/Arepa_de_Choclo.jpg"
  },
  {
    nombre: "Fritanga Costeña",
    ingredientes: ["butifarra", "chorizo", "chicharrón", "patacón", "yuca", "arepa", "limón"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Costa Caribe",
    imagen: "images/Fritanga_Costeña.jpg"
  },
  {
    nombre: "Lechona Tolimense",
    ingredientes: ["cerdo", "arroz", "huevo", "cebolla", "tomate", "arvejas", "cilantro"],
    tiempoPreparacion: "4 horas",
    dificultad: "Alta",
    origen: "Tolima",
    imagen: "images/Lechona_Tolimense.jpg"
  },
  {
    nombre: "Mondongo Antioqueño",
    ingredientes: ["mondongo", "pata de cerdo", "maíz", "yuca", "papa", "cilantro", "cebolla"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Antioquia",
    imagen: "images/Mondongo_Antioqueño.jpg"
  },
  {
    nombre: "Cazuela de Mariscos",
    ingredientes: ["camarones", "pescado", "calamares", "pulpo", "langostinos", "leche de coco", "pimentón", "ajo"],
    tiempoPreparacion: "1 hora 30 minutos",
    dificultad: "Media",
    origen: "Costa Caribe",
    imagen: "images/Cazuela_de_Mariscos.jpg"
  },
  {
    nombre: "Tamales Tolimenses",
    ingredientes: ["maíz", "pollo", "cerdo", "arvejas", "zanahoria", "cebolla larga", "huevo", "hojas de plátano"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Tolima",
    imagen: "images/Tamales_Tolimenses.jpg"
  },
  {
    nombre: "Frijoles Antioqueños",
    ingredientes: ["frijoles", "costilla de cerdo", "chorizo", "tocineta", "plátano maduro", "hogao", "aguacate"],
    tiempoPreparacion: "2 horas",
    dificultad: "Media",
    origen: "Antioquia",
    imagen: "images/Frijoles_Antioqueños.jpg"
  },
  {
    nombre: "Tamal Valluno",
    ingredientes: ["maíz", "pollo", "carne de cerdo", "arvejas", "zanahoria", "cebolla larga", "huevo", "hojas de plátano"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Valle del Cauca",
    imagen: "images/Tamal_Valluno.jpg"
  },
  {
    nombre: "Sobrebarriga al Horno",
    ingredientes: ["sobrebarriga", "cebolla", "tomate", "zanahoria", "papa", "cerveza", "mostaza"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Cundinamarca",
    imagen: "images/Sobrebarriga_al_Horno.jpg"
  },
  {
    nombre: "Patacón Pisao",
    ingredientes: ["plátano verde", "carne desmechada", "hogao", "aguacate", "queso"],
    tiempoPreparacion: "1 hora",
    dificultad: "Fácil",
    origen: "Costa Caribe",
    imagen: "images/Patacón_Pisao.jpg"
  },
    {
      nombre: "Ceviche de Camarón",
      ingredientes: ["camarones", "limón", "cebolla morada", "tomate", "cilantro", "ají"],
      tiempoPreparacion: "30 minutos",
      dificultad: "Fácil",
      origen: "Costa Caribe",
      imagen: "images/Ceviche_de_Camarón.jpg"
    },
    {
      nombre: "Pescado Frito",
      ingredientes: ["pescado fresco", "limón", "ajo", "cebolla", "cilantro", "yuca", "patacón"],
      tiempoPreparacion: "45 minutos",
      dificultad: "Fácil",
      origen: "Costa Caribe",
      imagen: "images/Pescado_Frito.jpg"
    },
    {
      nombre: "Changua",
      ingredientes: ["leche", "huevos", "cilantro", "cebolla", "caldo de pollo"],
      tiempoPreparacion: "30 minutos",
      dificultad: "Fácil",
      origen: "Bogotá D.C.",
      imagen: "images/Changua.jpg"
    },
    {
      nombre: "Hormigas Culonas",
      ingredientes: ["hormigas culonas", "sal"],
      tiempoPreparacion: "15 minutos",
      dificultad: "Fácil",
      origen: "Santander",
      imagen: "images/Hormigas_Culonas.jpg"
    },
    {
      nombre: "Cayeye",
      ingredientes: ["plátano verde", "queso fresco", "suero costeño", "mantequilla"],
      tiempoPreparacion: "1 hora",
      dificultad: "Fácil",
      origen: "Costa Caribe",
      imagen: "images/Cayeye.jpg"
    },
    {
      nombre: "Carimañolas",
      ingredientes: ["yuca", "carne molida", "cebolla", "ajo", "comino", "cilantro"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Costa Caribe",
      imagen: "images/Carimañolas.jpg"
    },
    {
      nombre: "Sopa de Mondongo",
      ingredientes: ["mondongo", "pata de cerdo", "maíz", "yuka", "plátano", "cilantro", "cebolla"],
      tiempoPreparacion: "3 horas",
      dificultad: "Media",
      origen: "Antioquia",
      imagen: "images/Sopa_de_Mondongo.jpg"
    },
    {
      nombre: "Picada Colombiana",
      ingredientes: ["chicharrón", "chorizo", "butifarra", "morcilla", "yuca", "papa criolla", "arepa", "limón"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Diferentes regiones",
      imagen: "images/Picada_Colombiana.jpg"
    },
    {
      nombre: "Aguardiente Antioqueño",
      ingredientes: ["aguardiente antioqueño"],
      tiempoPreparacion: "N/A",
      dificultad: "Fácil",
      origen: "Antioquia",
      imagen: "images/Aguardiente_Antioqueño.jpg"
    },
    {
      nombre: "Arroz con Coco",
      ingredientes: ["arroz", "coco rallado", "pasas", "azúcar", "canela"],
      tiempoPreparacion: "45 minutos",
      dificultad: "Fácil",
      origen: "Costa Caribe",
      imagen: "images/Arroz_con_Coco.jpg"
    },
    {
      nombre: "Mazorca Asada",
      ingredientes: ["mazorca", "sal", "limón", "mayonesa", "queso rallado"],
      tiempoPreparacion: "30 minutos",
      dificultad: "Fácil",
      origen: "Diferentes regiones",
      imagen: "images/Mazorca_Asada.jpg"
    },
    {
      nombre: "Lechona Tolimense",
      ingredientes: ["cerdo", "arroz", "huevo", "cebolla", "tomate", "arvejas", "cilantro"],
      tiempoPreparacion: "4 horas",
      dificultad: "Alta",
      origen: "Tolima",
      imagen: "images/Lechona_Tolimense.jpg"
    },
    {
      nombre: "Chuzo Antioqueño",
      ingredientes: ["carne de res", "chorizo", "papa", "cebolla", "tomate", "limón"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Antioquia",
      imagen: "images/Chuzo_Antioqueño.jpg"
    },
    {
      nombre: "Empanadas Colombianas",
      ingredientes: ["harina de maíz", "carne molida", "papa", "cebolla", "aji", "comino", "huevo"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Diferentes regiones",
      imagen: "images/Empanadas_Colombianas.jpg"
    },
    {
      nombre: "Torta de Choclo",
      ingredientes: ["choclo", "queso fresco", "huevo", "crema de leche", "azúcar"],
      tiempoPreparacion: "1 hora",
      dificultad: "Fácil",
      origen: "Diferentes regiones",
      imagen: "images/Torta_de_Choclo.jpg"
    },
    {
      nombre: "Chicharrón",
      ingredientes: ["tocino", "limón", "sal", "aji"],
      tiempoPreparacion: "2 horas",
      dificultad: "Media",
      origen: "Diferentes regiones",
      imagen: "images/Chicharrón.jpg"
    },
    {
      nombre: "Patacones",
      ingredientes: ["plátano verde", "aceite", "sal"],
      tiempoPreparacion: "30 minutos",
      dificultad: "Fácil",
      origen: "Diferentes regiones",
      imagen: "images/Patacones.jpg"
    },
    {
      nombre: "Cazuela de Frijoles",
      ingredientes: ["frijoles", "carne de cerdo", "chorizo", "tomate", "cebolla", "ajo", "cilantro"],
      tiempoPreparacion: "3 horas",
      dificultad: "Media",
      origen: "Antioquia",
      imagen: "images/Cazuela_de_Frijoles.jpg"
    },
    {
      nombre: "Arroz Atollado",
      ingredientes: ["arroz", "pollo", "chicharrón", "plátano maduro", "cilantro", "cebolla", "aji"],
      tiempoPreparacion: "2 horas",
      dificultad: "Media",
      origen: "Valle del Cauca",
      imagen: "images/Arroz_Atollado.jpg"
    },
    {
      nombre: "Salpicón de Frutas",
      ingredientes: ["frutas variadas", "leche condensada", "jugo de naranja", "ron", "helado de vainilla"],
      tiempoPreparacion: "30 minutos",
      dificultad: "Fácil",
      origen: "Diferentes regiones",
      imagen: "images/Salpicón_de_Frutas.jpg"
    },
    {
      nombre: "Mote de Queso",
      ingredientes: ["maíz", "queso fresco", "leche", "azúcar", "canela"],
      tiempoPreparacion: "2 horas",
      dificultad: "Media",
      origen: "Diferentes regiones",
      imagen: "images/Mote_de_Queso.jpg"
    },
    {
      nombre: "Ceviche de Pescado",
      ingredientes: ["pescado blanco", "limón", "cebolla morada", "tomate", "cilantro", "aji"],
      tiempoPreparacion: "30 minutos",
      dificultad: "Fácil",
      origen: "Costa Caribe",
      imagen: "images/Ceviche_de_Pescado.jpg"
    },
    {
      nombre: "Chorizo Antioqueño",
      ingredientes: ["carne de cerdo", "achiote", "comino", "ajo", "cebolla", "pimienta"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Antioquia",
      imagen: "images/Chorizo_Antioqueño.jpg"
    },
    {
      nombre: "Ensalada de Frutas",
      ingredientes: ["frutas variadas", "crema de leche", "lechera", "ron", "azúcar"],
      tiempoPreparacion: "30 minutos",
      dificultad: "Fácil",
      origen: "Diferentes regiones",
      imagen: "images/Ensalada_de_Frutas.jpg"
    },
    {
      nombre: "Chorizo Costeño",
      ingredientes: ["carne de cerdo", "achiote", "comino", "ajo", "cebolla", "pimienta"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Costa Caribe",
      imagen: "images/Chorizo_Costeño.jpg"
    },
    {
      nombre: "Arepa de Huevo",
      ingredientes: ["masa de arepa", "huevo"],
      tiempoPreparacion: "45 minutos",
      dificultad: "Fácil",
      origen: "Costa Caribe",
      imagen: "images/Arepa_de_Huevo.jpg"
    },
    {
      nombre: "Lechona Costeña",
      ingredientes: ["cerdo", "arroz", "huevo", "cebolla", "tomate", "arvejas", "cilantro"],
      tiempoPreparacion: "4 horas",
      dificultad: "Alta",
      origen: "Costa Caribe",
      imagen: "images/Lechona_Costeña.jpg"
    },
    {
      nombre: "Churros Colombianos",
      ingredientes: ["harina de trigo", "azúcar", "canela", "leche", "aceite"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Diferentes regiones",
      imagen: "images/Churros_Colombianos.jpg"
    },
    {
      nombre: "Aguapanela con Queso",
      ingredientes: ["aguapanela", "queso costeño"],
      tiempoPreparacion: "30 minutos",
      dificultad: "Fácil",
      origen: "Diferentes regiones",
      imagen: "images/Aguapanela_con_Queso.jpg"
    },
    {
      nombre: "Buñuelos Colombianos",
      ingredientes: ["harina de maíz", "queso fresco", "huevos", "azúcar"],
      tiempoPreparacion: "1 hora",
      dificultad: "Fácil",
      origen: "Diferentes regiones",
      imagen: "images/Buñuelos_Colombianos.jpg"
    },
    {
      nombre: "Chorizo Santarrosano",
      ingredientes: ["carne de cerdo", "achiote", "comino", "ajo", "cebolla", "pimienta"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Santander",
      imagen: "images/Chorizo_Santarrosano.jpg"
    },
    {
      nombre: "Pernil al Horno",
      ingredientes: ["pierna de cerdo", "limón", "ajo", "cebolla", "pimienta", "sal", "azúcar morena", "jugo de naranja"],
      tiempoPreparacion: "3 horas",
      dificultad: "Media",
      origen: "Diferentes regiones",
      imagen: "images/Pernil_al_Horno.jpg"
    },
    {
      nombre: "Empanadas de Pipián",
      ingredientes: ["harina de maíz", "pipián", "agua", "sal", "aceite"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Diferentes regiones",
      imagen: "images/Empanadas_de_Pipián.jpg"
    },
    {
      nombre: "Carnitas de Cerdo",
      ingredientes: ["carne de cerdo", "naranja", "limón", "sal", "pimienta", "comino", "aceite"],
      tiempoPreparacion: "2 horas",
      dificultad: "Media",
      origen: "Diferentes regiones",
      imagen: "images/Carnitas_de_Cerdo.jpg"
    },
    {
      nombre: "Pandebono",
      ingredientes: ["harina de yuca", "almidón de maíz", "queso costeño", "huevos", "azúcar", "manteca"],
      tiempoPreparacion: "45 minutos",
      dificultad: "Fácil",
      origen: "Diferentes regiones",
      imagen: "images/Pandebono.jpg"
    },
    {
      nombre: "Arroz con Pollo",
      ingredientes: ["arroz", "pollo", "cebolla", "pimentón", "tomate", "cilantro", "ajo", "comino"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Diferentes regiones",
      imagen: "images/Arroz_con_Pollo.jpg"
    },
    {
      nombre: "Changua con Huevo",
      ingredientes: ["leche", "huevos", "cilantro", "cebolla", "caldo de pollo"],
      tiempoPreparacion: "30 minutos",
      dificultad: "Fácil",
      origen: "Bogotá D.C.",
      imagen: "images/Changua_con_Huevo.jpg"
    },
    {
      nombre: "Pescado a la Llanera",
      ingredientes: ["pescado", "yuca", "plátano", "tomate", "cebolla", "ajo", "pimentón"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Llanos Orientales",
      imagen: "images/Pescado_a_la_Llanera.jpg"
    },
    {
      nombre: "Chocoramo",
      ingredientes: ["harina de trigo", "cacao", "leche", "azúcar", "manteca", "mermelada"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Antioquia",
      imagen: "images/Chocoramo.jpg"
    },
    {
      nombre: "Papa Rellena",
      ingredientes: ["papas", "carne molida", "cebolla", "aji", "comino", "huevos", "harina de trigo"],
      tiempoPreparacion: "1 hora",
      dificultad: "Media",
      origen: "Diferentes regiones",
      imagen: "images/Papa_Rellena.jpg"
    },
    {
      nombre: "Lechona Tachirense",
      ingredientes: ["cerdo", "arroz", "huevo", "cebolla", "tomate", "arvejas", "cilantro"],
      tiempoPreparacion: "4 horas",
      dificultad: "Alta",
      origen: "Táchira",
      imagen: "images/Lechona_Tachirense.jpg"
    }
  ];
  
  