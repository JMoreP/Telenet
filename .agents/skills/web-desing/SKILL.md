Habilidad de frontend de alta agencia
1. CONFIGURACIÓN DE BASE ACTIVA
VARIANZA DE DISEÑO: 8 (1=Simetría perfecta, 10=Caos artístico)
INTENSIDAD DE MOVIMIENTO: 6 (1=Estático/Sin movimiento, 10=Física cinematográfica/mágica)
DENSIDAD VISUAL: 4 (1=Galería de arte/Aire acondicionado, 10=Cabina del piloto/Datos empaquetados)
Instrucciones de IA: La configuración estándar para todas las generaciones se establece estrictamente en estos valores (8, 6, 4). No le pida al usuario que edite este archivo. En caso contrario, SIEMPRE escuche al usuario: adapte estos valores dinámicamente según lo que solicite explícitamente en sus mensajes de chat. Utilice estos valores de referencia (o modificados por el usuario) como variables globales para controlar la lógica específica de las secciones 3 a 7.

2. ARQUITECTURA Y CONVENCIONES PREDETERMINADAS
A menos que el usuario especifique explícitamente una pila diferente, respete estas restricciones estructurales para mantener la coherencia:

VERIFICACIÓN DE DEPENDENCIAS [OBLIGATORIA]: Antes de importar CUALQUIER biblioteca de terceros (por ejemplo framer-motion, lucide-react, zustand), DEBE verificar package.json. Si el paquete no está presente, DEBE mostrar el comando de instalación (por ejemplo, npm install package-name) antes de proporcionar el código. Nunca asuma que una biblioteca existe.
Marco de trabajo e interactividad: React o Next.js. Componentes del servidor por defecto ( RSC).
SEGURIDAD RSC: El estado global funciona ÚNICAMENTE en los componentes del cliente. En Next.js, envuelva los proveedores en un "use client"componente.
AISLAMIENTO DE LA INTERACTIVIDAD: Si las secciones 4 o 7 (Motion/Liquid Glass) están activas, el componente de interfaz de usuario interactivo específico DEBE extraerse como un componente hoja aislado en 'use client'la parte superior. Los componentes del servidor deben renderizar exclusivamente diseños estáticos.
Gestión de estado: utilice el estado local useState/ useReducerpara interfaces de usuario aisladas. Utilice el estado global estrictamente para evitar perforaciones profundas de prop.
Política de estilo: Utilizar Tailwind CSS (v3/v4) para el 90% del estilo.
BLOQUEO DE VERSIÓN DE TAILWIND: Verifique package.jsonprimero. No utilice la sintaxis de la versión 4 en proyectos de la versión 3.
T4 CONFIG GUARD: Para v4, NO utilice tailwindcssel complemento en postcss.config.js. Utilice @tailwindcss/postcsso el complemento Vite.
POLÍTICA ANTIEMOJIS [CRÍTICA]: NUNCA utilice emojis en código, marcado, texto o texto alternativo. Reemplace los símbolos con iconos de alta calidad (Radix, Phosphor) o primitivas SVG limpias. Los emojis están PROHIBIDOS.
Capacidad de respuesta y espaciado:
Estandarizar los puntos de interrupción ( sm, md, lg, xl).
Contiene diseños de página que utilizan max-w-[1400px] mx-autoo max-w-7xl.
Estabilidad de la ventana gráfica [CRÍTICA]: NUNCA la utilice h-screenpara secciones Hero de altura completa. SIEMPRE úsela min-h-[100dvh]para evitar saltos de diseño catastróficos en navegadores móviles (iOS Safari).
Grid en lugar de Flex-Math: NUNCA utilice cálculos complejos de porcentajes de flexbox ( w-[calc(33%-1rem)]). SIEMPRE utilice CSS Grid ( grid grid-cols-1 md:grid-cols-3 gap-6) para estructuras fiables.
Iconos: DEBE usar exactamente @phosphor-icons/reacto @radix-ui/react-iconscomo rutas de importación (verifique la versión instalada). Estandarice strokeWidthglobalmente (por ejemplo, use exclusivamente 1.5o 2.0).
3. DIRECTRICES DE INGENIERÍA DE DISEÑO (Corrección de sesgo)
Los modelos LLM presentan sesgos estadísticos hacia patrones de interfaz de usuario clichés específicos. Construya interfaces de alta calidad de forma proactiva utilizando estas reglas de ingeniería:

Regla 1: Tipografía determinista

Visualización/Titulares: Predeterminado a text-4xl md:text-6xl tracking-tighter leading-none.
ANTI-SLOP: Desaconseja Interlas vibraciones "Premium" o "Creativas". Fuerza un carácter único usando Geist, Outfit, Cabinet Grotesk, o Satoshi.
REGLA DE INTERFAZ DE USUARIO TÉCNICA: Las fuentes con serifa están estrictamente PROHIBIDAS para las interfaces de usuario de paneles de control/software. Para estos contextos, utilice exclusivamente combinaciones de fuentes sans-serif de alta gama ( Geist+ Geist Monoo Satoshi+ JetBrains Mono).
Cuerpo/Párrafos: Por defecto text-base text-gray-600 leading-relaxed max-w-[65ch], .
Regla 2: Calibración del color

Restricción: Máximo 1 color de acento. Saturación < 80%.
LA PROHIBICIÓN DE LILA: La estética "AI Purple/Blue" está estrictamente PROHIBIDA. No se permiten brillos morados en los botones ni degradados neón. Utilice bases neutras absolutas (Zinc/Slate) con acentos únicos de alto contraste (por ejemplo, Esmeralda, Azul Eléctrico o Rosa Intenso).
CONSISTENCIA DEL COLOR: Utilice una sola paleta de colores para todo el resultado final. No alterne entre grises cálidos y fríos dentro del mismo proyecto.
Regla 3: Diversificación del diseño

SESGO ANTICENTRAL: Las secciones Hero/H1 centradas están estrictamente PROHIBIDAS cuando LAYOUT_VARIANCE > 4se fuerzan las estructuras de "Pantalla dividida" (50/50), "Contenido alineado a la izquierda/Recurso alineado a la derecha" o "Espacio en blanco asimétrico".
Regla 4: Materialidad, sombras y "anti-abuso de cartas"

REFUERZO DEL PANEL DE CONTROL: Para VISUAL_DENSITY > 7, los contenedores de tarjetas genéricos están estrictamente PROHIBIDOS. Utilice la agrupación lógica mediante border-t, divide-y, o espacio puramente negativo. Las métricas de datos deben respirar sin estar encerradas a menos que la elevación (índice z) sea funcionalmente necesaria.
Ejecución: Utilice las tarjetas ÚNICAMENTE cuando la elevación indique jerarquía. Cuando se utilice una sombra, ajústela al color del fondo.
Regla 5: Estados de la interfaz de usuario interactiva

Generación obligatoria: Los LLM generan de forma natural estados exitosos "estáticos". DEBE implementar ciclos de interacción completos:
Carga: Cargadores esqueléticos que coincidan con los tamaños del diseño (evite los giratorios circulares genéricos).
Estados vacíos: Estados vacíos bellamente diseñados que indican cómo rellenar los datos.
Estados de error: Informes de error claros y en línea (por ejemplo, en formularios).
Retroalimentación táctil: En :active, use -translate-y-[1px]o scale-[0.98]para simular un empujón físico que indique éxito/acción.
Regla 6: Patrones de datos y formularios

Formularios: La etiqueta DEBE estar encima del campo de entrada. El texto auxiliar es opcional, pero debe estar presente en el marcado. El texto de error debe estar debajo del campo de entrada. Utilice un estándar gap-2para los bloques de entrada.
4. PROACTIVIDAD CREATIVA (Implementación contra el desperdicio)
Para combatir activamente los diseños genéricos de IA, implemente sistemáticamente estos conceptos de codificación de alto nivel como base:

Refracción de "vidrio líquido": cuando se necesita el morphismo del vidrio, vaya más allá backdrop-blur. Agregue un borde interior de 1 px ( border-white/10) y una sutil sombra interior ( shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]) para simular la refracción física del borde.
Microfísica magnética (si MOTION_INTENSITY > 5): Implementa botones que se desplacen ligeramente hacia el cursor del ratón. IMPORTANTE: NUNCA uses React useStatepara animaciones magnéticas de desplazamiento o continuas. Usa EXCLUSIVAMENTE Framer Motion useMotionValuey useTransformfuera del ciclo de renderizado de React para evitar la caída del rendimiento en dispositivos móviles.
Micro-interacciones perpetuas: Cuando se MOTION_INTENSITY > 5, se incorporan micro-animaciones continuas e infinitas (Pulso, Máquina de escribir, Flotar, Destello, Carrusel) en componentes estándar (avatares, puntos de estado, fondos). Se aplica la física de resorte premium ( type: "spring", stiffness: 100, damping: 20) a todos los elementos interactivos, sin suavizado lineal.
Transiciones de diseño:layout utilice siempre las propiedades y funciones de Framer Motion layoutIdpara lograr transiciones fluidas entre elementos compartidos y reordenados, así como entre cambios de estado.
Orquestación escalonada: No monte listas ni cuadrículas instantáneamente. Use staggerChildren(Framer) o cascada CSS ( animation-delay: calc(var(--index) * 100ms)) para crear revelaciones secuenciales en cascada. CRÍTICO: Para staggerChildren, el Padre ( variants) y los Hijos DEBEN residir en el mismo árbol de Componente Cliente. Si los datos se obtienen de forma asíncrona, páselos como props a un contenedor de Movimiento Padre centralizado.
5. BARRERAS DE SEGURIDAD PARA EL DESEMPEÑO
Costo del DOM: Aplique filtros de grano/ruido exclusivamente a los pseudoelementos fijos, pointer-event-none (por ejemplo, fixed inset-0 z-50 pointer-events-none) y NUNCA a los contenedores desplazables para evitar repintados continuos de la GPU y degradación del rendimiento móvil.
Aceleración de hardware: Nunca anime top, left, width, o height. Anime exclusivamente a través de transformy opacity.
Restricción del índice Z: NUNCA utilice índices Z arbitrarios z-50o z-10sin solicitud previa. Utilice los índices Z exclusivamente para contextos de capas del sistema (barras de navegación fijas, modales, superposiciones).
6. REFERENCIA TÉCNICA (Definiciones de la marcación)
VARIANZA DE DISEÑO (Nivel 1-10)
1-3 (Predecible): Flexbox justify-center, cuadrículas simétricas estrictas de 12 columnas, rellenos iguales.
4-7 (Desplazamiento): Utilice margin-top: -2remrelaciones de aspecto de imagen variadas y superpuestas (por ejemplo, 4:3 junto a 16:9), encabezados alineados a la izquierda sobre datos alineados al centro.
8-10 (Asimétrico): Diseños de mampostería, cuadrícula CSS con unidades fraccionarias (por ejemplo, grid-template-columns: 2fr 1fr 1fr), zonas vacías masivas ( padding-left: 20vw).
ANULACIÓN PARA DISPOSITIVOS MÓVILES: Para los niveles 4-10, cualquier diseño asimétrico anterior md:DEBE recurrir agresivamente a un diseño estricto de una sola columna ( w-full, px-4, py-8) en las ventanas gráficas < 768pxpara evitar el desplazamiento horizontal y la rotura del diseño.
INTENSIDAD DE MOVIMIENTO (Nivel 1-10)
1-3 (Estático): Sin animaciones automáticas. Solo CSS :hovery :activeestados.
4-7 (CSS fluido): Utilice transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1). Utilice animation-delaycascadas para cargas. Concéntrese estrictamente en transformy opacity. Úselo will-change: transformcon moderación.
8-10 (Coreografía avanzada): Revelaciones complejas activadas por desplazamiento o paralaje. Utilice ganchos de Framer Motion. NUNCA utilice window.addEventListener('scroll').
DENSIDAD VISUAL (Nivel 1-10)
1-3 (Modo Galería de Arte): Mucho espacio en blanco. Grandes huecos entre secciones. Todo se ve muy caro y limpio.
4-7 (Modo de aplicación diaria): Espaciado normal para aplicaciones web estándar.
8-10 (Modo Cabina): Mínimos márgenes. Sin recuadros; solo líneas de 1 píxel para separar los datos. Todo está comprimido. Obligatorio: Usar fuente monoespaciada ( font-mono) para todos los números.
7. LA IA DECIDE (Patrones prohibidos)
Para garantizar un resultado de primera calidad y no genérico, DEBE evitar estrictamente estas características comunes del diseño de IA, a menos que se le soliciten explícitamente:

Visual y CSS
SIN Resplandores Neón/Exteriores: No utilice box-shadowlos resplandores predeterminados ni los automáticos. Utilice bordes interiores o sombras sutiles con distintos tonos.
NO Negro puro: Nunca lo use #000000. Use negro apagado, zinc-950 o carbón.
SIN acentos sobresaturados: Desatura los acentos para que se integren elegantemente con los tonos neutros.
SIN degradados excesivos en el texto: No utilice degradados de relleno de texto para encabezados grandes.
NO se permiten cursores de ratón personalizados: están desactualizados y perjudican el rendimiento y la accesibilidad.
Tipografía
NO Inter Font: Prohibido. Use Geist, Outfit, Cabinet Grotesk, o Satoshi.
NO usar encabezados H1 de gran tamaño: El primer encabezado no debe llamar demasiado la atención. Controla la jerarquía con grosor y color, no solo con un tamaño excesivo.
Restricciones sobre fuentes con serifa: Utilice fuentes con serifa ÚNICAMENTE para diseños creativos/editoriales. NUNCA utilice fuentes con serifa en paneles de control limpios.
Diseño y espaciado
Alineación y espaciado perfectos: Asegúrese de que el relleno y los márgenes sean matemáticamente perfectos. Evite elementos flotantes con espacios incómodos.
NO SE ADMITEN DISEÑOS DE TARJETAS DE 3 COLUMNAS: La fila genérica de "3 tarjetas iguales horizontalmente" está PROHIBIDA. En su lugar, utilice un diseño en zigzag de 2 columnas, una cuadrícula asimétrica o un desplazamiento horizontal.
Contenido y datos (El efecto "Jane Doe")
No se permiten nombres genéricos: "John Doe", "Sarah Chan" o "Jack Su" están prohibidos. Utilice nombres muy creativos y que suenen realistas.
NO se permiten avatares genéricos: NO utilice los iconos estándar SVG "huevo" ni los iconos de usuario de Lucide para los avatares. Utilice marcadores de posición fotográficos creativos y creíbles o un estilo específico.
NO números falsos: Evite resultados predecibles como 99.99%, 50%, o números de teléfono básicos ( 1234567). Use datos orgánicos y desordenados ( 47.2%, +1 (312) 847-1928).
No uses nombres de marca mediocres como "Acme", "Nexus" o "SmartFlow". Inventa nombres de marca premium y contextuales.
Sin palabras de relleno: Evite los clichés de redacción publicitaria sobre IA como "Elevar", "Sin fisuras", "Desatar" o "Próxima generación". Utilice verbos concretos.
Recursos y componentes externos
NO uses enlaces rotos de Unsplash: No uses Unsplash. Usa marcadores de posición absolutos y confiables como https://picsum.photos/seed/{random_string}/800/600avatares de interfaz de usuario SVG.
Personalización de shadcn/ui: Puede usar shadcn/ui, pero NUNCA en su estado predeterminado genérico. DEBE personalizar los radios, colores y sombras para que coincidan con la estética de un proyecto de alta gama.
Limpieza y preparación para la producción: El código debe ser extremadamente limpio, visualmente impactante, memorable y meticulosamente refinado en cada detalle.
8. EL ARSENAL CREATIVO (Inspiración de alta gama)
No utilices una interfaz de usuario genérica por defecto. Aprovecha esta biblioteca de conceptos avanzados para garantizar un resultado visualmente impactante y memorable. Cuando sea apropiado, utiliza GSAP (ScrollTrigger/Parallax) para la narración de desplazamiento compleja o ThreeJS/WebGL para animaciones 3D/Canvas, en lugar de movimiento CSS básico. IMPORTANTE: Nunca combines GSAP/ThreeJS con Framer Motion en el mismo árbol de componentes. Utiliza Framer Motion por defecto para las interacciones de la interfaz de usuario/Bento. Usa GSAP/ThreeJS EXCLUSIVAMENTE para la narración de desplazamiento de página completa aislada o fondos de lienzo, envueltos en bloques de limpieza de useEffect estrictos.

El paradigma del héroe estándar
Deja de centrar el texto sobre una imagen oscura. Prueba con secciones Hero asimétricas: texto alineado a la izquierda o a la derecha. El fondo debe presentar una imagen relevante y de alta calidad con un sutil efecto de transición (que se oscurezca o aclare gradualmente con el color de fondo, según se trate del modo claro u oscuro).
Navegación y menús
Ampliación del Dock de Mac OS: la barra de navegación se sitúa en el borde; los iconos se escalan de forma fluida al pasar el cursor por encima.
Botón magnético: Botones que se atraen físicamente hacia el cursor.
Menú pegajoso: Los subelementos se desprenden del botón principal como un líquido viscoso.
Isla dinámica: Un componente de interfaz de usuario con forma de píldora que se transforma para mostrar el estado o las alertas.
Menú radial contextual: Un menú circular que se expande exactamente en las coordenadas donde se hace clic.
Selector de velocidad flotante: Un FAB que se despliega en una línea curva de acciones secundarias.
Presentación del Mega Menú: Menús desplegables a pantalla completa que muestran contenido complejo con efecto de desvanecimiento escalonado.
Diseño y cuadrículas
Bento Grid: Agrupación asimétrica basada en mosaicos (por ejemplo, el Centro de control de Apple).
Diseño tipo mampostería: cuadrícula escalonada sin alturas de fila fijas (por ejemplo, Pinterest).
Cuadrícula cromática: Bordes o mosaicos de cuadrícula que muestran degradados de color sutiles y en constante animación.
Desplazamiento en pantalla dividida: Dos mitades de la pantalla se deslizan en direcciones opuestas al desplazarse.
Revelación del telón: Una sección principal que se abre por la mitad como un telón en un pergamino.
Tarjetas y contenedores
Tarjeta de inclinación Parallax: Una tarjeta con inclinación 3D que rastrea las coordenadas del ratón.
Tarjeta con borde destacado: Bordes de tarjeta que se iluminan dinámicamente bajo el cursor.
Panel Glassmorphism: Vidrio esmerilado auténtico con bordes de refracción internos.
Tarjeta con lámina holográfica: reflejos de luz iridiscentes con efecto arcoíris que cambian al pasar el cursor por encima.
Pila de tarjetas Tinder: Una pila física de tarjetas que el usuario puede deslizar para descartar.
Modal transformable: Un botón que se expande sin problemas para convertirse en su propio contenedor de diálogo a pantalla completa.
Animaciones de desplazamiento
Pila de tarjetas adhesivas: Tarjetas que se adhieren a la parte superior y se apilan físicamente unas sobre otras.
Desplazamiento horizontal: El desplazamiento vertical se traduce en un desplazamiento horizontal fluido de la galería.
Secuencia de desplazamiento tipo locomotora: Secuencias de vídeo/3D donde la velocidad de fotogramas está directamente vinculada a la barra de desplazamiento.
Zoom Parallax: Una imagen de fondo central que se acerca o aleja de forma fluida a medida que te desplazas.
Ruta de progreso de desplazamiento: líneas o rutas vectoriales SVG que se dibujan a medida que el usuario se desplaza.
Transición de deslizamiento líquido: Transiciones de página que limpian la pantalla como un líquido viscoso.
Galerías y medios
Galería Dome: Una galería 3D que ofrece la sensación de estar dentro de una cúpula panorámica.
Carrusel Coverflow: Carrusel 3D con el centro enfocado y los bordes inclinados hacia atrás.
Cuadrícula desplazable: una cuadrícula sin límites que puedes arrastrar libremente en cualquier dirección cardinal.
Deslizador de imágenes tipo acordeón: estrechas franjas de imágenes verticales/horizontales que se expanden completamente al pasar el cursor por encima.
Rastro de imágenes al pasar el ratón: El ratón deja un rastro de imágenes que aparecen y desaparecen a su paso.
Imagen con efecto glitch: Distorsión digital breve con cambio de canal RGB al pasar el cursor por encima.
Tipografía y texto
Marquesina cinética: Bandas de texto infinitas que cambian de dirección o aumentan de velocidad al desplazarse.
Revelación de máscara de texto: Tipografía masiva que actúa como una ventana transparente a un fondo de vídeo.
Efecto de distorsión de texto: decodificación de caracteres al estilo Matrix al cargar o al pasar el cursor por encima.
Trayectoria de texto circular: Texto curvado a lo largo de una trayectoria circular giratoria.
Animación de trazo degradado: Texto delineado con un degradado que recorre continuamente el trazo.
Cuadrícula tipográfica cinética: una cuadrícula de letras que se mueven esquivando o girando alejándose del cursor.
Microinteracciones y efectos
Botón de explosión de partículas: Llamadas a la acción que se fragmentan en partículas al activarse.
Liquid Pull-to-Refresh: Indicadores de recarga en dispositivos móviles que simulan gotas de agua que se desprenden.
Esqueleto brillante: reflejos de luz cambiantes que se mueven a través de cuadros de marcador de posición.
Botón con detección de dirección al pasar el ratón: El relleno se realiza al pasar el ratón por el lado exacto por donde entró.
Efecto de clic en onda: Ondas visuales que se propagan con precisión desde las coordenadas del clic.
Dibujo lineal SVG animado: Vectores que dibujan sus propios contornos en tiempo real.
Fondo con degradado de malla: manchas de color animadas, orgánicas, que recuerdan a una lámpara de lava.
Profundidad de desenfoque de lente: Desenfoque de enfoque dinámico de las capas de la interfaz de usuario de fondo para resaltar una acción en primer plano.
9. EL PARADIGMA BENTO "MOTOR DE MOVIMIENTO"
Al generar paneles de control o secciones de funciones SaaS modernas, DEBE utilizar la siguiente arquitectura y filosofía de movimiento "Bento 2.0". Esto va más allá de las tarjetas estáticas e impone una estética que combina el núcleo de Vercel con la limpieza de Dribbble, basada en gran medida en la física perpetua.

A. Filosofía de diseño fundamental
Estética: De alta gama, minimalista y funcional.
Paleta: Fondo en #f9fafb. Las tarjetas son de color blanco puro ( #ffffff) con un borde de 1px de border-slate-200/50.
Superficies: Úselo rounded-[2.5rem]para todos los contenedores principales. Aplique una "sombra difusa" (una sombra muy ligera y amplia, por ejemplo shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]) para crear profundidad sin saturar la imagen.
Tipografía: Estricta Geist, Satoshi, o Cabinet Groteskpila de fuentes. Utilice espaciado sutil ( tracking-tight) para los encabezados.
Etiquetas: Los títulos y las descripciones deben colocarse fuera y debajo de las tarjetas para mantener una presentación limpia, al estilo de una galería.
Perfección de píxeles: utilice un relleno generoso p-8en p-10el interior de las tarjetas.
B. Especificaciones del motor de animación (movimiento perpetuo)
Todas las cartas deben contener "Microinteracciones perpetuas". Utilice los siguientes principios de Framer Motion:

Física de resortes: Sin suavizado lineal. Úselo type: "spring", stiffness: 100, damping: 20para una sensación premium y con peso.
Transiciones de diseño: utilice ampliamente las propiedades layouty layoutIdpara garantizar transiciones fluidas de reordenamiento, redimensionamiento y estado de elementos compartidos.
Bucles infinitos: Cada tarjeta debe tener un "estado activo" que se repita infinitamente (Pulso, Máquina de escribir, Flotante o Carrusel) para garantizar que el panel de control se sienta "vivo".
Rendimiento: Envuelve las listas dinámicas <AnimatePresence>y optimízalas para 60 fps. RENDIMIENTO CRÍTICO: Cualquier movimiento perpetuo o bucle infinito DEBE estar memorizado (React.memo) y completamente aislado en su propio componente de cliente microscópico. Nunca actives nuevas renderizaciones en el diseño padre.
C. Los arquetipos de 5 cartas (Especificaciones de microanimación)
Implemente estas microanimaciones específicas al construir cuadrículas Bento (por ejemplo, Fila 1: 3 columnas | Fila 2: 2 columnas divididas 70/30):

La Lista Inteligente: Una pila vertical de elementos con un bucle de autoordenación infinito. Los elementos intercambian posiciones mediante layoutId, simulando una IA que prioriza tareas en tiempo real.
Entrada de comandos: Una barra de búsqueda/IA con un efecto de máquina de escribir de varios pasos. Muestra indicaciones complejas, incluyendo un cursor parpadeante y un estado de "procesando" con un degradado de carga brillante.
Estado en vivo: Una interfaz de programación con indicadores de estado dinámicos. Incluye una notificación emergente que aparece con un efecto de resorte, permanece visible durante 3 segundos y desaparece.
Flujo de datos amplio: Un "carrusel infinito" horizontal de tarjetas de datos o métricas. Asegúrese de que el bucle sea continuo (usando x: ["0%", "-100%"]) con una velocidad que parezca sin esfuerzo.
Interfaz de usuario contextual (modo de enfoque): una vista de documento que anima el resaltado escalonado de un bloque de texto, seguido de la aparición de una barra de herramientas de acciones flotante con microiconos.
10. COMPROBACIÓN FINAL PREVIA AL VUELO
Evalúa tu código con esta matriz antes de mostrar el resultado. Este es el último filtro que aplicas a tu lógica.

¿Se utiliza el Estado global de forma apropiada para evitar perforaciones profundas en lugar de hacerlo de forma arbitraria?
¿ Está garantizado el colapso del diseño móvil ( w-full, px-4, max-w-7xl mx-auto) para diseños de alta varianza?
¿Se pueden usar secciones de altura completa de forma segura min-h-[100dvh]en lugar de la que tiene errores h-screen?
¿Las animaciones contienen useEffectfunciones de limpieza estrictas?
¿Se proporcionan los estados vacío, de carga y de error?
¿Se omiten las tarjetas para dejar espacio en la medida de lo posible?
¿Aislaste estrictamente las animaciones continuas que consumen muchos recursos de la CPU en sus propios componentes de cliente?