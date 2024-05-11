const recetasColombianas = [
  {
    nombre: "Bandeja Paisa",
    ingredientes: ["carne de cerdo", "carne de res", "chicharrón", "arroz", "frijoles", "plátano maduro", "huevo frito", "aguacate", "arepa"],
    tiempoPreparacion: "2 horas",
    dificultad: "Media",
    origen: "Antioquia"
  },
  {
    nombre: "Ajiaco Santafereño",
    ingredientes: ["pollo", "papa criolla", "mazorca", "papa blanca", "guascas", "crema de leche", "alcaparras"],
    tiempoPreparacion: "2 horas",
    dificultad: "Media",
    origen: "Bogotá D.C."
  },
  {
    nombre: "Sancocho Valluno",
    ingredientes: ["pollo", "costilla de cerdo", "papa criolla", "mazorca", "plátano", "yuka", "cilantro", "hogao"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Valle del Cauca"
  },
  {
    nombre: "Arepa de Choclo",
    ingredientes: ["choclo", "queso fresco", "mantequilla", "azúcar", "sal"],
    tiempoPreparacion: "45 minutos",
    dificultad: "Fácil",
    origen: "Cundinamarca"
  },
  {
    nombre: "Fritanga Costeña",
    ingredientes: ["butifarra", "chorizo", "chicharrón", "patacón", "yuca", "arepa", "limón"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Costa Caribe"
  },
  {
    nombre: "Lechona Tolimense",
    ingredientes: ["cerdo", "arroz", "huevo", "cebolla", "tomate", "arvejas", "cilantro"],
    tiempoPreparacion: "4 horas",
    dificultad: "Alta",
    origen: "Tolima"
  },
  {
    nombre: "Mondongo Antioqueño",
    ingredientes: ["mondongo", "pata de cerdo", "maíz", "yuca", "papa", "cilantro", "cebolla"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Antioquia"
  },
  {
    nombre: "Cazuela de Mariscos",
    ingredientes: ["camarones", "pescado", "calamares", "pulpo", "langostinos", "leche de coco", "pimentón", "ajo"],
    tiempoPreparacion: "1 hora 30 minutos",
    dificultad: "Media",
    origen: "Costa Caribe"
  },
  {
    nombre: "Tamales Tolimenses",
    ingredientes: ["maíz", "pollo", "cerdo", "arvejas", "zanahoria", "cebolla larga", "huevo", "hojas de plátano"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Tolima"
  },
  {
    nombre: "Frijoles Antioqueños",
    ingredientes: ["frijoles", "costilla de cerdo", "chorizo", "tocineta", "plátano maduro", "hogao", "aguacate"],
    tiempoPreparacion: "2 horas",
    dificultad: "Media",
    origen: "Antioquia"
  },
  {
    nombre: "Tamal Valluno",
    ingredientes: ["maíz", "pollo", "carne de cerdo", "arvejas", "zanahoria", "cebolla larga", "huevo", "hojas de plátano"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Valle del Cauca"
  },
  {
    nombre: "Sobrebarriga al Horno",
    ingredientes: ["sobrebarriga", "cebolla", "tomate", "zanahoria", "papa", "cerveza", "mostaza"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Cundinamarca"
  },
  {
    nombre: "Patacón Pisao",
    ingredientes: ["plátano verde", "carne desmechada", "hogao", "aguacate", "queso"],
    tiempoPreparacion: "1 hora",
    dificultad: "Fácil",
    origen: "Costa Caribe"
  },
  {
    nombre: "Ceviche de Camarón",
    ingredientes: ["camarones", "limón", "cebolla morada", "tomate", "cilantro", "ají"],
    tiempoPreparacion: "30 minutos",
    dificultad: "Fácil",
    origen: "Costa Caribe"
  },
  {
    nombre: "Pescado Frito",
    ingredientes: ["pescado fresco", "limón", "ajo", "cebolla", "cilantro", "yuca", "patacón"],
    tiempoPreparacion: "45 minutos",
    dificultad: "Fácil",
    origen: "Costa Caribe"
  },
  {
    nombre: "Changua",
    ingredientes: ["leche", "huevos", "cilantro", "cebolla", "caldo de pollo"],
    tiempoPreparacion: "30 minutos",
    dificultad: "Fácil",
    origen: "Bogotá D.C."
  },
  {
    nombre: "Hormigas Culonas",
    ingredientes: ["hormigas culonas", "sal"],
    tiempoPreparacion: "15 minutos",
    dificultad: "Fácil",
    origen: "Santander"
  },
  {
    nombre: "Cayeye",
    ingredientes: ["plátano verde", "queso fresco", "suero costeño", "mantequilla"],
    tiempoPreparacion: "1 hora",
    dificultad: "Fácil",
    origen: "Costa Caribe"
  },
  {
    nombre: "Carimañolas",
    ingredientes: ["yuca", "carne molida", "cebolla", "ajo", "comino", "cilantro"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Costa Caribe"
  },
  {

    nombre: "Sopa de Mondongo",
    ingredientes: ["mondongo", "pata de cerdo", "maíz", "yuka", "plátano", "cilantro", "cebolla"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Antioquia"
  },
  {
    nombre: "Picada Colombiana",
    ingredientes: ["chicharrón", "chorizo", "butifarra", "morcilla", "yuca", "papa criolla", "arepa", "limón"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Aguardiente Antioqueño",
    ingredientes: ["aguardiente antioqueño"],
    tiempoPreparacion: "N/A",
    dificultad: "Fácil",
    origen: "Antioquia"
  },
  {
    nombre: "Arroz con Coco",
    ingredientes: ["arroz", "coco rallado", "pasas", "azúcar", "canela"],
    tiempoPreparacion: "45 minutos",
    dificultad: "Fácil",
    origen: "Costa Caribe"
  },
  {
    nombre: "Mazorca Asada",
    ingredientes: ["mazorca", "sal", "limón", "mayonesa", "queso rallado"],
    tiempoPreparacion: "30 minutos",
    dificultad: "Fácil",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Lechona Tolimense",
    ingredientes: ["cerdo", "arroz", "huevo", "cebolla", "tomate", "arvejas", "cilantro"],
    tiempoPreparacion: "4 horas",
    dificultad: "Alta",
    origen: "Tolima"
  },
  {
    nombre: "Chuzo Antioqueño",
    ingredientes: ["carne de res", "chorizo", "papa", "cebolla", "tomate", "limón"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Antioquia"
  },
  {
    nombre: "Empanadas Colombianas",
    ingredientes: ["harina de maíz", "carne molida", "papa", "cebolla", "aji", "comino", "huevo"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Torta de Choclo",
    ingredientes: ["choclo", "queso fresco", "huevo", "crema de leche", "azúcar"],
    tiempoPreparacion: "1 hora",
    dificultad: "Fácil",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Chicharrón",
    ingredientes: ["tocino", "limón", "sal", "aji"],
    tiempoPreparacion: "2 horas",
    dificultad: "Media",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Patacones",
    ingredientes: ["plátano verde", "aceite", "sal"],
    tiempoPreparacion: "30 minutos",
    dificultad: "Fácil",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Cazuela de Frijoles",
    ingredientes: ["frijoles", "carne de cerdo", "chorizo", "tomate", "cebolla", "ajo", "cilantro"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Antioquia"
  },
  {
    nombre: "Arroz Atollado",
    ingredientes: ["arroz", "pollo", "chicharrón", "plátano maduro", "cilantro", "cebolla", "aji"],
    tiempoPreparacion: "2 horas",
    dificultad: "Media",
    origen: "Valle del Cauca"
  },
  {
    nombre: "Salpicón de Frutas",
    ingredientes: ["frutas variadas", "leche condensada", "jugo de naranja", "ron", "helado de vainilla"],
    tiempoPreparacion: "30 minutos",
    dificultad: "Fácil",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Mote de Queso",
    ingredientes: ["maíz", "queso fresco", "leche", "azúcar", "canela"],
    tiempoPreparacion: "2 horas",
    dificultad: "Media",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Ceviche de Pescado",
    ingredientes: ["pescado blanco", "limón", "cebolla morada", "tomate", "cilantro", "aji"],
    tiempoPreparacion: "30 minutos",
    dificultad: "Fácil",
    origen: "Costa Caribe"
  },
  {
    nombre: "Chorizo Antioqueño",
    ingredientes: ["carne de cerdo", "achiote", "comino", "ajo", "cebolla", "pimienta"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Antioquia"
  },
  {
    nombre: "Ensalada de Frutas",
    ingredientes: ["frutas variadas", "crema de leche", "lechera", "ron", "azúcar"],
    tiempoPreparacion: "30 minutos",
    dificultad: "Fácil",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Chorizo Costeño",
    ingredientes: ["carne de cerdo", "achiote", "comino", "ajo", "cebolla", "pimienta"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Costa Caribe"
  },
  {
    nombre: "Arepa de Huevo",
    ingredientes: ["masa de arepa", "huevo"],
    tiempoPreparacion: "45 minutos",
    dificultad: "Fácil",
    origen: "Costa Caribe"
  },
  {
    nombre: "Lechona Costeña",
    ingredientes: ["cerdo", "arroz", "huevo", "cebolla", "tomate", "arvejas", "cilantro"],
    tiempoPreparacion: "4 horas",
    dificultad: "Alta",
    origen: "Costa Caribe"
  },
  {
    nombre: "Churros Colombianos",
    ingredientes: ["harina de trigo", "azúcar", "canela", "leche", "aceite"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Aguapanela con Queso",
    ingredientes: ["aguapanela", "queso costeño"],
    tiempoPreparacion: "30 minutos",
    dificultad: "Fácil",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Buñuelos Colombianos",
    ingredientes: ["harina de maíz", "queso fresco", "huevos", "azúcar"],
    tiempoPreparacion: "1 hora",
    dificultad: "Fácil",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Chorizo Santarrosano",
    ingredientes: ["carne de cerdo", "achiote", "comino", "ajo", "cebolla", "pimienta"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Santander"
  },
  {
    nombre: "Pernil al Horno",
    ingredientes: ["pernil de cerdo", "aji", "comino", "ajo", "cebolla", "pimienta"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Chuletas Vallunas",
    ingredientes: ["chuletas de cerdo", "limón", "cebolla", "tomate", "cilantro", "aji"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Valle del Cauca"
  },
  {
    nombre: "Pernil Costeño",
    ingredientes: ["pernil de cerdo", "aji", "comino", "ajo", "cebolla", "pimienta"],
    tiempoPreparacion: "3 horas",
    dificultad: "Media",
    origen: "Costa Caribe"
  },
  {
    nombre: "Canelazo",
    ingredientes: ["canela", "aguapanela", "aguardiente"],
    tiempoPreparacion: "30 minutos",
    dificultad: "Fácil",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Empanadas de Pipián",
    ingredientes: ["harina de maíz", "pollo", "papas", "arvejas", "cebolla", "aji", "cilantro"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Pescado en Salsa de Coco",
    ingredientes: ["pescado fresco", "leche de coco", "aji", "tomate", "cebolla", "cilantro"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Costa Caribe"
  },
  {
    nombre: "Chuleta Valluna",
    ingredientes: ["chuleta de cerdo", "limón", "aji", "cebolla", "cilantro"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Valle del Cauca"
  },
  {
    nombre: "Arroz con Pollo",
    ingredientes: ["arroz", "pollo", "tomate", "cebolla", "aji", "cilantro"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Sudado de Pollo",
    ingredientes: ["pollo", "tomate", "cebolla", "aji", "cilantro", "papa"],
    tiempoPreparacion: "1 hora",
    dificultad: "Media",
    origen: "Diferentes regiones"
  },
  {
    nombre: "Lechona",
    ingredientes: ["cerdo", "arroz", "huevo", "cebolla", "tomate", "arvejas", "cilantro"],
    tiempoPreparacion: "4 horas",
    dificultad: "Alta",
    origen: "Diferentes regiones"
  }
];
