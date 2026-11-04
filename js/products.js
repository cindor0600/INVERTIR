/*
 * CATÁLOGO DE PRODUCTOS
 * ---------------------------------------------------------
 * Este archivo contiene los datos de ejemplo que aparecen
 * en las tarjetas. Para agregar una máquina, copiá un objeto
 * completo y modificá sus valores.
 *
 * category debe coincidir con una de estas opciones:
 * "refrigeracion", "congelacion", "cocina", "comercio".
 *
 * price es un número sin puntos ni signos. El sitio lo
 * convierte automáticamente al formato de moneda argentina.
 */

const products = [
    {
        id: 1, // Identificador único del producto.
        name: "vitrina refrigerada mostrador ", // Nombre visible en la tarjeta.
        model: "1.70m", // Código/modelo que se puede buscar.
        brand: "San Agustin", // Marca usada para filtrar.
        category: "refrigeracion", // Categoría usada para filtrar.
        type: "Vitrinas", // Texto de categoría que se muestra.
        description: "Mostrador para exhibir mercadería de forma ordenada.", // Descripción breve.
        price: 0, // Precio de ejemplo; reemplazalo por el real.
        tag: "Más consultado", // Etiqueta pequeña de la tarjeta.
        image: "assets/img/vitrina200.jpg" // URL de la imagen.
    },
    {
        id: 2,
        name: "vitrina refrigerada mostrador",
        model: "1.40m",
        brand: "San Agustin",
        category: "refrigeracion",
        type: "Vitrinas",
        description: "Mostrador para exhibir mercadería de forma ordenada..",
        price: 0,
        tag: "Ideal para almacenes",
        image: "assets/img/vitrina170.jpg"
    },
    {
        id: 3,
        name: "Vitrina refrigerada mostrador",
        model: "1.20m",
        brand: "San Agustin",
        category: "refrigeracion",
        type: "Vitrinas",
        description: "Mostrador para exhibir mercadería de forma ordenada.",
        price: 0,
        tag: "Para comercios",
        image: "assets/img/vitrina120.jpg"
    },
    {
        id: 4,
        name: "Cortadora de fiambre ",
        model: "Moretti",
        brand: "Morretti 330",
        category: "comercio",
        type: "Preparación de alimentos",
        description: "Equipo de corte para fiambrerías y locales gastronómicos.",
        price: 0,
        tag: "Uso profesional",
        image: "assets/img/cortadora.jpg"
    },
    {
        id: 5,
        name: "Balanza comercial digital",
        model: "KRETZ AURA",
        brand: "Kretz",
        category: "comercio",
        type: "Balanzas",
        description: "Pesaje práctico para mostradores y comercios minoristas.",
        price: 0,
        tag: "Compacta",
        image: "assets/img/balanzaaura.jpg"
    },
   {
        id: 6,
        name: "Batea ",
        model: "San Agustin 1.20m",
        brand: "San Agustin",
        category: "refrigeracion",
        type: "Preparación de alimentos",
        description: "Equipo de refrigerio para fiambrerías,avicolas y locales gastronómicos.",
        price: 0,
        tag: "Uso profesional",
        image: "assets/img/batea120.jpg"
    },
    {
    id: 7,
    name: "Heladera",
    model: "MT-12",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Refrigeración comercial",
    description: "Heladera comercial para conservación y exhibición de productos.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt12.jpg"
},

{
    id: 8,
    name: "Batea",
    model: "San Agustin 1.40m",
    brand: "San Agustin ",
    category: "refrigeracion",
    type: "Refrigeración comercial",
    description: "Equipo de refrigerio para fiambrerías,avicolas y locales gastronómicos.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/batea140.jpg"
},

    {
    id: 9,
    name: "Heladera exhibidora",
    model: "MT-120",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Heladera exhibidora vertical para comercios.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt120.jpg"
},
{
    id: 10,
    name: "Heladera exhibidora",
    model: "MT-14 NG",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Heladera vertical para conservación y exhibición.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt14ng.jpg"
},
{
    id: 11,
    name: "Heladera exhibidora",
    model: "MT-450",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Equipo vertical para exhibición comercial.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt450.jpg"
},
{
    id: 12,
    name: "Heladera exhibidora",
    model: "MT-17 NG",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Heladera exhibidora vertical de uso comercial.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt17ng.jpg"
},
{
    id: 13,
    name: "Heladera exhibidora",
    model: "MT-17 NG Black",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Heladera exhibidora vertical con terminación negra.",
    price: 0,
    tag: "Diseño Black",
    image: "assets/img/mt17ng-black.jpg"
},
{
    id: 14,
    name: "Heladera exhibidora",
    model: "MT-26",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Equipo de refrigeración para comercios.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt26.jpg"
},
{
    id: 15,
    name: "Heladera exhibidora",
    model: "MT-980",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Heladera exhibidora de gran capacidad.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt980.jpg"
},
{
    id: 16,
    name: "Heladera exhibidora",
    model: "MT-42",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Heladera exhibidora de varias puertas.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt42.jpg"
},
{
    id: 17,
    name: "Heladera exhibidora",
    model: "MT-34 Black",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Heladera exhibidora de diseño negro.",
    price: 0,
    tag: "Diseño Black",
    image: "assets/img/mt34-black.jpg"
},
{
    id: 18,
    name: "Heladera exhibidora",
    model: "FSGEA2PN",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Exhibidora refrigerada para bebidas y productos.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fsgea2pn.jpg"
},
{
    id: 19,
    name: "Heladera exhibidora",
    model: "MT-08",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Heladera vertical compacta para comercios.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt08.jpg"
},
{
    id: 20,
    name: "Heladera exhibidora",
    model: "MT-11",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Equipo vertical de refrigeración comercial.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt11.jpg"
},
{
    id: 21,
    name: "Heladera exhibidora",
    model: "MT-17 CDC",
    brand: "Inelro",
    category: "refrigeracion",
    type: "Heladera exhibidora",
    description: "Heladera exhibidora para conservación comercial.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/mt17-cdc.jpg"
},
{
    id: 22,
    name: "Exhibidora vertical",
    model: "M4300",
    brand: "Briket",
    category: "refrigeracion",
    type: "Exhibidora vertical",
    description: "Exhibidora vertical refrigerada para comercios.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/m4300.jpg"
},
{
    id: 23,
    name: "Exhibidora vertical",
    model: "M5000",
    brand: "Briket",
    category: "refrigeracion",
    type: "Exhibidora vertical",
    description: "Exhibidora vertical para bebidas y mercadería.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/m5000.jpg"
},
{
    id: 24,
    name: "Exhibidora vertical",
    model: "M8000",
    brand: "Briket",
    category: "refrigeracion",
    type: "Exhibidora vertical",
    description: "Exhibidora vertical de gran capacidad.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/m8000.jpg"
},
{
    id: 25,
    name: "Freezer comercial",
    model: "FiH-270 PI PLUS",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer comercial",
    description: "Freezer horizontal para conservación de productos.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih270-piplus.jpg"
},
{
    id: 26,
    name: "Freezer comercial",
    model: "FiH-350 PI PLUS",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer comercial",
    description: "Freezer horizontal de conservación comercial.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih350-piplus.jpg"
},
{
    id: 27,
    name: "Freezer comercial",
    model: "FiH-400 PI PLUS",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer comercial",
    description: "Freezer horizontal para comercios y gastronomía.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih400-piplus.jpg"
},
{
    id: 28,
    name: "Freezer comercial",
    model: "FiH-550 PI PLUS",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer comercial",
    description: "Freezer horizontal de gran capacidad.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih550-piplus.jpg"
},
{
    id: 29,
    name: "Freezer exhibidor",
    model: "FiH-700V",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer exhibidor",
    description: "Freezer horizontal exhibidor para comercios.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih700v.jpg"
},
{
    id: 30,
    name: "Freezer exhibidor",
    model: "EH3300 TVH",
    brand: "Briket",
    category: "congelacion",
    type: "Freezer exhibidor",
    description: "Exhibidor congelador horizontal para mercadería.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/eh3300-tvh.jpg"
},
{
    id: 31,
    name: "Freezer exhibidor",
    model: "EH4500 TVH",
    brand: "Briket",
    category: "congelacion",
    type: "Freezer exhibidor",
    description: "Exhibidor congelador horizontal de gran capacidad.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/eh4500-tvh.jpg"
},
{
    id: 32,
    name: "Freezer horizontal",
    model: "FIH-130",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer horizontal",
    description: "Freezer horizontal compacto para conservación.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih130.jpg"
},
{
    id: 33,
    name: "Freezer horizontal",
    model: "FIH-270",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer horizontal",
    description: "Freezer horizontal para almacenamiento congelado.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih270.jpg"
},
{
    id: 34,
    name: "Freezer horizontal",
    model: "FIH-350",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer horizontal",
    description: "Freezer horizontal de uso comercial.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih350.jpg"
},
{
    id: 35,
    name: "Freezer horizontal",
    model: "FIH-400",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer horizontal",
    description: "Freezer horizontal para comercios.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih400.jpg"
},
{
    id: 36,
    name: "Freezer horizontal",
    model: "FIH-550",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer horizontal",
    description: "Freezer horizontal de gran capacidad.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih550.jpg"
},
{
    id: 37,
    name: "Freezer horizontal",
    model: "FIH-700",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer horizontal",
    description: "Freezer horizontal para uso comercial.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih700.jpg"
},
{
    id: 38,
    name: "Freezer horizontal",
    model: "FIH-1200",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer horizontal",
    description: "Freezer horizontal de gran capacidad.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fih1200.jpg"
},
{
    id: 39,
    name: "Freezer horizontal",
    model: "FR3300",
    brand: "Briket",
    category: "congelacion",
    type: "Freezer horizontal",
    description: "Equipo horizontal para conservación de productos.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fr3300.jpg"
},
{
    id: 40,
    name: "Freezer horizontal",
    model: "FR4500 1P",
    brand: "Briket",
    category: "congelacion",
    type: "Freezer horizontal",
    description: "Freezer horizontal con una puerta.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fr4500-1p.jpg"
},
{
    id: 41,
    name: "Freezer horizontal",
    model: "FR5500",
    brand: "Briket",
    category: "congelacion",
    type: "Freezer horizontal",
    description: "Freezer horizontal para conservación comercial.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/fr5500.jpg"
},
{
    id: 42,
    name: "Freezer vertical",
    model: "BT-17",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer vertical",
    description: "Freezer vertical para almacenamiento congelado.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/bt17.jpg"
},
{
    id: 43,
    name: "Freezer vertical",
    model: "BT-19",
    brand: "Inelro",
    category: "congelacion",
    type: "Freezer vertical",
    description: "Freezer vertical de uso comercial.",
    price: 0,
    tag: "Uso profesional",
    image: "assets/img/bt19.jpg"
},
{
    id: 44,
    name: "Gaveta de dinero",
    model: "Gaveta",
    brand: "Lipari",
    category: "comercio",
    type: "Accesorio comercial",
    description: "Gaveta para organización y manejo de dinero.",
    price: 0,
    tag: "Accesorio",
    image: "assets/img/gaveta.jpg"
},
{
    id: 45,
    name: "Cajon Monedero",
    model: "Cajón monedero",
    brand: "Lipari",
    category: "comercio",
    type: "Accesorio comercial",
    description: "Cajón monedero para organización de efectivo.",
    price: 0,
    tag: "Accesorio",
    image: "assets/img/cajon-monedero.jpg"
},
{
    id: 46,
        name: "Balanza comercial digital",
        model: "KRETZ Novel",
        brand: "Kretz",
        category: "comercio",
        type: "Balanzas",
        description: "Pesaje práctico para mostradores y comercios minoristas.",
        price: 0,
        tag: "Compacta",
        image: "assets/img/balanzanovel.jpg"
},

{
    id: 47,
        name: "Balanza comercial digital",
        model: "KRETZ Lura",
        brand: "Kretz",
        category: "comercio",
        type: "Balanzas",
        description: "Pesaje práctico para mostradores y comercios minoristas.",
        price: 0,
        tag: "Compacta",
        image: "assets/img/balanzalura.jpg"
},

{
    id: 48,
        name: "Balanza comercial digital",
        model: "Market 30",
        brand: "Moretti",
        category: "comercio",
        type: "Balanzas",
        description: "Pesaje práctico para mostradores y comercios minoristas.",
        price: 0,
        tag: "Compacta",
        image: "assets/img/Morettimarket.jpg"
},

{
    id: 49,
        name: "Balanza comercial digital",
        model: "Lap 15",
        brand: "Moretti",
        category: "comercio",
        type: "Balanzas",
        description: "Pesaje práctico para mostradores y comercios minoristas.",
        price: 0,
        tag: "Compacta",
        image: "assets/img/Morettilap.jpg"
},

{
    id: 50,
        name: "Selladora ",
        model: "40 cm",
        brand: "Comercial",
        category: "comercio",
        type: "Selladora",
        description: "Sin descripcion",
        price: 0,
        tag: "Compacta",
        image: "assets/img/selladora.jpg"
},

{
    id: 51,
        name: "Termoselladora ",
        model: "ts3500",
        brand: "Comercial",
        category: "comercio",
        type: "Termoselladora",
        description: "Sin descripcion",
        price: 0,
        tag: "Compacta",
        image: "assets/img/termoselladora.jpg"
},
{
    id: 52,
    name: "Horno pizzero",
    model: "Pizzero 6",
    brand: "Sol Real",
    category: "comercio",
    type: "Horno pizzero",
    description: "Horno pizzero profesional con capacidad para 6 pizzas.",
    capacity: "6 pizzas",
    code: "067",
    tag: "Uso profesional",
    image: "assets/img/pizzero-6.jpg"
},
{
    id: 53,
    name: "Horno pizzero",
    model: "Pizzero 12",
    brand: "Sol Real",
    category: "comercio",
    type: "Horno pizzero",
    description: "Horno pizzero profesional con capacidad para 12 pizzas.",
    capacity: "12 pizzas",
    code: "068V",
    tag: "Uso profesional",
    image: "assets/img/pizzero-12.jpg"
},
{
    id: 54,
    name: "Horno pastelero",
    model: "Pastelero 6",
    brand: "Sol Real",
    category: "comercio",
    type: "Horno pastelero",
    description: "Horno pastelero profesional con capacidad para 6 moldes.",
    capacity: "6 moldes",
    code: "367",
    tag: "Uso profesional",
    image: "assets/img/pastelero-6.jpg"
},
{
    id: 55,
    name: "Horno pastelero",
    model: "Pastelero 12",
    brand: "Sol Real",
    category: "comercio",
    type: "Horno pastelero",
    description: "Horno pastelero profesional con capacidad para 12 moldes.",
    capacity: "12 moldes",
    code: "368",
    tag: "Uso profesional",
    image: "assets/img/pastelero-12.jpg"
},
{
    id: 56,
    name: "Horno pastelero",
    model: "Pastelero 24",
    brand: "Sol Real",
    category: "comercio",
    type: "Horno pastelero",
    description: "Horno pastelero profesional con capacidad para 24 moldes.",
    capacity: "24 moldes",
    code: "470",
    tag: "Uso profesional",
    image: "assets/img/pastelero-24.jpg"
},
{
    id: 57,
    name: "Horno convector",
    model: "Delf 4",
    brand: "Moretti",
    category: "comercio",
    type: "Horno convector",
    description: "Horno convector profesional de cuatro bandejas.",
    capacity: "4 bandejas de 43 x 32 cm",
    code: "Delf-4",
    tag: "Uso profesional",
    image: "assets/img/delf-4.jpg"
},
{
    id: 58,
    name: "Sobadora de mesa",
    model: "Sobadora 400",
    brand: "Fineschi",
    category: "comercio",
    type: "Sobadora",
    description: "Sobadora de mesa para trabajos de amasado y laminado.",
    capacity: "Rodillo de 40 cm",
    code: "SM-400",
    tag: "Uso profesional",
    image: "assets/img/sobadora-400.jpg"
},
{
    id: 59,
    name: "Ralladora de pan",
    model: "Ralladora R120",
    brand: "Fineschi",
    category: "comercio",
    type: "Ralladora de pan",
    description: "Ralladora profesional para procesar hasta 120 kg por hora.",
    capacity: "120 kg por hora",
    code: "R120",
    tag: "Uso profesional",
    image: "assets/img/ralladora-r120.jpg"
},
{
    id: 60,
    name: "Batidora planetaria",
    model: "Mixer 5",
    brand: "Moretti",
    category: "comercio",
    type: "Batidora planetaria",
    description: "Batidora planetaria profesional para preparación gastronómica.",
    capacity: "5 litros",
    code: "Mixer 5N",
    tag: "Uso profesional",
    image: "assets/img/mixer-5.jpg"
},
{
    id: 61,
    name: "Batidora planetaria",
    model: "Mixer 7",
    brand: "Moretti",
    category: "comercio",
    type: "Batidora planetaria",
    description: "Batidora planetaria profesional de 7 litros.",
    capacity: "7 litros",
    code: "Mixer 7",
    tag: "Uso profesional",
    image: "assets/img/mixer-7.jpg"
},
{
    id: 62,
    name: "Licuadora comercial",
    model: "MasterBlend Pro",
    brand: "Moretti",
    category: "comercio",
    type: "Licuadora comercial",
    description: "Licuadora profesional para preparación de bebidas y mezclas.",
    capacity: "2 litros",
    code: "No informado",
    tag: "Uso profesional",
    image: "assets/img/masterblend-pro.jpg"
},
{
    id: 63,
    name: "Vitrina refrigerada",
    model: "Repostera 1,10 m",
    brand: "INB",
    category: "refrigeracion",
    type: "Vitrina refrigerada",
    description: "Vitrina refrigerada para exhibición de productos de pastelería.",
    capacity: "1,10 m",
    code: "No informado",
    tag: "Uso profesional",
    image: "assets/img/repostera-110.jpg"
},

{
    id: 64,
    name: "Freidora a gas",
    model: "Freidora 10 L",
    brand: "Sol Real",
    category: "comercio",
    type: "Freidora",
    description: "Freidora profesional a gas con capacidad de 10 litros.",
    tag: "Uso profesional",
    image: "assets/img/freidora-10l.jpg"
},
{
    id: 65,
    name: "Freidora a gas",
    model: "Freidora 18 L",
    brand: "Sol Real",
    category: "comercio",
    type: "Freidora",
    description: "Freidora profesional a gas con capacidad de 18 litros.",
    tag: "Uso profesional",
    image: "assets/img/freidora-18l.jpg"
},
{
    id: 66,
    name: "Freidora a gas",
    model: "Freidora 33 L",
    brand: "Sol Real",
    category: "comercio",
    type: "Freidora",
    description: "Freidora profesional a gas con capacidad de 33 litros.",
    tag: "Uso profesional",
    image: "assets/img/freidora-33l.jpg"
},
{
    id: 67,
    name: "Freidora a gas",
    model: "Freidora 42 L",
    brand: "Sol Real",
    category: "comercio",
    type: "Freidora",
    description: "Freidora profesional a gas con capacidad de 42 litros.",
    tag: "Uso profesional",
    image: "assets/img/freidora-42l.jpg"
},
{
    id: 68,
    name: "Freidora",
    model: "Fryer 8",
    brand: "Moretti",
    category: "comercio",
    type: "Freidora",
    description: "Freidora profesional de 8 litros para uso gastronómico.",
    tag: "Uso profesional",
    image: "assets/img/fryer-8.jpg"
},
{
    id: 69,
    name: "Freidora doble",
    model: "Fryer 8+8",
    brand: "Moretti",
    category: "comercio",
    type: "Freidora doble",
    description: "Freidora profesional doble con dos cubas de 8 litros.",
    tag: "Uso profesional",
    image: "assets/img/fryer-8-8.jpg"
},
{
    id: 70,
    name: "Panchera a gas",
    model: "Panchera grande",
    brand: "Sol Real",
    category: "comercio",
    type: "Panchera",
    description: "Panchera a gas para preparación de alimentos.",
    tag: "Uso profesional",
    image: "assets/img/panchera-grande.jpg"
},
{
    id: 71,
    name: "Carlitero",
    model: "Carlitero doble",
    brand: "Sol Real",
    category: "comercio",
    type: "Carlitero",
    description: "Carlitero doble para preparación y calentamiento de alimentos.",
    tag: "Uso profesional",
    image: "assets/img/carlitero-doble.jpg"
},
{
    id: 72,
    name: "Asador criollo",
    model: "Asador 6 pollos",
    brand: "Sol Real",
    category: "comercio",
    type: "Asador criollo",
    description: "Asador vertical con capacidad para 6 pollos.",
    tag: "Uso profesional",
    image: "assets/img/asador-6-pollos.jpg"
},
{
    id: 73,
    name: "Asador criollo",
    model: "Asador 12 pollos",
    brand: "Sol Real",
    category: "comercio",
    type: "Asador criollo",
    description: "Asador vertical con capacidad para 12 pollos.",
    tag: "Uso profesional",
    image: "assets/img/asador-12-pollos.jpg"
},
{
    id: 74,
    name: "Luncheonette",
    model: "Luncheonette 8",
    brand: "Sol Real",
    category: "comercio",
    type: "Luncheonette",
    description: "Equipo gastronómico profesional de 8 bandejas.",
    tag: "Uso profesional",
    image: "assets/img/lunchonette-8.jpg"
},
{
    id: 75,
    name: "Cocina multifunción",
    model: "Multifunción 2",
    brand: "Sol Real",
    category: "comercio",
    type: "Cocina multifunción",
    description: "Cocina multifunción profesional de dos hornallas.",
    tag: "Uso profesional",
    image: "assets/img/multifuncion-2.jpg"
},
{
    id: 76,
    name: "Cocina multifunción",
    model: "Multifunción 4",
    brand: "Sol Real",
    category: "comercio",
    type: "Cocina multifunción",
    description: "Cocina multifunción profesional de cuatro hornallas.",
    tag: "Uso profesional",
    image: "assets/img/multifuncion-4.jpg"
},
{
    id: 77,
    name: "Lomitero",
    model: "Súper lomitero",
    brand: "Sol Real",
    category: "comercio",
    type: "Lomitero",
    description: "Plancha profesional para preparación de lomitos y comidas rápidas.",
    tag: "Uso profesional",
    image: "assets/img/super-lomitero.jpg"
},
{
    id: 78,
    name: "Amasadora de mesa",
    model: "Amasadora 20 L",
    brand: "Fineschi",
    category: "comercio",
    type: "Amasadora",
    description: "Amasadora profesional de mesa con capacidad de 20 litros.",
    tag: "Uso profesional",
    image: "assets/img/amasadora-20l.jpg"
},
{
    id: 79,
    name: "Mesa de trabajo inoxidable",
    model: "Mesa 150",
    brand: "Sol Real",
    category: "comercio",
    type: "Mesa de trabajo",
    description: "Mesa de trabajo de acero inoxidable de 150 cm.",
    tag: "Uso profesional",
    image: "assets/img/mesa-150.jpg"
},
{
    id: 80,
    name: "Mesa de trabajo inoxidable",
    model: "Mesa 190",
    brand: "Sol Real",
    category: "comercio",
    type: "Mesa de trabajo",
    description: "Mesa de trabajo de acero inoxidable de 190 cm.",
    tag: "Uso profesional",
    image: "assets/img/mesa-190.jpg"
},

{
    id: 81,
    name: "Picadora de carne",
    model: "N° 32",
    brand: "Fineschi",
    category: "comercio",
    type: "Picadora",
    description: "Picadora de carne numero 32 con motor 1,5 hp.",
    tag: "Uso profesional",
    image: "assets/img/picadora.jpg"
},

{
    id: 82,
    name: "Embutidora manual",
    model: "15 litros",
    brand: "Fineschi",
    category: "comercio",
    type: "Embutidora",
    description: "Diseñada para satisfacer las necesidades de carnicerías, frigoríficos y establecimientos gastronómicos que requieren un alto rendimiento y durabilidad.",
    tag: "Uso profesional",
    image: "assets/img/embutidora.jpg"
},

{
    id: 83,
    name: "Sierra",
    model: "350 2hp",
    brand: "Elephant",
    category: "comercio",
    type: "Sierra",
    description: "Equipo profesional diseñado para el corte preciso de carne en carnicerías, supermercados y cocinas gastronómicas.",
    tag: "Uso profesional",
    image: "assets/img/sierra.jpg"
}

];
