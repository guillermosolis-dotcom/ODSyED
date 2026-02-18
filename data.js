// ============================================================
// BASE DE DATOS: cada entrada tiene nombre, subsistemas[] y datos
// Los subsistemas estan separados del nombre para facilitar la busqueda
// Valores validos: "DGETI", "DGETAyCM", "CECyTE", "CONALEP"
// ============================================================
const db = [
    {
        nombre: "Laboratorio Clinico",
        subsistemas: ["DGETI", "CECyTE"],
        s: "621511",
        sec: "Laboratorios medicos y de diagnostico",
        m: "Modulo III: Realiza analisis hematologicos de serie roja",
        a: [
            "Gestion estricta de Residuos Peligrosos Biologico-Infecciosos (RPBI) para prevenir la contaminacion del suelo y mantos freaticos.",
            "Uso eficiente de reactivos mediante tecnicas de microescala para reducir la generacion de desechos quimicos.",
            "Promocion de la cultura de prevencion de enfermedades cronicas para reducir la carga sobre los servicios de salud publica.",
            "Implementacion de protocolos de bioseguridad que garanticen la salud y el bienestar del personal y los pacientes.",
            "Digitalizacion de resultados clinicos para eliminar el uso de papel y plasticos en la entrega de diagnosticos."
        ],
        h: "Salud Publica y Gestion de Residuos",
        o1: "3", o1_t: "Salud y Bienestar",
        o2: "6", o2_t: "Agua Limpia y Saneamiento",
        i: "Kilogramos de RPBI gestionados correctamente",
        d: "El laboratorio clinico es la primera linea de defensa para el bienestar social y la proteccion ambiental contra patogenos.",
        orientacion: "Instructor(a): Verifique que el alumno domine la NOM-087-ECOL-SSA1 sobre el manejo de residuos infecciosos."
    },
    {
        nombre: "Electronica",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "334410",
        sec: "Fabricacion de componentes electronicos",
        m: "Modulo II: Implementa sistemas de control de baja potencia",
        a: [
            "Diseno de circuitos electronicos de bajo consumo (Low Power Design) para extender la vida de las baterias.",
            "Implementacion de sensores de luz y movimiento para la automatizacion de edificios inteligentes y ahorro energetico.",
            "Reparacion y mantenimiento de tarjetas electronicas para combatir la obsolescencia programada y reducir la basura electronica.",
            "Uso de soldadura libre de plomo para reducir el impacto toxico de los componentes al final de su vida util.",
            "Desarrollo de prototipos de monitoreo ambiental (calidad del aire/agua) basados en hardware abierto."
        ],
        h: "Eco-diseno y Eficiencia Energetica",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "7", o2_t: "Energia Asequible y No Contaminante",
        i: "Reduccion de consumo en standby de los dispositivos",
        d: "La electronica es el cerebro de la transicion energetica; sin control inteligente no hay ahorro de recursos.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para proponer mejoras en la eficiencia de una fuente de alimentacion."
    },
    {
        nombre: "Diseno Arquitectonico",
        subsistemas: ["DGETI"],
        s: "541310",
        sec: "Servicios de arquitectura",
        m: "Modulo III: Realiza planos arquitectonicos y constructivos con software",
        a: [
            "Integracion de sistemas de captacion de agua pluvial y tratamiento de aguas grises en el diseno de viviendas.",
            "Uso de software para el calculo de asoleamiento y ventilacion natural, reduciendo la necesidad de aire acondicionado.",
            "Seleccion de materiales de construccion locales y sustentables para reducir la huella de carbono por transporte.",
            "Diseno de espacios bajo principios de accesibilidad universal para garantizar la inclusion de personas con discapacidad.",
            "Planificacion de areas verdes y superficies permeables para mitigar el efecto de isla de calor urbana."
        ],
        h: "Urbanismo Sostenible y Construccion Verde",
        o1: "11", o1_t: "Ciudades y Comunidades Sostenibles",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Metros cuadrados de diseno con criterios bio-climaticos",
        d: "La arquitectura del futuro debe construir habitats que regeneren el entorno en lugar de solo consumirlo.",
        orientacion: "Instructor(a): Verifique que los planos incluyan detalles tecnicos de ecotecnias o accesibilidad universal."
    },
    {
        nombre: "Construccion",
        subsistemas: ["CECyTE", "CONALEP"],
        s: "541310",
        sec: "Servicios de arquitectura",
        m: "Modulo III: Realiza planos arquitectonicos y constructivos con software",
        a: [
            "Integracion de sistemas de captacion de agua pluvial y tratamiento de aguas grises en el diseno de viviendas.",
            "Uso de software para el calculo de asoleamiento y ventilacion natural, reduciendo la necesidad de aire acondicionado.",
            "Seleccion de materiales de construccion locales y sustentables para reducir la huella de carbono por transporte.",
            "Diseno de espacios bajo principios de accesibilidad universal para garantizar la inclusion de personas con discapacidad.",
            "Planificacion de areas verdes y superficies permeables para mitigar el efecto de isla de calor urbana."
        ],
        h: "Urbanismo Sostenible y Construccion Verde",
        o1: "11", o1_t: "Ciudades y Comunidades Sostenibles",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Metros cuadrados de diseno con criterios bio-climaticos",
        d: "La arquitectura del futuro debe construir habitats que regeneren el entorno en lugar de solo consumirlo.",
        orientacion: "Instructor(a): Verifique que los planos incluyan detalles tecnicos de ecotecnias o accesibilidad universal."
    },
    {
        nombre: "Puericultura",
        subsistemas: ["DGETI", "CECyTE"],
        s: "624110",
        sec: "Servicios de guarderias",
        m: "Modulo II: Proporciona cuidados basicos al lactante, maternal y preescolar",
        a: [
            "Implementacion de programas de estimulacion temprana inclusivos para ninos con barreras para el aprendizaje y la participacion.",
            "Promocion de habitos de nutricion saludable y lactancia materna para combatir la desnutricion y obesidad infantil.",
            "Educacion preventiva en higiene y salud para reducir la incidencia de enfermedades infecciosas en la infancia.",
            "Fomento de la equidad de genero desde la primera infancia mediante actividades pedagogicas no sexistas.",
            "Gestion segura de espacios ludicos para garantizar el derecho al juego y un desarrollo emocional sano."
        ],
        h: "Desarrollo Integral de la Infancia",
        o1: "3", o1_t: "Salud y Bienestar",
        o2: "4", o2_t: "Educacion de Calidad",
        i: "Indice de cumplimiento de estandares de cuidado y salud infantil",
        d: "El cuidado tecnico de la primera infancia asegura las bases de una sociedad sana, equitativa y con igualdad de oportunidades.",
        orientacion: "Instructor(a): Verifique que el alumno disene actividades que fomenten la autonomia y el respeto a la diversidad desde la etapa maternal."
    },
    {
        nombre: "Trabajo Social",
        subsistemas: ["DGETI", "CECyTE"],
        s: "624199",
        sec: "Otros servicios de asistencia social",
        m: "Modulo III: Aplica la metodologia del trabajo social en la atencion individualizada",
        a: [
            "Gestion de redes de apoyo para personas en situacion de vulnerabilidad, garantizando su acceso a derechos basicos.",
            "Implementacion de protocolos de intervencion con perspectiva de genero para victimas de violencia intrafamiliar.",
            "Orientacion a familias para la obtencion de servicios de salud publica y seguridad social.",
            "Mediacion en conflictos comunitarios para fortalecer el tejido social y la cultura de la paz.",
            "Deteccion oportuna de casos de exclusion social para canalizarlos a programas de empoderamiento economico."
        ],
        h: "Justicia Social y Bienestar Comunitario",
        o1: "1", o1_t: "Fin de la Pobreza",
        o2: "10", o2_t: "Reduccion de las Desigualdades",
        i: "Numero de intervenciones sociales con seguimiento exitoso",
        d: "El trabajo social es la disciplina tecnica que traduce las politicas publicas en bienestar real y justicia para las personas.",
        orientacion: "Instructor(a): Oriente al alumno en la importancia de la etica y la confidencialidad en el manejo de casos de vulnerabilidad social."
    },
    {
        nombre: "Gericultura",
        subsistemas: ["DGETI", "CECyTE"],
        s: "624120",
        sec: "Servicios de centros de atencion para personas con discapacidad y ancianos",
        m: "Modulo IV: Auxilia al adulto mayor en las actividades de la vida diaria",
        a: [
            "Diseno de planes de activacion fisica y mental para promover el envejecimiento activo y saludable.",
            "Implementacion de tecnicas de movilizacion segura que prevengan lesiones y mejoren la calidad de vida del adulto mayor.",
            "Acompanamiento emocional y social para combatir el aislamiento y la depresion en la tercera edad.",
            "Administracion responsable de cuidados paliativos y preventivos bajo supervision medica.",
            "Promocion de entornos accesibles y seguros que respeten la dignidad y autonomia de las personas mayores."
        ],
        h: "Cuidado Digno y Envejecimiento Saludable",
        o1: "3", o1_t: "Salud y Bienestar",
        o2: "10", o2_t: "Reduccion de las Desigualdades",
        i: "Mejora en el indice de autonomia funcional de las personas atendidas",
        d: "La gericultura tecnica responde al reto demografico, asegurando que el envejecimiento sea una etapa de vida digna y protegida.",
        orientacion: "Instructor(a): Evalue la sensibilidad y paciencia del alumno, asi como su dominio de las tecnicas de primeros auxilios geriatricos."
    },
    {
        nombre: "Mantenimiento Automotriz",
        subsistemas: ["DGETI", "CECyTE"],
        s: "811111",
        sec: "Reparacion y mantenimiento de automoviles y camiones",
        m: "Modulo IV: Diagnostica el estado de los sistemas de encendido y control de emisiones",
        a: [
            "Afinacion tecnica de motores para reducir la emision de gases contaminantes (CO2 y NOx) a la atmosfera.",
            "Diagnostico electronico del sistema de inyeccion para optimizar el rendimiento de combustible.",
            "Gestion responsable de aceites usados, filtros y baterias para evitar la contaminacion de suelos.",
            "Mantenimiento de sistemas de frenado regenerativo en vehiculos hibridos y electricos.",
            "Implementacion de protocolos de seguridad en el taller para prevenir riesgos laborales y accidentes."
        ],
        h: "Movilidad Sostenible y Eficiencia Energetica",
        o1: "13", o1_t: "Accion por el Clima",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Reduccion de emisiones verificada post-mantenimiento",
        d: "El tecnico automotriz es clave para asegurar una movilidad que respete los limites ambientales y proteja la salud urbana.",
        orientacion: "Instructor(a): Verifique que el alumno utilice correctamente el analizador de gases y comprenda el impacto de una mala combustion en el ODS 13."
    },
    {
        nombre: "Autrotronica",
        subsistemas: ["CONALEP"],
        s: "811111",
        sec: "Reparacion y mantenimiento de automoviles y camiones",
        m: "Modulo IV: Diagnostica el estado de los sistemas de encendido y control de emisiones",
        a: [
            "Afinacion tecnica de motores para reducir la emision de gases contaminantes (CO2 y NOx) a la atmosfera.",
            "Diagnostico electronico del sistema de inyeccion para optimizar el rendimiento de combustible.",
            "Gestion responsable de aceites usados, filtros y baterias para evitar la contaminacion de suelos.",
            "Mantenimiento de sistemas de frenado regenerativo en vehiculos hibridos y electricos.",
            "Implementacion de protocolos de seguridad en el taller para prevenir riesgos laborales y accidentes."
        ],
        h: "Movilidad Sostenible y Eficiencia Energetica",
        o1: "13", o1_t: "Accion por el Clima",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Reduccion de emisiones verificada post-mantenimiento",
        d: "El tecnico automotriz es clave para asegurar una movilidad que respete los limites ambientales y proteja la salud urbana.",
        orientacion: "Instructor(a): Verifique que el alumno utilice correctamente el analizador de gases y comprenda el impacto de una mala combustion en el ODS 13."
    },
    {
        nombre: "Transformacion de Plasticos",
        subsistemas: ["DGETI", "CONALEP"],
        s: "326199",
        sec: "Fabricacion de otros productos de plastico",
        m: "Modulo III: Controla la transformacion de plasticos por inyeccion",
        a: [
            "Configuracion de parametros de maquina para minimizar el consumo de energia electrica por ciclo de produccion.",
            "Integracion de material recuperado (post-industrial) en el proceso de inyeccion para fomentar la economia circular.",
            "Optimizacion del diseno de moldes para reducir el desperdicio de material (coladas y rebabas).",
            "Sustitucion progresiva de polimeros virgenes por bioplasticos o materiales compostables.",
            "Implementacion de sistemas de enfriamiento de agua en circuito cerrado para evitar el desperdicio del recurso hidrico."
        ],
        h: "Economia Circular y Manufactura Responsable",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Porcentaje de material reciclado integrado en la produccion",
        d: "La industria del plastico debe transformarse hacia modelos de ciclo cerrado donde el residuo se convierta en recurso.",
        orientacion: "Instructor(a): Fomente en el alumno la busqueda de soluciones para reducir el 'scrap' (desperdicio) en los arranques de maquina."
    },
    {
        nombre: "Maquinas Herramienta",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "332710",
        sec: "Maquinado de piezas industriales y fabricacion de tornillos",
        m: "Modulo IV: Maquina piezas por Control Numerico Computarizado (CNC)",
        a: [
            "Programacion eficiente de trayectorias de corte para reducir el tiempo de maquinado y el gasto energetico.",
            "Uso de fluidos de corte (refrigerantes) biodegradables y sistemas de filtracion para prolongar su vida util.",
            "Gestion y clasificacion de virutas metalicas para su reintegracion en la cadena de reciclaje siderurgico.",
            "Aplicacion de metrologia de alta precision para evitar el re-trabajo y el desperdicio de piezas defectuosas.",
            "Mantenimiento predictivo de los husillos y guias para asegurar la maxima eficiencia operativa del equipo."
        ],
        h: "Manufactura de Alta Precision y Cero Desperdicio",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Reduccion de piezas rechazadas (merma cero)",
        d: "La precision tecnica en el maquinado es sinonimo de eficiencia; producir bien a la primera es una accion sostenible.",
        orientacion: "Instructor(a): Oriente al alumno en el calculo de avances y velocidades para maximizar la vida util de las herramientas de corte."
    },
    {
        nombre: "Supervision de Obras de Construccion",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "236111",
        sec: "Edificacion de vivienda unifamiliar",
        m: "Modulo III: Supervisa obras de construccion de acuerdo a los planos y especificaciones",
        a: [
            "Supervision del uso de materiales con baja huella de carbono y procesos constructivos que minimicen el desperdicio en obra.",
            "Implementacion de medidas de seguridad y salud en el trabajo para prevenir riesgos de caida y accidentes laborales.",
            "Verificacion de la correcta gestion y disposicion de residuos de construccion y demolicion (RCD).",
            "Monitoreo del uso eficiente del agua y energia durante la fase de ejecucion de la obra tecnica.",
            "Aseguramiento del cumplimiento de las normas de accesibilidad universal en accesos y circulaciones."
        ],
        h: "Edificacion Segura y Responsable",
        o1: "11", o1_t: "Ciudades y Comunidades Sostenibles",
        o2: "8", o2_t: "Trabajo Decente y Crecimiento Economico",
        i: "Porcentaje de residuos de obra reciclados o reutilizados",
        d: "La construccion tecnica responsable garantiza habitats seguros que respetan tanto al trabajador como al entorno urbano.",
        orientacion: "Instructor(a): Verifique que el alumno sepa interpretar las normas de seguridad e higiene y el manejo de bitacoras de residuos."
    },
    {
        nombre: "Electromecanica Industrial",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "333249",
        sec: "Fabricacion de maquinaria y equipo para otras industrias",
        m: "Modulo II: Mantiene sistemas de transmision de potencia",
        a: [
            "Optimizacion de sistemas de transmision para reducir las perdidas de energia por friccion o desalineacion.",
            "Mantenimiento preventivo de motores electricos para asegurar su operacion en el punto de maxima eficiencia.",
            "Gestion responsable de lubricantes y grasas industriales para evitar derrames y contaminacion del suelo.",
            "Instalacion de variadores de frecuencia para el control de velocidad y ahorro energetico en procesos industriales.",
            "Implementacion de protocolos de bloqueo y etiquetado (LOTO) para garantizar la seguridad del personal de mantenimiento."
        ],
        h: "Eficiencia Operativa y Seguridad Industrial",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "7", o2_t: "Energia Asequible y No Contaminante",
        i: "Reduccion de paros no programados y ahorro energetico",
        d: "El tecnico electromecanico es el guardian de la continuidad operativa bajo estandares de alta eficiencia energetica.",
        orientacion: "Instructor(a): Evalue la destreza del alumno en el diagnostico de fallas que causan consumos electricos anormales."
    },
    {
        nombre: "Preparacion de Alimentos y Bebidas",
        subsistemas: ["DGETI", "DGETAyCM", "CECyTE"],
        s: "722511",
        sec: "Servicios de preparacion de alimentos y bebidas",
        m: "Modulo II: Prepara alimentos de acuerdo al recetario base",
        a: [
            "Aplicacion de la tecnica 'Pequenas Porciones, Gran Valor' para reducir el desperdicio de alimentos en el plato del comensal.",
            "Aprovechamiento de insumos locales y de temporada provenientes de cadenas cortas agropecuarias.",
            "Separacion estricta de residuos organicos para su aprovechamiento en procesos de compostaje o biogas.",
            "Uso eficiente de equipos de refrigeracion y coccion para minimizar el gasto de gas y electricidad.",
            "Gestion responsable de aceites vegetales usados para evitar la contaminacion de mantos freaticos y drenajes."
        ],
        h: "Gastronomia Sostenible y Soberania Alimentaria",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "2", o2_t: "Hambre Cero",
        i: "Kilogramos de residuos organicos recuperados para compostaje",
        d: "La tecnica en alimentos impacta en la reduccion de residuos y fortalece la economia de los productores locales.",
        orientacion: "Instructor(a): Oriente al alumno en la gestion de inventarios 'PEPS' y en la importancia de consumir lo local."
    },
    {
        nombre: "Alimentos y Bebidas",
        subsistemas: ["CONALEP"],
        s: "722511",
        sec: "Servicios de preparacion de alimentos y bebidas",
        m: "Modulo II: Prepara alimentos de acuerdo al recetario base",
        a: [
            "Aplicacion de la tecnica 'Pequenas Porciones, Gran Valor' para reducir el desperdicio de alimentos en el plato del comensal.",
            "Aprovechamiento de insumos locales y de temporada provenientes de cadenas cortas agropecuarias.",
            "Separacion estricta de residuos organicos para su aprovechamiento en procesos de compostaje o biogas.",
            "Uso eficiente de equipos de refrigeracion y coccion para minimizar el gasto de gas y electricidad.",
            "Gestion responsable de aceites vegetales usados para evitar la contaminacion de mantos freaticos y drenajes."
        ],
        h: "Gastronomia Sostenible y Soberania Alimentaria",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "2", o2_t: "Hambre Cero",
        i: "Kilogramos de residuos organicos recuperados para compostaje",
        d: "La tecnica en alimentos impacta en la reduccion de residuos y fortalece la economia de los productores locales.",
        orientacion: "Instructor(a): Oriente al alumno en la gestion de inventarios 'PEPS' y en la importancia de consumir lo local."
    },
    {
        nombre: "Ventas",
        subsistemas: ["DGETI", "CECyTE"],
        s: "461110",
        sec: "Comercio al por mayor de materias primas agropecuarias",
        m: "Modulo IV: Gestiona el proceso de ventas",
        a: [
            "Promocion de productos con certificaciones ambientales y de comercio justo para educar al consumidor.",
            "Optimizacion de los procesos de embalaje para reducir el uso de plasticos y materiales no biodegradables.",
            "Implementacion de estrategias de venta digital para reducir la necesidad de desplazamientos fisicos.",
            "Analisis de la satisfaccion del cliente enfocado en la durabilidad y calidad del producto para evitar el consumo desechable.",
            "Uso de tecnicas de comunicacion etica que eviten el fomento del consumo excesivo o irresponsable."
        ],
        h: "Comercializacion Etica y Consumo Responsable",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "8", o2_t: "Trabajo Decente y Crecimiento Economico",
        i: "Porcentaje de ventas de productos con eco-etiqueta",
        d: "El profesional de ventas es el enlace critico para orientar al mercado hacia productos que respeten el medio ambiente.",
        orientacion: "Instructor(a): Verifique que el alumno proponga argumentos de venta basados en la durabilidad y sostenibilidad del producto."
    },
    {
        nombre: "Comercializacion",
        subsistemas: ["CONALEP"],
        s: "461110",
        sec: "Comercio al por mayor de materias primas agropecuarias",
        m: "Modulo IV: Gestiona el proceso de ventas",
        a: [
            "Promocion de productos con certificaciones ambientales y de comercio justo para educar al consumidor.",
            "Optimizacion de los procesos de embalaje para reducir el uso de plasticos y materiales no biodegradables.",
            "Implementacion de estrategias de venta digital para reducir la necesidad de desplazamientos fisicos.",
            "Analisis de la satisfaccion del cliente enfocado en la durabilidad y calidad del producto para evitar el consumo desechable.",
            "Uso de tecnicas de comunicacion etica que eviten el fomento del consumo excesivo o irresponsable."
        ],
        h: "Comercializacion Etica y Consumo Responsable",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "8", o2_t: "Trabajo Decente y Crecimiento Economico",
        i: "Porcentaje de ventas de productos con eco-etiqueta",
        d: "El profesional de ventas es el enlace critico para orientar al mercado hacia productos que respeten el medio ambiente.",
        orientacion: "Instructor(a): Verifique que el alumno proponga argumentos de venta basados en la durabilidad y sostenibilidad del producto."
    },
    {
        nombre: "Sistemas de Impresion",
        subsistemas: ["DGETI", "CECyTE"],
        s: "323119",
        sec: "Industrias de las artes graficas",
        m: "Modulo III: Produce salidas graficas en diversos sistemas de impresion",
        a: [
            "Uso de tintas con base vegetal y solventes de bajo impacto ambiental para reducir emisiones de COV.",
            "Optimizacion del sustrato (papel/carton) mediante software de imposicion para reducir el sobrante de papel.",
            "Implementacion de protocolos de reciclaje de placas metalicas y residuos quimicos de pre-prensa.",
            "Fomento del uso de papeles certificados FSC o de fibras alternativas para proteger la biodiversidad forestal.",
            "Mantenimiento preventivo de los equipos de impresion para asegurar la maxima eficiencia energetica por tiraje."
        ],
        h: "Comunicacion Grafica Sustentable",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "15", o2_t: "Vida de Ecosistemas Terrestres",
        i: "Porcentaje de reduccion de merma de papel por orden de trabajo",
        d: "La industria grafica moderna debe evolucionar hacia procesos limpios que reduzcan el impacto quimico y forestal.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para proponer el uso de materiales reciclables en proyectos de empaque."
    },
    {
        nombre: "Artes Graficas",
        subsistemas: ["CONALEP"],
        s: "323119",
        sec: "Industrias de las artes graficas",
        m: "Modulo III: Produce salidas graficas en diversos sistemas de impresion",
        a: [
            "Uso de tintas con base vegetal y solventes de bajo impacto ambiental para reducir emisiones de COV.",
            "Optimizacion del sustrato (papel/carton) mediante software de imposicion para reducir el sobrante de papel.",
            "Implementacion de protocolos de reciclaje de placas metalicas y residuos quimicos de pre-prensa.",
            "Fomento del uso de papeles certificados FSC o de fibras alternativas para proteger la biodiversidad forestal.",
            "Mantenimiento preventivo de los equipos de impresion para asegurar la maxima eficiencia energetica por tiraje."
        ],
        h: "Comunicacion Grafica Sustentable",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "15", o2_t: "Vida de Ecosistemas Terrestres",
        i: "Porcentaje de reduccion de merma de papel por orden de trabajo",
        d: "La industria grafica moderna debe evolucionar hacia procesos limpios que reduzcan el impacto quimico y forestal.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para proponer el uso de materiales reciclables en proyectos de empaque."
    },
    {
        nombre: "Acuacultura",
        subsistemas: ["DGETAyCM", "CECyTE"],
        s: "112512",
        sec: "Acuicultura de peces en cuerpos de agua dulce",
        m: "Modulo III: Opera sistemas de cultivo de organismos acuaticos",
        a: [
            "Implementacion de sistemas de recirculacion acuicola (RAS) para minimizar el uso y contaminacion del agua.",
            "Monitoreo de parametros fisico-quimicos para asegurar la salud y bienestar de las especies en cultivo.",
            "Uso de alimentos balanceados con ingredientes sostenibles para reducir la dependencia de harina de pescado silvestre.",
            "Gestion de lodos y residuos organicos para su transformacion en abonos mediante acuaponia.",
            "Prevencion y control biologico de enfermedades para evitar el uso excesivo de antibioticos en el medio acuatico."
        ],
        h: "Acuicultura Sostenible y Salud Azul",
        o1: "14", o1_t: "Vida Submarina",
        o2: "2", o2_t: "Hambre Cero",
        i: "Factor de conversion alimenticia (FCR) optimizado",
        d: "La acuacultura tecnica es la solucion para alimentar a la poblacion sin agotar las poblaciones de peces silvestres.",
        orientacion: "Instructor(a): Verifique que el alumno domine el control de nitritos y amoniaco para prevenir la mortalidad y el desperdicio de recursos."
    },
    {
        nombre: "Pesca Deportiva y de Recreacion",
        subsistemas: ["DGETAyCM"],
        s: "713990",
        sec: "Otros servicios recreativos (Servicios de guias de pesca deportiva)",
        m: "Modulo II: Organiza servicios de pesca deportiva y recreativa",
        a: [
            "Promocion de la tecnica de 'Captura y Libera' (Catch and Release) para preservar las poblaciones de especies de interes deportivo.",
            "Educacion a los usuarios sobre las vedas y tallas minimas para garantizar la reproduccion de las especies marinas.",
            "Gestion responsable de desechos en embarcaciones para evitar el vertido de plasticos y aceites al mar.",
            "Uso de artes de pesca selectivas que minimicen la captura incidental de especies no objetivo.",
            "Capacitacion en seguridad maritima y respeto a las Areas Naturales Protegidas (ANP)."
        ],
        h: "Turismo Nautico Responsable",
        o1: "14", o1_t: "Vida Submarina",
        o2: "8", o2_t: "Trabajo Decente y Crecimiento Economico",
        i: "Tasa de supervivencia de especies liberadas",
        d: "La pesca recreativa tecnica transforma el recurso marino en un motor economico basado en la conservacion, no en la extraccion.",
        orientacion: "Instructor(a): Oriente al alumno en el manejo adecuado de los organismos capturados para reducir el estres post-liberacion."
    },
    {
        nombre: "Navegacion y Pesca",
        subsistemas: ["DGETAyCM"],
        s: "114110",
        sec: "Pesca",
        m: "Modulo IV: Realiza maniobras de captura con diferentes artes de pesca",
        a: [
            "Uso de artes de pesca reglamentadas y dispositivos excluidores para proteger tortugas y mamiferos marinos.",
            "Optimizacion de las rutas de navegacion mediante sistemas GPS para reducir el consumo de combustible de la embarcacion.",
            "Aplicacion de protocolos de manejo a bordo para mantener la frescura del producto y reducir mermas post-captura.",
            "Mantenimiento preventivo de motores marinos para evitar fugas de hidrocarburos al ecosistema oceanico.",
            "Registro riguroso de bitacoras de pesca para contribuir a la transparencia y trazabilidad de los recursos pesqueros."
        ],
        h: "Pesca Responsable y Seguridad Maritima",
        o1: "14", o1_t: "Vida Submarina",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Porcentaje de reduccion de captura incidental",
        d: "La navegacion tecnica permite un aprovechamiento del mar que respeta los ciclos biologicos y la integridad del oceano.",
        orientacion: "Instructor(a): Evalue el conocimiento del alumno sobre las Normas Oficiales Mexicanas de pesca y el uso de equipo de seguridad."
    },
    {
        nombre: "Operacion Portuaria",
        subsistemas: ["DGETAyCM"],
        s: "488310",
        sec: "Servicios relacionados con el transporte por agua",
        m: "Modulo II: Supervisa la carga y descarga de mercancias",
        a: [
            "Optimizacion de la logistica de contenedores para reducir los tiempos de espera de buques y sus emisiones de CO2.",
            "Implementacion de protocolos de seguridad para el manejo de mercancias peligrosas y prevencion de vertidos al mar.",
            "Gestion eficiente del espacio portuario para minimizar el impacto ambiental en las zonas costeras colindantes.",
            "Uso de tecnologias digitales para la trazabilidad de carga, eliminando el uso de documentacion fisica en papel.",
            "Supervision del mantenimiento preventivo de gruas y equipo portuario para maximizar la eficiencia energetica."
        ],
        h: "Logistica Maritima Sostenible",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "14", o2_t: "Vida Submarina",
        i: "Reduccion de huella de carbono por TEU (Twenty-foot Equivalent Unit)",
        d: "La eficiencia tecnica en los puertos es el pilar para un comercio global que respete la integridad de los oceanos.",
        orientacion: "Instructor(a): Verifique que el alumno aplique las normas internacionales (OMI) para la prevencion de la contaminacion por buques."
    },
    {
        nombre: "Administracion de Recursos Humanos",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "561110",
        sec: "Servicios de apoyo a los negocios",
        m: "Modulo IV: Controla los procesos de capacitacion y desarrollo del capital humano",
        a: [
            "Diseno de planes de formacion tecnica que incluyan competencias en sostenibilidad y responsabilidad social.",
            "Implementacion de politicas de igualdad salarial y no discriminacion en los procesos de promocion interna.",
            "Evaluacion de riesgos psicosociales (NOM-035) para garantizar un entorno de trabajo seguro y decente.",
            "Promocion de la diversidad e inclusion de grupos vulnerables en la plantilla laboral de la empresa.",
            "Gestion de programas de bienestar que fomenten el equilibrio entre la vida laboral y familiar."
        ],
        h: "Capital Humano y Trabajo Decente",
        o1: "8", o1_t: "Trabajo Decente y Crecimiento Economico",
        o2: "10", o2_t: "Reduccion de las Desigualdades",
        i: "Indice de satisfaccion laboral y equidad de genero",
        d: "Gestionar el talento con etica es la base para construir organizaciones productivas que no dejen a nadie atras.",
        orientacion: "Instructor(a): Fomente en el alumno el uso de indicadores de inclusion y el analisis de la brecha salarial de genero."
    },
    {
        nombre: "Suelos y Fertilizantes",
        subsistemas: ["DGETAyCM", "CECyTE"],
        s: "115110",
        sec: "Servicios relacionados con la agricultura",
        m: "Modulo III: Realiza analisis fisicos y quimicos de suelos agricolas",
        a: [
            "Determinacion de dosis precisas de fertilizacion para evitar la lixiviacion de nitratos a mantos acuiferos.",
            "Promocion del uso de abonos organicos y mejoradores de suelo para incrementar la captura de carbono.",
            "Implementacion de tecnicas de conservacion de suelos para prevenir la erosion hidrica y eolica.",
            "Analisis de la calidad del agua de riego para evitar la salinizacion de los terrenos productivos.",
            "Uso de biofertilizantes microbianos para restaurar la microbiota y la salud biologica del suelo."
        ],
        h: "Gestion Edafologica y Salud del Suelo",
        o1: "15", o1_t: "Vida de Ecosistemas Terrestres",
        o2: "6", o2_t: "Agua Limpia y Saneamiento",
        i: "Porcentaje de incremento de materia organica en el suelo",
        d: "El manejo tecnico del suelo es la clave para una agricultura regenerativa que garantice alimentos para el futuro.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para interpretar analisis de laboratorio y prescribir fertilizacion responsable."
    },
    {
        nombre: "Refrigeracion y Climatizacion",
        subsistemas: ["DGETI", "DGETAyCM", "CECyTE", "CONALEP"],
        s: "333412",
        sec: "Fabricacion de equipo de refrigeracion industrial y comercial",
        m: "Modulo IV: Mantiene sistemas de refrigeracion industrial",
        a: [
            "Sustitucion de refrigerantes con alto potencial de calentamiento global por alternativas ecologicas y naturales.",
            "Optimizacion de la eficiencia energetica en sistemas de refrigeracion de plantas procesadoras de alimentos.",
            "Recuperacion, reciclaje y regeneracion de gases refrigerantes para evitar su liberacion a la atmosfera.",
            "Implementacion de sistemas de monitoreo remoto para detectar fugas de gas de manera inmediata.",
            "Mantenimiento preventivo a camaras frias para reducir el desperdicio de energia y la perdida de productos perecederos."
        ],
        h: "Gestion Atmosferica y Cadena de Frio",
        o1: "13", o1_t: "Accion por el Clima",
        o2: "7", o2_t: "Energia Asequible y No Contaminante",
        i: "Toneladas de CO2 equivalente evitadas mediante gestion de gases",
        d: "El tecnico en refrigeracion es un guardian de la capa de ozono y un pilar para la seguridad alimentaria nacional.",
        orientacion: "Instructor(a): Verifique el uso obligatorio de la bomba de vacio y la unidad recuperadora durante las practicas de mantenimiento."
    },
    {
        nombre: "Mantenimiento de Motores y Planeadores",
        subsistemas: ["CONALEP", "CECyTE"],
        s: "488110",
        sec: "Servicios relacionados con el transporte aereo",
        m: "Modulo II: Mantiene los sistemas electricos y electronicos de las aeronaves",
        a: [
            "Ejecucion de inspecciones rigurosas para asegurar la maxima eficiencia de combustion en motores aeronauticos.",
            "Gestion estricta de residuos peligrosos (aceites y solventes) segun la normativa aeronautica internacional.",
            "Implementacion de tecnicas de mantenimiento predictivo para extender la vida util de los componentes estructurales.",
            "Uso de materiales compuestos avanzados que reducen el peso de la aeronave y el consumo de combustible.",
            "Optimizacion de los procesos de limpieza de motores para reducir el arrastre aerodinamico y las emisiones."
        ],
        h: "Seguridad Aeronautica y Eficiencia de Combustible",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Reduccion de consumo de turbosina por milla volada mediante mantenimiento optimo",
        d: "La precision en el mantenimiento aeronautico garantiza la seguridad humana y minimiza el impacto ambiental del transporte aereo.",
        orientacion: "Instructor(a): Supervise el manejo de bitacoras de mantenimiento y la correcta disposicion final de lubricantes usados."
    },
    {
        nombre: "Recreaciones Acuaticas",
        subsistemas: ["DGETAyCM"],
        s: "713990",
        sec: "Otros servicios recreativos",
        m: "Modulo III: Conduce actividades de recreacion en el medio acuatico",
        a: [
            "Guiado de actividades turisticas bajo protocolos de 'No Dejar Rastro' en arrecifes y zonas costeras.",
            "Educacion a los turistas sobre la importancia de la conservacion de la biodiversidad marina y el respeto a las vedas.",
            "Gestion de embarcaciones menores con motores de bajas emisiones para actividades de avistamiento y recreacion.",
            "Implementacion de protocolos de seguridad y rescate acuatico para garantizar la integridad del visitante.",
            "Participacion en programas comunitarios de limpieza de playas y monitoreo de la salud de los corales."
        ],
        h: "Turismo Azul y Conservacion Marina",
        o1: "14", o1_t: "Vida Submarina",
        o2: "8", o2_t: "Trabajo Decente y Crecimiento Economico",
        i: "Numero de turistas sensibilizados en buenas practicas ambientales",
        d: "El tecnico en recreaciones acuaticas convierte la experiencia turistica en una leccion de conservacion para proteger nuestros oceanos.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para impartir charlas de induccion ambiental previas a la actividad acuatica."
    },
    {
        nombre: "Logistica",
        subsistemas: ["DGETI", "CECyTE", "DGETAyCM", "CONALEP"],
        s: "488512",
        sec: "Servicios de mensajeria y paqueteria",
        m: "Modulo IV: Organiza el transporte de mercancias",
        a: [
            "Diseno de rutas de transporte optimizadas (Software de ruteo) para reducir el consumo de diesel y la huella de carbono.",
            "Implementacion de estrategias de 'ultima milla' mediante vehiculos electricos o transporte no motorizado.",
            "Supervision del embalaje sostenible utilizando materiales biodegradables y reduciendo el uso de plasticos de embalaje.",
            "Gestion de la logistica inversa para el retorno de envases y embalajes, promoviendo la economia circular.",
            "Auditoria de proveedores de transporte para asegurar el cumplimiento de normas de mantenimiento y bajas emisiones."
        ],
        h: "Suministro Etico y Descarbonizacion",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "13", o2_t: "Accion por el Clima",
        i: "Reduccion de kilometros recorridos por unidad de carga",
        d: "La logistica tecnica es el puente hacia un consumo consciente; optimizar el movimiento es salvar energia.",
        orientacion: "Instructor(a): Verifique que el alumno calcule el ahorro de emisiones al consolidar cargas y optimizar rutas."
    },
    {
        nombre: "Produccion Industrial de Alimentos",
        subsistemas: ["DGETI", "DGETAyCM", "CECyTE"],
        s: "311999",
        sec: "Industrias alimentarias",
        m: "Modulo II: Realiza los procesos de transformacion de productos lacteos",
        a: [
            "Optimizacion del uso de agua en los procesos de limpieza y sanitizacion de equipos industriales (Sistemas CIP).",
            "Tratamiento de suero lacteo para evitar su vertido en drenajes, transformandolo en productos de valor agregado.",
            "Implementacion de controles de temperatura precisos para evitar el desperdicio de materia prima por descomposicion.",
            "Uso de tecnologias de empaque al vacio o atmosfera modificada para extender la vida util del producto de forma natural.",
            "Supervision del cumplimiento de la NOM-251-SSA1 para garantizar alimentos inocuos y evitar mermas sanitarias."
        ],
        h: "Eco-Procesamiento y Seguridad Alimentaria",
        o1: "2", o1_t: "Hambre Cero",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Porcentaje de suero lacteo recuperado o procesado",
        d: "La industria alimentaria tecnica debe cerrar sus ciclos, convirtiendo subproductos en recursos para combatir el hambre.",
        orientacion: "Instructor(a): Evalue la propuesta del alumno para el manejo del suero de leche, evitando su impacto ambiental."
    },
    {
        nombre: "Procesamiento Industrial de Alimentos",
        subsistemas: ["CONALEP"],
        s: "311999",
        sec: "Industrias alimentarias",
        m: "Modulo II: Realiza los procesos de transformacion de productos lacteos",
        a: [
            "Optimizacion del uso de agua en los procesos de limpieza y sanitizacion de equipos industriales (Sistemas CIP).",
            "Tratamiento de suero lacteo para evitar su vertido en drenajes, transformandolo en productos de valor agregado.",
            "Implementacion de controles de temperatura precisos para evitar el desperdicio de materia prima por descomposicion.",
            "Uso de tecnologias de empaque al vacio o atmosfera modificada para extender la vida util del producto de forma natural.",
            "Supervision del cumplimiento de la NOM-251-SSA1 para garantizar alimentos inocuos y evitar mermas sanitarias."
        ],
        h: "Eco-Procesamiento y Seguridad Alimentaria",
        o1: "2", o1_t: "Hambre Cero",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Porcentaje de suero lacteo recuperado o procesado",
        d: "La industria alimentaria tecnica debe cerrar sus ciclos, convirtiendo subproductos en recursos para combatir el hambre.",
        orientacion: "Instructor(a): Evalue la propuesta del alumno para el manejo del suero de leche, evitando su impacto ambiental."
    },
    {
        nombre: "Explotacion Ganadera",
        subsistemas: ["DGETAyCM"],
        s: "112111",
        sec: "Cria y explotacion de bovinos",
        m: "Modulo III: Produce leche de calidad",
        a: [
            "Implementacion de buenas practicas de ordeno para garantizar la inocuidad y reducir el uso de antibioticos.",
            "Gestion de pasturas bajo sistemas de pastoreo rotacional para evitar la compactacion y erosion del suelo.",
            "Instalacion de bebederos eficientes con sistemas de flotador para evitar el desperdicio de agua potable.",
            "Uso de biodigestores para tratar el estiercol, generando biol (fertilizante) y biogas para la propia unidad productiva.",
            "Seleccion genetica orientada a la eficiencia alimenticia, reduciendo la emision de gases de efecto invernadero por animal."
        ],
        h: "Ganaderia Regenerativa y Eficiencia Metabolica",
        o1: "15", o1_t: "Vida de Ecosistemas Terrestres",
        o2: "2", o2_t: "Hambre Cero",
        i: "Litros de leche producidos por metro cubico de agua utilizado",
        d: "La tecnica ganadera debe migrar hacia sistemas que regeneren el suelo mientras aseguran la proteina del manana.",
        orientacion: "Instructor(a): Supervise que el alumno implemente registros de salud animal que demuestren la reduccion de uso de quimicos."
    },
    {
        nombre: "Soldadura Industrial",
        subsistemas: ["DGETI", "CONALEP"],
        s: "332310",
        sec: "Fabricacion de estructuras metalicas",
        m: "Modulo III: Suelda piezas metalicas con proceso SMAW",
        a: [
            "Optimizacion del uso de electrodos y materiales de aporte para reducir el desperdicio metalico.",
            "Implementacion de sistemas de extraccion de humos y ventilacion para proteger la salud respiratoria del soldador.",
            "Uso de equipos de proteccion personal (EPP) normados para garantizar un entorno de trabajo seguro y decente.",
            "Gestion responsable de las colillas de electrodos y residuos de escoria para su disposicion final tecnica.",
            "Mantenimiento preventivo de las fuentes de poder (maquinas de soldar) para asegurar la eficiencia energetica del arco."
        ],
        h: "Seguridad Industrial y Eficiencia en Procesos",
        o1: "8", o1_t: "Trabajo Decente y Crecimiento Economico",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Reduccion de tasa de accidentes y desperdicio de insumos",
        d: "La soldadura tecnica es la union de la infraestructura nacional; hacerla con seguridad y eficiencia es construir futuro.",
        orientacion: "Instructor(a): Verifique que el alumno aplique las normas de seguridad AWS y supervise el manejo de residuos de fundente."
    },
    {
        nombre: "Comercio Exterior",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "522299",
        sec: "Servicios relacionados con el comercio exterior",
        m: "Modulo II: Realiza los tramites aduanales de las mercancias",
        a: [
            "Auditoria de cumplimiento de normas ambientales internacionales en productos de importacion y exportacion.",
            "Promocion del cumplimiento de tratados comerciales que incluyan clausulas de proteccion laboral y derechos humanos.",
            "Digitalizacion de expedientes y pedimentos aduanales para avanzar hacia la 'Aduana sin Papel'.",
            "Gestion de certificaciones de origen para productos provenientes de esquemas de comercio justo.",
            "Asesoria en la clasificacion arancelaria de tecnologias limpias para incentivar su introduccion al mercado nacional."
        ],
        h: "Etica Comercial y Gobernanza Global",
        o1: "17", o1_t: "Alianzas para lograr los Objetivos",
        o2: "8", o2_t: "Trabajo Decente y Crecimiento Economico",
        i: "Porcentaje de tramites digitalizados (Cero papel)",
        d: "El comercio exterior tecnico facilita el intercambio de soluciones sostenibles entre naciones, fortaleciendo la economia etica.",
        orientacion: "Instructor(a): Oriente al alumno en la identificacion de regulaciones no arancelarias de caracter ambiental (etiquetado ecologico)."
    },
    {
        nombre: "Tecnico Forestal",
        subsistemas: ["DGETAyCM", "CECyTE"],
        s: "113110",
        sec: "Silvicultura",
        m: "Modulo II: Realiza actividades de proteccion y fomento forestal",
        a: [
            "Implementacion de brechas cortafuego y manejo de combustibles para la prevencion de incendios forestales.",
            "Ejecucion de programas de reforestacion con especies nativas para restaurar la biodiversidad local.",
            "Monitoreo y control biologico de plagas y enfermedades forestales para mantener la salud del ecosistema.",
            "Aplicacion de tecnicas de recoleccion de semillas para la conservacion del germoplasma forestal.",
            "Uso de sistemas de informacion geografica (SIG) para la delimitacion de areas de conservacion y aprovechamiento."
        ],
        h: "Gestion Ecosistemica y Restauracion",
        o1: "15", o1_t: "Vida de Ecosistemas Terrestres",
        o2: "13", o2_t: "Accion por el Clima",
        i: "Hectareas bajo manejo de proteccion o reforestacion",
        d: "El tecnico forestal es el guardian de los pulmones del planeta, asegurando que el bosque siga brindando servicios ambientales.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para identificar especies clave y proponer acciones de restauracion de suelos degradados."
    },
    {
        nombre: "Mantenimiento Industrial",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "811311",
        sec: "Reparacion y mantenimiento de maquinaria y equipo industrial",
        m: "Modulo III: Mantiene sistemas neumaticos e hidraulicos",
        a: [
            "Deteccion y sellado de fugas en lineas de aire comprimido para reducir el desperdicio de energia electrica en compresores.",
            "Implementacion de planes de recuperacion y filtrado de aceites hidraulicos para evitar su desecho prematuro.",
            "Sustitucion de componentes neumaticos por versiones de bajo consumo de aire (eficiencia fluidica).",
            "Mantenimiento preventivo de valvulas y actuadores para garantizar la precision operativa y reducir mermas de produccion.",
            "Aplicacion de protocolos de seguridad para el manejo de energias peligrosas (bloqueo y etiquetado)."
        ],
        h: "Mantenimiento Preventivo y Ahorro Energetico",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Reduccion de m3 de aire comprimido desperdiciado",
        d: "El mantenimiento tecnico asegura que la industria opere con el minimo impacto ambiental y el maximo aprovechamiento de recursos.",
        orientacion: "Instructor(a): Verifique que el alumno identifique el costo energetico de una fuga de aire y proponga medidas de correccion inmediata."
    },
    {
        nombre: "Animacion Turistica",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "713990",
        sec: "Otros servicios recreativos",
        m: "Modulo II: Organiza actividades recreativas y de animacion",
        a: [
            "Diseno de talleres de educacion ambiental y sensibilizacion sobre los ODS para los huespedes o visitantes.",
            "Promocion de la cultura local y las tradiciones regionales mediante actividades ludicas respetuosas.",
            "Uso de materiales reciclados o naturales en la elaboracion de material didactico y de animacion.",
            "Planificacion de eventos recreativos que minimicen la contaminacion auditiva y luminica en entornos naturales.",
            "Fomento de la inclusion mediante el diseno de actividades recreativas accesibles para personas con discapacidad."
        ],
        h: "Hospitalidad Educativa y Conciencia Ambiental",
        o1: "4", o1_t: "Educacion de Calidad",
        o2: "11", o2_t: "Ciudades y Comunidades Sostenibles",
        i: "Nivel de participacion en actividades de sensibilizacion ambiental",
        d: "La animacion tecnica transforma el ocio en una oportunidad para la educacion y el fortalecimiento de la identidad cultural.",
        orientacion: "Instructor(a): Oriente al alumno en la creacion de programas de animacion que integren el conocimiento de la flora y fauna local."
    },
    {
        nombre: "Agroecologia",
        subsistemas: ["DGETAyCM"],
        s: "111999",
        sec: "Agricultura (Otros cultivos)",
        m: "Modulo II: Aplica principios y practicas agroecologicas",
        a: [
            "Implementacion de policultivos y asociaciones de plantas para favorecer el control biologico y la salud del suelo.",
            "Elaboracion de bioinsumos y compostas de alta calidad para eliminar el uso de fertilizantes nitrogenados sinteticos.",
            "Conservacion y uso de semillas nativas para proteger la biodiversidad genetica y la soberania alimentaria.",
            "Diseno de sistemas de captura y retencion de agua de lluvia mediante curvas de nivel y zanjas de infiltracion.",
            "Promocion de cadenas cortas de comercializacion para reducir la huella de carbono y fortalecer la economia local."
        ],
        h: "Soberania Alimentaria y Resiliencia Ecosistemica",
        o1: "2", o1_t: "Hambre Cero",
        o2: "15", o2_t: "Vida de Ecosistemas Terrestres",
        i: "Hectareas transicionadas de agricultura convencional a organica",
        d: "La agroecologia tecnica propone un retorno a los ciclos naturales, produciendo alimentos sanos mientras se restaura la tierra.",
        orientacion: "Instructor(a): Evalue la destreza del alumno en la identificacion de organismos beneficos y la preparacion de caldos minerales."
    },
    {
        nombre: "Instrumentacion Industrial",
        subsistemas: ["DGETI", "CONALEP"],
        s: "335311",
        sec: "Fabricacion de instrumentos de medicion y control",
        m: "Modulo III: Mantiene sistemas de control de procesos industriales",
        a: [
            "Calibracion precisa de sensores y transmisores para optimizar el uso de materias primas y energia.",
            "Implementacion de lazos de control cerrados que minimicen el desperdicio en procesos quimicos o termicos.",
            "Sintonizacion de controladores PID para estabilizar procesos y reducir emisiones o purgas innecesarias.",
            "Mantenimiento preventivo de elementos finales de control (valvulas) para evitar fugas de fluidos industriales.",
            "Uso de protocolos de comunicacion digital (HART/Fieldbus) para diagnosticos remotos que reduzcan desplazamientos fisicos."
        ],
        h: "Control Automatico y Optimizacion de Recursos",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Reduccion de la variabilidad del proceso (Sigmas de calidad)",
        d: "La instrumentacion tecnica es la inteligencia detras de la industria; medir con precision es el primer paso para ahorrar.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para interpretar diagramas de tuberia e instrumentacion (P&ID) bajo normas ISA."
    },
    {
        nombre: "Asistente Directivo",
        subsistemas: ["CONALEP"],
        s: "561110",
        sec: "Servicios de apoyo a los negocios",
        m: "Modulo II: Gestiona documentacion y comunicacion oficial",
        a: [
            "Implementacion de sistemas de archivo digital para alcanzar el objetivo de 'Oficina Cero Papel'.",
            "Gestion eficiente de la agenda ejecutiva priorizando reuniones virtuales para reducir la huella de carbono por viajes.",
            "Uso de herramientas ofimaticas en la nube para el trabajo colaborativo y la reduccion de insumos fisicos.",
            "Aplicacion de normas de etica y confidencialidad en el manejo de la informacion institucional.",
            "Promocion de compras verdes y suministros de oficina con certificaciones ecologicas."
        ],
        h: "Gestion Administrativa Sostenible",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "8", o2_t: "Trabajo Decente y Crecimiento Economico",
        i: "Porcentaje de reduccion en el consumo de suministros de oficina",
        d: "El asistente directivo moderno coordina la eficiencia operativa desde un enfoque de responsabilidad ambiental y etica.",
        orientacion: "Instructor(a): Fomente en el alumno el uso de firmas digitales y protocolos de ciberseguridad para la proteccion de datos."
    },
    {
        nombre: "Secretariado Ejecutivo",
        subsistemas: ["DGETI", "CECyTE"],
        s: "561110",
        sec: "Servicios de apoyo a los negocios",
        m: "Modulo II: Gestiona documentacion y comunicacion oficial",
        a: [
            "Implementacion de sistemas de archivo digital para alcanzar el objetivo de 'Oficina Cero Papel'.",
            "Gestion eficiente de la agenda ejecutiva priorizando reuniones virtuales para reducir la huella de carbono por viajes.",
            "Uso de herramientas ofimaticas en la nube para el trabajo colaborativo y la reduccion de insumos fisicos.",
            "Aplicacion de normas de etica y confidencialidad en el manejo de la informacion institucional.",
            "Promocion de compras verdes y suministros de oficina con certificaciones ecologicas."
        ],
        h: "Gestion Administrativa Sostenible",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "8", o2_t: "Trabajo Decente y Crecimiento Economico",
        i: "Porcentaje de reduccion en el consumo de suministros de oficina",
        d: "El asistente directivo moderno coordina la eficiencia operativa desde un enfoque de responsabilidad ambiental y etica.",
        orientacion: "Instructor(a): Fomente en el alumno el uso de firmas digitales y protocolos de ciberseguridad para la proteccion de datos."
    },
    {
        nombre: "Gestion de la Micro, Pequena y Mediana Empresa",
        subsistemas: ["DGETAyCM"],
        s: "541611",
        sec: "Servicios de consultoria en administracion",
        m: "Modulo IV: Gestiona procesos de produccion y comercializacion",
        a: [
            "Diseno de modelos de negocio basados en la economia circular para aprovechar subproductos agropecuarios.",
            "Fomento de la formalizacion laboral en el sector rural para garantizar el acceso a la seguridad social.",
            "Desarrollo de planes de comercializacion en canales digitales para eliminar intermediarios y mejorar el precio al productor.",
            "Implementacion de sistemas basicos de costos para asegurar la rentabilidad y permanencia de la MiPyME.",
            "Promocion de la asociatividad y el cooperativismo para fortalecer el desarrollo comunitario sostenible."
        ],
        h: "Emprendimiento Social y Desarrollo Rural",
        o1: "8", o1_t: "Trabajo Decente y Crecimiento Economico",
        o2: "1", o2_t: "Fin de la Pobreza",
        i: "Numero de microempresas con plan de sostenibilidad implementado",
        d: "Gestionar tecnicamente una MiPyME rural es la clave para transformar la economia local y arraigar el talento al territorio.",
        orientacion: "Instructor(a): Oriente al alumno en la creacion de planes de negocio que integren un triple impacto: economico, social y ambiental."
    },
    {
        nombre: "Quimica Industrial",
        subsistemas: ["DGETI", "CONALEP"],
        s: "325999",
        sec: "Fabricacion de otros productos quimicos",
        m: "Modulo III: Realiza analisis quimicos industriales",
        a: [
            "Optimizacion de procesos quimicos para reducir la generacion de subproductos toxicos o residuos peligrosos.",
            "Implementacion de sistemas de recuperacion de solventes mediante destilacion para su reutilizacion en planta.",
            "Monitoreo de emisiones atmosfericas y efluentes liquidos para asegurar el cumplimiento de las normas ambientales (SEMARNAT).",
            "Sustitucion de reactivos convencionales por alternativas de 'Quimica Verde' con menor impacto ambiental.",
            "Gestion estricta de la hoja de seguridad de materiales (MSDS) para prevenir riesgos quimicos y accidentes laborales."
        ],
        h: "Procesos Quimicos Sostenibles y Seguridad",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Reduccion de residuos quimicos peligrosos por lote de produccion",
        d: "La quimica industrial tecnica busca transformar la materia de forma eficiente, minimizando la huella toxica en el entorno.",
        orientacion: "Instructor(a): Verifique que el alumno domine el pesaje analitico y el manejo de residuos quimicos de acuerdo a su compatibilidad."
    },
    {
        nombre: "Administracion de Empresas Turisticas",
        subsistemas: ["CECyTE", "CONALEP"],
        s: "721110",
        sec: "Hoteles con otros servicios integrados",
        m: "Modulo IV: Administra areas de servicios turisticos",
        a: [
            "Diseno de modelos de costos que integren el ahorro de energia y agua como indicadores de rentabilidad.",
            "Gestion de certificaciones de calidad turistica y sellos ecologicos (como 'S' o 'Punto Limpio').",
            "Supervision de compras hoteleras priorizando proveedores regionales para reducir la huella de carbono logistica.",
            "Implementacion de sistemas de control de inventarios para reducir mermas en los departamentos de alimentos y bebidas.",
            "Desarrollo de planes de contingencia y seguridad para proteger la integridad del turista y del personal."
        ],
        h: "Gestion Turistica Eficiente",
        o1: "8", o1_t: "Trabajo Decente y Crecimiento Economico",
        o2: "11", o2_t: "Ciudades y Comunidades Sostenibles",
        i: "Porcentaje de proveedores locales en la cadena de suministros",
        d: "Administrar el turismo con tecnica es asegurar que el servicio sea rentable, seguro y respetuoso con el destino.",
        orientacion: "Instructor(a): Oriente al alumno en la interpretacion de estados financieros con enfoque en la optimizacion de recursos operativos."
    },
    {
        nombre: "Sistemas de Produccion Pecuaria",
        subsistemas: ["DGETAyCM", "CECyTE"],
        s: "112310",
        sec: "Explotacion de aves de corral",
        m: "Modulo IV: Realiza el manejo zootecnico de especies menores",
        a: [
            "Implementacion de sistemas de bioseguridad para prevenir enfermedades sin el uso preventivo de antibioticos.",
            "Instalacion de sistemas de recoleccion de agua pluvial para la limpieza de naves y riego de forrajes.",
            "Gestion de la pollinaza o gallinaza mediante composteo para su uso como fertilizante organico seguro.",
            "Promocion del bienestar animal (libre pastoreo o densidades adecuadas) para mejorar la calidad del producto final.",
            "Optimizacion de dietas utilizando granos locales para reducir costos y emisiones de transporte."
        ],
        h: "Produccion de Especies Menores e Inocuidad",
        o1: "2", o1_t: "Hambre Cero",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Porcentaje de mortalidad reducido mediante buenas practicas zootecnicas",
        d: "La produccion de especies menores tecnica es una solucion eficiente para la proteina local con un bajo impacto hidrico.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para disenar un calendario de vacunacion y manejo de residuos organicos."
    },
    {
        nombre: "Control de Calidad",
        subsistemas: ["DGETI", "CONALEP"],
        s: "541990",
        sec: "Servicios profesionales, cientificos y tecnicos",
        m: "Modulo II: Realiza pruebas fisicas y quimicas a materiales",
        a: [
            "Aplicacion de control estadistico de procesos para reducir la generacion de productos defectuosos y desperdicio de materia prima.",
            "Implementacion de tecnicas de metrologia dimensional para asegurar la precision y evitar el re-trabajo industrial.",
            "Supervision del cumplimiento de normativas ambientales y de seguridad en los procesos de manufactura.",
            "Uso de herramientas de mejora continua (Lean Six Sigma) para optimizar el uso de recursos energeticos y materiales.",
            "Gestion de la trazabilidad del producto para garantizar la seguridad del consumidor y la responsabilidad corporativa."
        ],
        h: "Excelencia Operativa y Cero Desperdicio",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Reduccion del indice de scrap (desperdicio) por lote",
        d: "El tecnico en control de calidad asegura que la eficiencia y la sostenibilidad se cumplan desde la primera fase de produccion.",
        orientacion: "Instructor(a): Evalue la destreza del alumno en el uso de instrumentos de medicion y la interpretacion de graficas de control."
    },
    {
        nombre: "Asistente de Operaciones Logisticas",
        subsistemas: ["CECyTE", "CONALEP"],
        s: "493110",
        sec: "Almacenamiento y deposito",
        m: "Modulo III: Controla el flujo de mercancias en el almacen",
        a: [
            "Optimizacion del layout del almacen para reducir los tiempos de recorrido de montacargas y el consumo de energia.",
            "Implementacion de sistemas de inventario 'Justo a Tiempo' para evitar el sobrealmacenamiento y la caducidad de productos.",
            "Gestion de envases y embalajes retornables para minimizar la generacion de residuos solidos.",
            "Uso de tecnologia de radiofrecuencia (RFID) para una trazabilidad precisa y eliminacion de registros en papel.",
            "Supervision de protocolos de seguridad en la carga y descarga para prevenir riesgos y danos a la mercancia."
        ],
        h: "Logistica de Almacenamiento Eficiente",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Eficiencia en el uso del espacio y reduccion de mermas por manejo",
        d: "La asistencia logistica tecnica es vital para que el flujo de bienes sea ordenado, seguro y con el menor impacto ambiental posible.",
        orientacion: "Instructor(a): Fomente en el alumno el uso de indicadores de desempeno (KPI) enfocados en la rapidez y la integridad del inventario."
    },
    {
        nombre: "Mecanica Naval",
        subsistemas: ["DGETAyCM"],
        s: "811312",
        sec: "Reparacion y mantenimiento de maquinaria y equipo pesado",
        m: "Modulo III: Mantiene sistemas de propulsion marina",
        a: [
            "Ajuste tecnico de motores fuera de borda e intraborda para optimizar el consumo de combustible y reducir emisiones.",
            "Mantenimiento preventivo de sistemas de transmision marina para evitar fugas de lubricantes al ecosistema oceanico.",
            "Reparacion de sistemas de gobierno y propulsion para garantizar la seguridad de la navegacion en alta mar.",
            "Implementacion de protocolos de limpieza de motores que eviten la dispersion de especies invasoras en el agua de lastre.",
            "Gestion responsable de baterias y componentes electronicos marinos para su reciclaje tecnico."
        ],
        h: "Mantenimiento Maritimo y Proteccion Oceanica",
        o1: "14", o1_t: "Vida Submarina",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Reduccion de consumo de combustible por hora de navegacion mediante ajuste tecnico",
        d: "El mecanico naval tecnico es el garante de que la flota opere de forma segura y respetuosa con la biodiversidad de nuestros mares.",
        orientacion: "Instructor(a): Verifique que el alumno aplique las normas de seguridad maritima y el manejo correcto de hidrocarburos en el taller."
    },
    {
        nombre: "Telecomunicaciones",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "517311",
        sec: "Operadores de telecomunicaciones alambricas e inalambricas",
        m: "Modulo II: Instala y mantiene redes de telecomunicaciones",
        a: [
            "Instalacion de redes de fibra optica para maximizar la velocidad de transmision con menor consumo de energia.",
            "Configuracion de equipos de red con protocolos de ahorro energetico (Green IT) en horarios de baja demanda.",
            "Mantenimiento preventivo de estaciones base y antenas para reducir la basura electronica y extender la vida util del equipo.",
            "Implementacion de sistemas de alimentacion solar en repetidoras de zonas remotas para reducir la huella de carbono.",
            "Gestion responsable de cables y componentes electronicos obsoletos mediante programas de reciclaje tecnico."
        ],
        h: "Conectividad Sostenible y Eficiencia Digital",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "17", o2_t: "Alianzas para lograr los Objetivos",
        i: "Kilometros de red instalada con protocolos de eficiencia energetica",
        d: "Las telecomunicaciones tecnicas son el sistema nervioso de la sociedad moderna; su eficiencia es clave para cerrar la brecha digital.",
        orientacion: "Instructor(a): Verifique que el alumno domine el proceso de fusion de fibra optica y el uso de equipos de medicion como el OTDR."
    },
    {
        nombre: "Desarrollo Comunitario",
        subsistemas: ["DGETI", "CECyTE"],
        s: "541611",
        sec: "Servicios de consultoria en administracion",
        m: "Modulo III: Promueve el desarrollo sustentable de la comunidad",
        a: [
            "Elaboracion de diagnosticos participativos para identificar problemas ambientales y sociales en la region.",
            "Diseno y gestion de proyectos de ecotecnias (estufas solares, captadores de lluvia) para mejorar la calidad de vida rural.",
            "Fomento de la organizacion comunitaria para la autogestion de recursos y el fortalecimiento del tejido social.",
            "Promocion de la igualdad de genero y la inclusion de grupos vulnerables en los procesos de toma de decisiones locales.",
            "Capacitacion comunitaria en tecnicas de manejo de residuos solidos y prevencion de la contaminacion del agua."
        ],
        h: "Gestion Social y Sustentabilidad Territorial",
        o1: "11", o1_t: "Ciudades y Comunidades Sostenibles",
        o2: "5", o2_t: "Igualdad de Genero",
        i: "Numero de proyectos comunitarios de impacto social o ambiental implementados",
        d: "El tecnico en desarrollo comunitario es un agente de cambio que empodera a la sociedad para construir un futuro mas justo y verde.",
        orientacion: "Instructor(a): Oriente al alumno en el uso de metodologias de Marco Logico para el diseno de proyectos sociales efectivos."
    },
    {
        nombre: "Produccion Industrial de Alimentos Pescados y Mariscos",
        subsistemas: ["DGETAyCM"],
        s: "311710",
        sec: "Preparacion y envasado de pescados y mariscos",
        m: "Modulo IV: Realiza los procesos de transformacion de productos pesqueros",
        a: [
            "Implementacion de tecnicas de conservacion (ahumado, salazon, enlatado) para reducir el desperdicio de productos del mar.",
            "Uso de hielo y sistemas de refrigeracion eficiente para mantener la cadena de frio y garantizar la inocuidad alimentaria.",
            "Aprovechamiento de subproductos de la pesca (visceras, escamas) para la elaboracion de harinas o biofertilizantes.",
            "Aplicacion de normas de higiene (HACCP) para prevenir la contaminacion cruzada y proteger la salud del consumidor.",
            "Promocion del valor agregado en especies de bajo valor comercial para mejorar los ingresos de los pescadores locales."
        ],
        h: "Inocuidad Marina y Valor Agregado",
        o1: "2", o1_t: "Hambre Cero",
        o2: "14", o2_t: "Vida Submarina",
        i: "Porcentaje de aprovechamiento integral del producto pesquero",
        d: "Procesar productos pesqueros con tecnica permite alimentar a la poblacion con proteina de alta calidad sin desperdiciar el esfuerzo del mar.",
        orientacion: "Instructor(a): Evalue el conocimiento del alumno sobre la NOM-251 y las tecnicas de fileteo y envasado al vacio."
    },
    {
        nombre: "Diseno Grafico Digital",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "541430",
        sec: "Diseno grafico",
        m: "Modulo III: Produce elementos graficos digitales",
        a: [
            "Optimizacion de archivos digitales para reducir el consumo de almacenamiento y energia en servidores.",
            "Uso de paletas de colores y tipografias que minimicen el consumo de tinta en impresiones de prueba.",
            "Promocion de la etica visual evitando la manipulacion enganosa de informacion en campanas sociales.",
            "Gestion de derechos de autor y uso de licencias Creative Commons para fomentar el conocimiento abierto.",
            "Diseno de interfaces (UI) accesibles que incluyan a personas con discapacidades visuales o motrices."
        ],
        h: "Comunicacion Visual Etica y Accesible",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "10", o2_t: "Reduccion de las Desigualdades",
        i: "Porcentaje de proyectos disenados bajo estandares de accesibilidad",
        d: "El diseno tecnico digital es una herramienta poderosa para democratizar la informacion y optimizar recursos visuales.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para crear propuestas graficas con perspectiva de inclusion y sostenibilidad."
    },
    {
        nombre: "Banca y Finanzas",
        subsistemas: ["CONALEP", "DGETI"],
        s: "522110",
        sec: "Banca central y de deposito",
        m: "Modulo IV: Realiza operaciones de servicios financieros",
        a: [
            "Promocion de productos de inversion verde y creditos para proyectos de energia renovable.",
            "Implementacion de protocolos de educacion financiera para prevenir el sobreendeudamiento de los usuarios.",
            "Gestion de transacciones digitales para reducir el uso de efectivo y papel en las sucursales bancarias.",
            "Analisis de riesgo crediticio bajo criterios ASG (Ambientales, Sociales y de Gobernanza).",
            "Deteccion y prevencion de operaciones con recursos de procedencia ilicita para asegurar la integridad del sistema."
        ],
        h: "Finanzas Responsables y Etica Bancaria",
        o1: "8", o1_t: "Trabajo Decente y Crecimiento Economico",
        o2: "17", o2_t: "Alianzas para lograr los Objetivos",
        i: "Numero de creditos otorgados a proyectos con impacto social o ambiental",
        d: "La tecnica financiera es el motor que debe dirigir el capital hacia un crecimiento economico que no agote el planeta.",
        orientacion: "Instructor(a): Oriente al alumno en el analisis de estados financieros desde una perspectiva de transparencia y etica profesional."
    },
    {
        nombre: "Apicultura",
        subsistemas: ["DGETAyCM"],
        s: "112910",
        sec: "Apicultura",
        m: "Modulo III: Realiza el manejo integral del apiario",
        a: [
            "Uso de tecnicas de manejo que eviten el estres de las colonias y promuevan la salud de las abejas.",
            "Implementacion de flora apicola nativa para asegurar la alimentacion natural y la biodiversidad local.",
            "Extraccion y envasado de miel bajo normas de inocuidad para garantizar un producto libre de contaminantes.",
            "Fomento de la polinizacion como servicio ambiental critico para la seguridad alimentaria regional.",
            "Gestion de residuos de la colmena (cera y propoleo) para la elaboracion de subproductos naturales."
        ],
        h: "Apicultura Sostenible y Biodiversidad",
        o1: "15", o1_t: "Vida de Ecosistemas Terrestres",
        o2: "2", o2_t: "Hambre Cero",
        i: "Numero de colmenas mantenidas bajo estandares de produccion organica",
        d: "La apicultura tecnica es fundamental no solo por la miel, sino por el servicio ecosistemico de polinizacion que sostiene la vida.",
        orientacion: "Instructor(a): Verifique que el alumno aplique correctamente el equipo de proteccion y las tecnicas de ahumado respetuoso."
    },
    {
        nombre: "Metalurgia",
        subsistemas: ["CONALEP", "CECyTE"],
        s: "331111",
        sec: "Industria basica del hierro y del acero",
        m: "Modulo III: Controla los procesos de fundicion y moldeo",
        a: [
            "Optimizacion de la carga termica en hornos para reducir el consumo de combustible y las emisiones de CO2.",
            "Implementacion de tecnicas de reciclaje de chatarra ferrosa y no ferrosa para reintegrarlas al ciclo productivo.",
            "Monitoreo y filtrado de polvos y gases de combustion para minimizar el impacto ambiental de la fundicion.",
            "Uso de arenas de moldeo recuperadas para reducir la extraccion de aridos naturales.",
            "Gestion segura de escorias metalicas para su posible aprovechamiento en la industria de la construccion."
        ],
        h: "Metalurgia Circular y Eficiencia Termica",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Toneladas de metal reciclado procesadas",
        d: "La metalurgia tecnica es el corazon de la infraestructura; hacerla eficiente es clave para una industria sostenible.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para realizar balances de materia y energia en procesos de fundicion."
    },
    {
        nombre: "Promocion Social",
        subsistemas: ["DGETI", "CECyTE"],
        s: "541611",
        sec: "Servicios de consultoria en administracion",
        m: "Modulo II: Realiza diagnosticos sociales comunitarios",
        a: [
            "Identificacion de grupos vulnerables para asegurar el acceso equitativo a programas de salud y educacion.",
            "Promocion de la participacion ciudadana en la toma de decisiones sobre el desarrollo local.",
            "Diseno de campanas de sensibilizacion sobre derechos humanos y prevencion de la violencia de genero.",
            "Gestion de redes de apoyo comunitario para fortalecer la resiliencia ante desastres naturales.",
            "Evaluacion del impacto social de proyectos de infraestructura en comunidades rurales o urbanas."
        ],
        h: "Equidad Social y Fortalecimiento Comunitario",
        o1: "10", o1_t: "Reduccion de las Desigualdades",
        o2: "1", o2_t: "Fin de la Pobreza",
        i: "Numero de diagnosticos participativos concluidos con plan de accion",
        d: "El promotor social tecnico es el enlace entre las necesidades de la poblacion y las soluciones institucionales.",
        orientacion: "Instructor(a): Oriente al alumno en el uso de tecnicas de entrevista y cartografia social para el levantamiento de datos."
    },
    {
        nombre: "Sistemas de Produccion Silvicola",
        subsistemas: ["DGETAyCM"],
        s: "113110",
        sec: "Silvicultura",
        m: "Modulo IV: Realiza el aprovechamiento de productos forestales",
        a: [
            "Ejecucion de talas selectivas basadas en planes de manejo para asegurar la regeneracion natural del bosque.",
            "Implementacion de tecnicas de extraccion de resinas y productos no maderables que no danen la salud del arbol.",
            "Uso de aserraderos moviles eficientes para reducir el desperdicio de madera en el sitio de aprovechamiento.",
            "Prevencion y combate de incendios forestales mediante el manejo tecnico de la biomasa seca.",
            "Certificacion de la cadena de custodia para garantizar que la madera provenga de fuentes legales y sustentables."
        ],
        h: "Silvicultura Sustentable y Manejo Etico",
        o1: "15", o1_t: "Vida de Ecosistemas Terrestres",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Metros cubicos de madera extraidos bajo criterios de certificacion forestal",
        d: "Producir en el bosque con tecnica silvicola es garantizar que la riqueza forestal permanezca para las proximas generaciones.",
        orientacion: "Instructor(a): Verifique que el alumno domine el uso del clinometro y la cinta diametrica para el inventario forestal."
    },
    {
        nombre: "Recubrimientos Ceramicos",
        subsistemas: ["CONALEP"],
        s: "327120",
        sec: "Fabricacion de productos a base de arcillas y vidriado",
        m: "Modulo II: Controla el proceso de molienda y atomizado de pastas ceramicas",
        a: [
            "Implementacion de sistemas de recuperacion de polvos para su reintegracion a la mezcla de pasta ceramica.",
            "Optimizacion de la curva de coccion en hornos de rodillos para minimizar el consumo de gas natural.",
            "Tratamiento y recirculacion de aguas de lavado para alcanzar el vertido cero en la planta de produccion.",
            "Uso de esmaltes libres de metales pesados para reducir la toxicidad de los residuos y el producto final.",
            "Reduccion del espesor de las piezas mediante tecnologia de prensado avanzado, ahorrando materia prima sin perder resistencia."
        ],
        h: "Manufactura Ceramica de Bajo Impacto",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Porcentaje de agua y calor recuperados en el proceso de atomizacion",
        d: "La tecnica ceramica evoluciona hacia la eficiencia termica y el reuso de materiales, creando recubrimientos duraderos y ecologicos.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para ajustar parametros de granulometria y controlar la viscosidad de los barbotinas."
    },
    {
        nombre: "Atencion Infantil",
        subsistemas: ["DGETI", "CECyTE", "CONALEP"],
        s: "624410",
        sec: "Servicios de cuidado infantil",
        m: "Modulo III: Proporciona atencion y cuidado a lactantes, maternales y preescolares",
        a: [
            "Fomento de habitos de alimentacion saludable y sustentable desde la primera infancia.",
            "Implementacion de actividades pedagogicas basadas en el reciclaje y la reutilizacion de materiales didacticos.",
            "Promocion de la equidad y la inclusion en el entorno escolar para reducir desigualdades desde el inicio del desarrollo.",
            "Gestion responsable de los residuos higienicos generados en las estancias infantiles.",
            "Capacitacion en protocolos de seguridad y proteccion civil para garantizar entornos de cuidado resilientes."
        ],
        h: "Desarrollo Humano y Equidad Temprana",
        o1: "4", o1_t: "Educacion de Calidad",
        o2: "10", o2_t: "Reduccion de las Desigualdades",
        i: "Numero de programas de educacion ambiental implementados en la estancia",
        d: "El tecnico en atencion infantil forma las bases de una sociedad mas justa, consciente y preparada para los retos del futuro.",
        orientacion: "Instructor(a): Oriente al alumno en el diseno de planes de estimulacion temprana que integren el respeto a la naturaleza y la diversidad."
    },
    {
        nombre: "Produccion de Madera y Muebles",
        subsistemas: ["DGETAyCM"],
        s: "337110",
        sec: "Fabricacion de muebles de madera",
        m: "Modulo IV: Realiza acabados y ensamble de muebles de madera",
        a: [
            "Uso de adhesivos y barnices de base acuosa para reducir la emision de formaldehido y compuestos volatiles.",
            "Optimizacion de los diagramas de corte para maximizar el aprovechamiento de la madera y reducir el aserrin.",
            "Implementacion de sistemas de recoleccion de viruta para su transformacion en briquetas o tableros aglomerados.",
            "Diseno de muebles bajo el concepto de 'Ecodiseno' que permita su facil reparacion o desarme para reciclaje.",
            "Aseguramiento del uso de maderas provenientes exclusivamente de plantaciones forestales comerciales sustentables."
        ],
        h: "Ecodiseno y Transformacion Forestal",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "15", o2_t: "Vida de Ecosistemas Terrestres",
        i: "Coeficiente de aprovechamiento de la materia prima por mueble fabricado",
        d: "Transformar la madera con tecnica es cerrar con exito el ciclo forestal, dandole valor al recurso y vida larga al producto.",
        orientacion: "Instructor(a): Verifique el uso correcto de maquinaria de corte y la aplicacion de acabados naturales que no comprometan la salud del operario."
    },
    {
        nombre: "Mantenimiento de Motores de Combustion Interna",
        subsistemas: ["DGETI", "CONALEP"],
        s: "811111",
        sec: "Reparacion y mantenimiento de automoviles y camiones",
        m: "Modulo II: Realiza el mantenimiento de los sistemas de enfriamiento, lubricacion y alimentacion del motor",
        a: [
            "Optimizacion de la mezcla aire-combustible mediante escaneo electronico para reducir emisiones de monoxido de carbono.",
            "Implementacion de planes de recuperacion de aceites usados y anticongelantes para evitar la contaminacion de mantos freaticos.",
            "Mantenimiento preventivo del sistema de escape y convertidores cataliticos para asegurar la eficiencia del motor.",
            "Uso de tecnicas de rectificacion que permitan prolongar la vida util del bloque del motor, reduciendo el desecho de metales.",
            "Capacitacion en el manejo de combustibles alternos y aditivos que mejoren el rendimiento energetico por kilometro."
        ],
        h: "Eficiencia Termica y Control de Emisiones",
        o1: "9", o1_t: "Industria, Innovacion e Infraestructura",
        o2: "12", o2_t: "Produccion y Consumo Responsables",
        i: "Reduccion porcentual de emisiones de gases contaminantes tras el mantenimiento",
        d: "El mantenimiento tecnico de motores es vital para la logistica nacional, asegurando que el transporte sea potente pero responsable.",
        orientacion: "Instructor(a): Verifique que el alumno domine el uso del analizador de gases y comprenda el ciclo termodinamico Otto y Diesel."
    },
    {
        nombre: "Estilismo y Diseno de Imagen",
        subsistemas: ["CECyTE", "CONALEP"],
        s: "812110",
        sec: "Salones de belleza y peluquerias",
        m: "Modulo III: Realiza cambios de color en el cabello",
        a: [
            "Sustitucion progresiva de productos con amoniaco y parabenos por alternativas de origen natural y baja toxicidad.",
            "Implementacion de sistemas de ahorro de agua en los lavabos mediante boquillas de alta presion y bajo flujo.",
            "Gestion responsable de residuos quimicos (tintes y decolorantes) para evitar su vertido directo al drenaje.",
            "Promocion del uso de envases rellenables y productos con empaques biodegradables en el establecimiento.",
            "Uso de equipos de secado y estilizado de alta eficiencia energetica para reducir el consumo electrico del salon."
        ],
        h: "Cuidado Personal Sostenible",
        o1: "12", o1_t: "Produccion y Consumo Responsables",
        o2: "3", o2_t: "Salud y Bienestar",
        i: "Litros de agua ahorrados por servicio tecnico realizado",
        d: "El estilismo tecnico moderno integra la estetica con la salud ambiental, cuidando tanto la imagen del cliente como el entorno.",
        orientacion: "Instructor(a): Oriente al alumno en el manejo de la hoja de seguridad de productos quimicos y en la prueba de sensibilidad cutanea."
    },
    {
        nombre: "Agrotecnologia",
        subsistemas: ["DGETAyCM"],
        s: "115110",
        sec: "Servicios relacionados con la agricultura",
        m: "Modulo IV: Emplea tecnologias de agricultura de precision",
        a: [
            "Uso de drones para el monitoreo de salud de cultivos, permitiendo la aplicacion focalizada de insumos (tasa variable).",
            "Instalacion de estaciones meteorologicas y sensores IoT para predecir plagas y optimizar calendarios de siembra.",
            "Analisis de imagenes multiespectrales para determinar deficiencias nutricionales sin sobrefertilizar el suelo.",
            "Gestion de grandes volumenes de datos (Big Data) para mejorar la toma de decisiones en la unidad de produccion.",
            "Implementacion de sistemas de trazabilidad digital desde la siembra hasta la cosecha para garantizar inocuidad."
        ],
        h: "Agricultura Digital y Precision Climatica",
        o1: "2", o1_t: "Hambre Cero",
        o2: "9", o2_t: "Industria, Innovacion e Infraestructura",
        i: "Reduccion del uso de agroquimicos por hectarea mediante aplicacion dirigida",
        d: "La agrotecnologia es la evolucion digital del campo, permitiendo producir mas alimentos con una huella ambiental minima.",
        orientacion: "Instructor(a): Evalue la capacidad del alumno para interpretar mapas de rendimiento y operar software de SIG (Sistemas de Informacion Geografica)."
    }
];
