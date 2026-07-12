# 10 · Reestructuración v2 (arquitectura por áreas)

Nueva arquitectura pedida por el cliente (jul 2026). El **diseño y el contenido están
aprobados**; esto es **reorganizar en qué página va cada cosa**, no rehacer. ~90% se reutiliza.

## Menú nuevo (6)
`Inicio · El Club · Pádel · Fútbol 7 · Eventos · Contacto`
- Se quitan del menú: **Escuela** y **The Method** (pasan DENTRO de Pádel) y **Reservas** (botón Playtomic siempre accesible).

## Estructura por página

### HOME — sencilla, de bienvenida (puerta de entrada)
- Hero: vídeo/imagen del club (drone) + logo + presentación breve ("Bienvenido a Magaluf Sport Club").
- Dónde estamos (dirección) + acceso rápido a **Playtomic** y **WhatsApp**.
- **Botones claros a las secciones** (El Club, Pádel, Fútbol 7, Eventos, Contacto).
- (Opcional) tira de reseñas Google (prueba social).
- **Se quitan de la Home** y se llevan a su página: servicios, método, escuela, holidays, galería, familia de marcas, features. La Home queda limpia.
- Reutiliza: `Hero` (simplificado), `LocationContact` (mini), `CtaBanner`, `Testimonials` (opcional). Nuevo: bloque de botones-puerta a secciones.

### EL CLUB (`/nosotros` → etiqueta "El Club")
- **Filosofía**: cómo entienden el deporte y la formación.
- **El club**: historia, valores, visión.
- **Instalaciones**: pádel, fútbol 7, cafetería, restaurante, tienda, parking, vestuarios, zona infantil, terraza, recepción.
- **Nuestro equipo**: Director Deportivo + entrenadores + personal (Maxi, Ángel, Miki, Silvia).
- Reutiliza: story, "mucho más que pádel", amenities (ampliar lista), sección de equipo, galería. Nuevo: copy de filosofía/valores/visión (a redactar o que lo den).

### PÁDEL (`/padel` → EL CORAZÓN de la web)
Página-hub con sub-secciones (navegación por anclas):
- **Reserva de pistas** (Playtomic).
- **Escuela de pádel** (infantil, adultos). ← reutiliza contenido de /escuela.
- **Clases particulares** (basadas en el método). ← reutiliza.
- **Equipos de competición.**
- **Torneos.**
- **Performance Camps** (los 4). ← reutiliza.
- **The Padel Performance Method®** (filosofía, 5 pilares, PUSUN®, AIBALL®, tecnología, entrenadores, Gustavo Pratto, programas). ← reutiliza TODO /metodo como sección.
- **Mallorca Padel Experience**: concepto *"Tú organizas el vuelo y nosotros nos ocupamos de todo lo demás"* + enlace a la web de MPE.
- Reutiliza: casi todo /metodo + /escuela + padel. Nuevo: competición, torneos (copy ligero) y sección MPE.

### FÚTBOL 7 (`/futbol-7` → hub)
- Alquiler de campo (Playtomic + teléfono) · Escuelas · Campus · Torneos · Eventos · Empresas.
- Reutiliza: contenido de fútbol actual. Nuevo: sub-secciones (copy ligero).

### EVENTOS (`/eventos`)
- Torneos · Americanas · Ligas · Sociales · Empresa · Presentaciones · Clínics · Campus.
- Reutiliza `EventsTeaser`. Nuevo: ampliar categorías.

### CONTACTO (`/contacto`)
- Dirección · teléfono · WhatsApp · email · horarios · mapa · formulario.
- Ya está montado. Sin cambios grandes.

## Rutas /metodo y /escuela
Su contenido se mueve dentro de **Pádel**. Se mantienen las rutas como **redirección** a
`/padel#metodo` y `/padel#escuela` (para no perder enlaces ni SEO), o se eliminan del menú.

## Qué se reutiliza vs. qué es nuevo
- **Reutiliza (~90%):** diseño, componentes, textos i18n (método, escuela, camps, equipo, amenities, testimonios), imágenes, formulario, legales, cookies.
- **Nuevo/trabajo:** simplificar la Home (menos), ampliar El Club (filosofía/valores/visión + instalaciones), **ensamblar el hub de Pádel** + sección MPE, ampliar Fútbol 7 y Eventos.

## Pendiente del cliente
- Un par de líneas de **filosofía, valores y visión** (o lo redactamos y validan).
- IDs de **Analytics/Pixel**, **logo .svg**, **fotos** (método, instalaciones, equipo).

## Nota de gestión
Con esta estructura se **cierra la arquitectura de lanzamiento**. Cambios nuevos a partir de
aquí = evolución / mantenimiento (fase siguiente).
