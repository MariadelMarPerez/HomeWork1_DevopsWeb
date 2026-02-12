# Taller Introduccion Aplicaciones Web
## Parte Teórica - MARIA DEL MAR PEREZ MONTENEGRO 611
### Solucion

1. **¿Qué es HTML y cuál es su función en la web?**
> HTML (HyperText Markup Language) se entiende como un sistema de etiquetas que permite definir la estructura del contenido de una página web. Es el encargado de indicar al navegador qué tipo de elemento debe mostrar (como títulos, párrafos o imágenes) de acuerdo a la estructura descrita en dicho archivo.

2. **¿Qué es una etiqueta HTML y menciona las etiquetas más comunes?**
>Las etiqueta son codigos utilizados para definir los elementos en  la estructura del documento, con el fin de dar instrucciones al navegador de  como mostrarlo  
### Etiquetas HTML 
| Etiqueta | Función | (Sintaxis) |
| :--- | :--- | :--- |
| **Documento** | | |
| `<!DOCTYPE>` | Indica al navegador que edocumento es HTML5. | `<!DOCTYPE html>` |
| `<html>` | Contenedor principal que envuelve todo el código. | `<html>...</html>` |
| `<head>` | Contiene metadatos, títulos y enlaces a estilos. | `<head>...</head>` |
| `<body>` | Contiene toda la parte visual de la página. | `<body>...</body>` |
| **Texto** | | |
| `<h1>` - `<h6>` | Títulos jerárquicos (del más grande al más pequeño). | `<h1>Mi Título</h1>` |
| `<p>` | Define un bloque de texto como párrafo. | `<p>Contenido del texto.</p>` |
| `<strong>` | Define texto con importancia fuerte (se ve en negrita). | `<strong>Texto resaltado</strong>` |
| `<em>` | Énfasis tipográfico (se ve en cursiva). | `<em>Texto enfatizado</em>` |
| `<br>` | Salto de línea forzado (sin etiqueta de cierre). | `Línea 1 <br> Línea 2` |
| **Listas** | | |
| `<ul>` | Lista desordenada (usa puntos o viñetas). | `<ul>...</ul>` |
| `<ol>` | Lista ordenada (usa números o letras). | `<ol>...</ol>` |
| `<li>` | Representa un elemento dentro de una lista. | `<li>Elemento 1</li>` |
| **Multimedia** | | |
| `<a>` | Hipervínculo para navegar a otras URLs. | `<a href="url">Texto</a>` |
| `<img>` | Inserta una imagen en el documento. | `<img src="ruta" alt="texto">` |
| `<video>` | Inserta un reproductor de video. | `<video src="url" controls></video>` |
| `<audio>` | Inserta un reproductor de sonido. | `<audio src="url" controls></audio>` |
| **Contenedores** | | |
| `<div>` | Contenedor de bloque para agrupar elementos. | `<div>...</div>` |
| `<span>` | Contenedor de línea para fragmentos de texto. | `<span>...</span>` |
| `<header>` | Cabecera de la página o de una sección. | `<header>...</header>` |
| `<footer>` | Pie de página con créditos o información. | `<footer>...</footer>` |
| `<nav>` | Sección que contiene enlaces de navegación. | `<nav>...</nav>` |
| **Interactivos** | | |
| `<form>` | Define un formulario para recoger datos. | `<form>...</form>` |
| `<input>` | Campo de entrada de datos (texto, clave, etc). | `<input type="text">` |
| `<button>` | Crea un botón clicable. | `<button>Clic aquí</button>` |
| `<label>` | Define una etiqueta para un campo `<input>`. | `<label>Nombre:</label>` |

3. **¿Qué es un atributo de una etiqueta HTML y menciona los más comunes?**
>Los atributos se consideran información adicional que se agrega a las etiquetas para proporcionar al navegador instrucciones sobre cómo debe aparecer o comportarse el elemento. Estos siempre constan de un nombre y un valor, separados por un signo de igual (=) y el valor encerrado entre comillas.
### Atributos HTML
| Atributo | Función | Sintaxis|
| :--- | :--- | :--- |
| **Globales** | (Se pueden usar en casi cualquier etiqueta) | |
| `id` | Define un identificador único para un elemento. No puede repetirse en la misma página. | `<div id="encabezado">` |
| `class` | Asigna una o varias clases para aplicar estilos CSS o seleccionar en JS. | `<p class="texto-azul">` |
| `style` | Permite escribir código CSS directamente dentro del elemento (estilos en línea). | `<h1 style="color: red;">` |
| `title` | Muestra un texto informativo (tooltip) al pasar el ratón sobre el elemento. | `<span title="Más info">...</span>` |
| `lang` | Indica el idioma principal del contenido del elemento. | `<html lang="es">` |
| **Específicos** | (Dependen de la etiqueta donde se usen) | |
| `href` | Indica la dirección URL a la que apunta un enlace (`<a>`). | `<a href="https://google.com">` |
| `src` | Define la ruta o fuente de un archivo externo (imagen, script, video). | `<img src="foto.jpg">` |
| `alt` | Texto alternativo que aparece si una imagen no carga o para lectores de pantalla. | `<img alt="Logo de la empresa">` |
| `target` | Indica dónde abrir un enlace (ej: `_blank` abre en nueva pestaña). | `<a target="_blank">` |
| `type` | Define el comportamiento de un `<input>` (texto, clave, checkbox, etc.). | `<input type="password">` |
| `value` | Define el valor inicial o el contenido de un campo de formulario. | `<input value="Juan">` |
| `placeholder` | Texto de ayuda que aparece dentro de un campo antes de escribir. | `<input placeholder="Tu correo">` |
| `required` | Obliga al usuario a llenar ese campo antes de enviar un formulario. | `<input required>` |
| `width` / `height` | Define el ancho y el alto de elementos como imágenes o videos. | `<img width="500" height="300">` |
4. **¿Qué es CSS y cómo se utiliza para el diseño web?**
>CSS (Cascading Style Sheets o Hojas de Estilo en Cascada) es el lenguaje de diseño encargado de la presentación visual de una página web. este le indica al navegador cómo debe mostrarse la estructura, controlando aspectos como el color, la tipografía, el tamaño, los espacios y la disposición de los elementos (layout).
Se utiliza vinculando un archivo de estilos al documento HTML, permitiendo separar el contenido del diseño para que el mantenimiento del sitio sea más eficiente.

5. **¿Qué es una propiedad en CSS y menciona las propiedades más comunes?**
>Una propiedad en CSS es una característica técnica o atributo específico que se utiliza para controlar el aspecto y el comportamiento visual de los elementos HTML. Estas actúan como variables de diseño que aceptan un valor determinado (como unidades de medida, colores etc.), permitiendo alterar la apariencia de la estructura original.
Cada propiedad forma parte de una declaración de estilo, donde se asigna un valor a una característica específica para transformar cómo el navegador muestra el contenido.
### Tabla Propiedades CSS 
| Categoría | Propiedad | Función Detallada y Comportamiento | Sintaxis  |
| :--- | :--- | :--- | :--- |
| **Arquitectura de Caja** | `box-sizing` | **Crítica:** Controla el cálculo del tamaño. `border-box` evita que el padding y borde aumenten el ancho total. | `box-sizing: border-box;` |
| | `width` / `height` | Determinan las dimensiones físicas. Se pueden usar píxeles, porcentajes o unidades relativas (`em`, `rem`, `vh`). | `width: 100%;` |
| | `margin` | Crea espacio externo invisible para separar el elemento de sus vecinos. `auto` permite centrar bloques. | `margin: 10px auto;` |
| | `padding` | Espacio interno entre el contenido y el borde. Expande el área visual del fondo. | `padding: 20px 10px;` |
| | `border` | Define simultáneamente el grosor, el estilo (solid, dashed, dotted) y el color del contorno. | `border: 2px solid #000;` |
| **Control de Flujo** | `display` | La más potente: define si es bloque, línea, o si activa sistemas avanzados como **Flexbox** o **Grid**. | `display: flex;` |
| | `position` | Define el sistema de coordenadas: `relative` (sobre sí mismo) o `absolute` (respecto al padre posicionado). | `position: absolute;` |
| | `top/bottom/left/right` | Coordenadas exactas para mover elementos que tienen una `position` definida. | `top: 50px; left: 0;` |
| | `z-index` | Controla la profundidad en el eje Z. Determina qué elementos se superponen sobre otros. | `z-index: 100;` |
| | `overflow` | Decide qué ocurre si el contenido se sale: puede cortarse (`hidden`) o mostrar barras (`scroll`). | `overflow: auto;` |
| | `float` | Empuja un elemento a la izquierda o derecha, permitiendo que el texto lo rodee. | `float: left;` |
| **Tipografía** | `color` | Define exclusivamente el tono cromático de los caracteres de texto. | `color: #ff5733;` |
| | `font-size` | Define la escala del texto. Se recomienda `rem` para mejorar la accesibilidad y el diseño responsivo. | `font-size: 1.5rem;` |
| | `font-family` | Establece la tipografía o lista de fuentes de respaldo (fallback) separadas por comas. | `font-family: Arial, sans;` |
| | `font-weight` | Define el grosor del trazo de la letra (desde 100 hasta 900 o `bold`). | `font-weight: 700;` |
| | `line-height` | Controla la altura de la caja de texto, mejorando la legibilidad al separar líneas. | `line-height: 1.6;` |
| | `text-align` | Alineación horizontal del contenido (left, center, right, justify). | `text-align: center;` |
| | `text-transform` | Controla mayúsculas y minúsculas de forma automática. | `text-transform: uppercase;` |
| | `letter-spacing` | Define el espacio horizontal exacto entre cada letra del texto. | `letter-spacing: 2px;` |
| | `text-shadow` | Añade efectos de sombra directamente a los caracteres de texto. | `text-shadow: 2px 2px #000;` |
| **Diseño Moderno** | `flex-direction` | En Flexbox, define si los hijos se alinean en fila (`row`) o en columna (`column`). | `flex-direction: column;` |
| | `justify-content` | Distribuye el espacio sobrante entre los hijos a lo largo del eje principal. | `justify-content: center;` |
| | `align-items` | Alinea los elementos hijos en el eje perpendicular (eje cruzado). | `align-items: center;` |
| | `gap` | Define el espacio exacto entre ítems en Flex y Grid sin afectar los bordes externos. | `gap: 20px;` |
| | `flex-wrap` | Permite que los elementos salten a la siguiente línea si no caben en la actual. | `flex-wrap: wrap;` |
| | `grid-template-columns` | En Grid, define la estructura de las columnas y su tamaño (usando `fr` para fracciones). | `grid-template-columns: 1fr 1fr;` |
| **Estética y Efectos** | `background-color`| Establece un color sólido para el fondo de la caja. | `background-color: red;` |
| | `background-image`| Inserta una imagen de fondo mediante una ruta URL. | `background-image: url('f.jpg');` |
| | `border-radius` | Redondea las esquinas. Un valor del `50%` convierte cajas en círculos. | `border-radius: 5px;` |
| | `opacity` | Define la transparencia global (de 0 a 1). Afecta al elemento y a sus hijos. | `opacity: 0.5;` |
| | `box-shadow` | Crea profundidad mediante sombras aplicadas a la caja (X, Y, desenfoque, color). | `box-shadow: 0 4px 8px #ccc;` |
| | `filter` | Aplica efectos gráficos como desenfoque (`blur`), brillo o escala de grises. | `filter: blur(5px);` |
| | `cursor` | Cambia la forma del puntero del ratón para indicar interactividad. | `cursor: pointer;` |
| | `transition` | Define la duración y curva de suavizado para los cambios de estado. | `transition: all 0.3s ease;` |
| | `transform` | Permite rotar, escalar, mover o inclinar el elemento físicamente. | `transform: rotate(45deg);` |

6. **¿Qué es un selector en CSS y cuáles tipos existen?**
 > Un selector es el patron tecnico que permite identificar y delimitar  el o los elementos HTML de la pagina web, que se les quiere aplicar determinados estilos , este define el conjunto de elementos a los que afectarán determinados atributos CSS.
 #### Selectores CSS
| Categoría | Nombre | Selector | Función y Uso Técnico | Ejemplo de Sintaxis |
| :--- | :--- | :--- | :--- | :--- |
| **Básicos** | **Universal** | `*` | Selecciona todos los elementos del documento. Útil para resetear estilos globales. | `* { margin: 0; }` |
| | **Etiqueta** | `elemento` | Apunta a todas las etiquetas HTML del mismo tipo. Define estilos base. | `p { color: grey; }` |
| | **Clase** | `.clase` | Selecciona elementos con un atributo `class` específico. Es reutilizable y el más común. | `.btn { border: none; }` |
| | **ID** | `#id` | Apunta a un único elemento con un `id` único. Tiene alta prioridad (especificidad). | `#header { height: 80px; }` |
| **Combinadores** | **Descendiente** | `A B` | Selecciona todos los elementos `B` que estén dentro de `A` (hijos, nietos, etc.). | `div p { font-size: 14px; }` |
| | **Hijo Directo** | `A > B` | Selecciona solo los elementos `B` que son hijos inmediatos de `A`. | `ul > li { padding: 5px; }` |
| | **Adyacente** | `A + B` | Selecciona el elemento `B` que sigue inmediatamente después de `A`. | `h1 + p { margin-top: 0; }` |
| | **Hermano General**| `A ~ B` | Selecciona todos los elementos `B` que siguen a `A` en el mismo nivel. | `h2 ~ p { color: #666; }` |
| **Atributos** | **Atributo** | `[attr]` | Selecciona elementos que tienen un atributo específico o un valor exacto. | `input[type="text"] { ... }` |
| **Pseudo-clases** | **Estado** | `:hover` | Cambia el estilo cuando el usuario pasa el puntero sobre el elemento. | `a:hover { color: blue; }` |
| | **Estructura** | `:nth-child(n)`| Selecciona un elemento según su posición en un grupo de hermanos. | `li:nth-child(odd) { ... }` |
| **Pseudo-elementos**| **Generación** | `::before` | Inserta contenido decorativo antes del contenido real del elemento. | `p::before { content: "★"; }` |
| | **Generación** | `::after` | Inserta contenido decorativo después del contenido real del elemento. | `a::after { content: " ↗"; }` |

7. **¿Qué es JavaScript y cómo añade la interactividad a las páginas web?**
> JavaScript(JS) es un lenguaje de programación de scripts ligero, interpretado y orientado a objetos, que actúa como la capa de comportamiento en el desarrollo web, este permite crear contenido dinámico, añadiendo funcionalidades Interactivas, que le permiten al navegador responder  a eventos del usuario (clics, desplazamientos, envío de formularios) ademas de modificar el HTML/CSS en tiempo real. Logrando alterar el contenido, la estructura y los estilos del HTML mientras el usuario navega.

8. **¿Cuáles son los tipos de datos primitivos en JavaScript?**
 > ###  Tipos de Datos Primitivos JS
| Tipo | Función | Sintaxis de Declaración |
| :--- | :--- | :--- |
| **String** | Texto | `let texto = "Hola";` |
| **Number** | Números | `const total = 500;` |
| **Boolean** | Lógica | `let esActivo = true;` |
| **Undefined**| No definido | `let x;` |
| **Null** | Vacío | `let data = null;` |
| **Symbol** | Único | `const clave = Symbol("id");` |
| **BigInt** | Gran tamaño | `let valor = 9007n;` |
> **Importante:** > * Usamos **`let`** para datos que pueden cambiar durante la ejecución.
> * Usamos **`const`** para datos que permanecerán constantes.
> * Los primitivos se declaran asignando el valor directamente después del operador `=`.

9. **¿Cómo funcionan las estructuras de control de flujo como if, else, switch y bucles en JavaScript?**
>### Estructuras de Control de Flujo 
| Categoría | Estructura | Sintaxis (Estructura) | ¿Cómo funciona?| Uso Principal |
| :--- | :--- | :--- | :--- | :--- |
| **Condicionales** | **`if / else`** | `if (condición) { ... } else { ... }` | Evalúa una condición lógica. Si es verdadera, ejecuta el primer bloque; si es falsa, ejecuta el bloque `else`. | Tomar decisiones simples o binarias (sí/no). |
| (Decisiones) | **`else if`** | `if (c1) { ... } else if (c2) { ... }` | Permite evaluar múltiples condiciones en orden. Solo se ejecuta el bloque de la primera condición que sea verdadera. | Cuando existen tres o más caminos posibles. |
| | **`switch`** | `switch(valor) { case x: ... break; }` | Compara un único valor contra una lista de casos específicos (`case`) usando igualdad estricta. | Menús de opciones o selección de valores fijos conocidos. |
| **Bucles** | **`for`** | `for (inicio; cond; incremento) { ... }` | Utiliza un contador. Mientras la condición sea cierta, ejecuta el código y luego actualiza el contador. | Repetir una tarea un número exacto y conocido de veces. |
| (Repeticiones) | **`while`** | `while (condición) { ... }` | Evalúa la condición **antes** de cada vuelta. Si es falsa desde el inicio, el código nunca se ejecuta. | Repetir algo mientras una condición externa se mantenga (indefinido). |
| | **`do while`** | `do { ... } while (condición);` | Ejecuta el bloque de código **primero** y después evalúa la condición para decidir si repite. | Cuando el código debe ejecutarse **al menos una vez** obligatoriamente. |
| | **`for...of`** | `for (elemento of lista) { ... }` | Recorre automáticamente cada valor dentro de una colección (como un Array) de principio a fin. | Procesar todos los elementos de una lista de forma sencilla y limpia. |
>#### Importante:
1. **Operadores de comparación:** Se utilizan dentro de las condiciones (Ej: `===`, `!==`, `>`, `<`).
2. **Sentencia `break`:** Es vital en el `switch` para detener la ejecución y salir de la estructura.
3. **Bucle Infinito:** Se debe tener cuidado con los bucles `while` y `for` para asegurar que la condición en algún momento sea falsa y el programa no se bloquee.
10. **¿Por qué es importante usar nombres significativos para variables y métodos?**
    > Es fundamental para la legibilidad y mantenimiento del código. Los nombres descriptivos permiten que otros desarrolladores (o a uno mismo en el futuro) entiender qué hace una función o qué guarda una variable sin necesidad de leer todo el código.

11. **¿Qué es una variable de entorno y por qué son importantes para JavaScript o la programación en general?**
    >Las variables de entorno son valores dinámicos configurados externamente al código fuente, lo que permite que estén disponibles para cualquier proceso o programa dentro del sistema operativo. Funcionan como un puente de comunicación esencial entre el sistema y las aplicaciones, almacenando información crítica como rutas de directorios, parámetros de configuración y credenciales sensibles. Su uso es una práctica fundamental en el desarrollo profesional para garantizar que el software sea seguro, escalable y adaptable a diferentes entornos de ejecución sin necesidad de modificar el código.

12. **¿Qué son las herramientas de desarrollo de Chrome y cómo se accede a ellas?**
    > Son un conjunto de herramientas integradas en el navegador  que permiten a los desarrolladores editar y diagnosticar paginas web en tiempo real, estas son ensenciales para inspeccionar, depurar y optimizar sitios web. 
    Se accede presionando `F12`, `Ctrl + Shift + I` o haciendo clic derecho y eligiendo "Inspeccionar".

13. **¿Qué se puede hacer en el panel "Elements" de las herramientas de desarrollo?**
    > Es una herramieneta que permite ver,modificar, inspeccionar temporalmente el HTML y el CSS de la página activa sin alterar los archivos originales, facilitando la detección de errores visuales y la optimización del código antes de aplicarlo definitivamente."

14. **¿Cómo se utiliza el panel "Console" de las herramientas de desarrollo y para qué es útil?**
    > El panel Console  es una ventana de comunicación directa con el navegador que se utiliza para leer los mensajes de error que genera la página, revisar datos específicos usando el comando console.log y escribir código JavaScript para ver resultados al instante, permite a los desarrolladores inspeccionar el estado de las variables en tiempo real y probar soluciones lógicas de forma inmediata sin alterar el código fuente, convirtiéndose en la herramienta principal para identificar fallos y garantizar que la lógica del programa funcione correctamente antes de su despliegue final.

    >Para utilizar la Consola, se debe abrir las herramientas de desarrollo del navegador (normalmente con la tecla F12) y situarnos en la pestaña del mismo nombre. Una vez allí, se puede escribir instrucciones de JavaScript directamente para ver qué sucede en la página o leer los mensajes que el propio código envía mediante el comando console.log.

15. **¿Qué información se puede obtener del panel "Network" y por qué es importante?**
>El panel Network se utiliza para monitorear todas las peticiones que hace la página web hacia internet, permitiENDO ver cada archivo que se descarga, como imágenes, fuentes, archivos JavaScript o datos de bases de datos. Es una herramienta fundamental ya que informa cuánto tiempo tarda en cargar cada elemento, si algún archivo falló en descargarse (mostrando un error en rojo) y qué tan pesada es la página en total. Gracias a esta información, un desarrollador puede optimizar la velocidad de carga de la web y asegurarse de que toda la información externa esté llegando correctamente al navegador.
  