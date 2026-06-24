# 08 · Dirección visual v2 — "del prototipo al top"

Plan de mejora visual tras la 1ª iteración. Objetivo: eliminar el aire "Bootstrap genérico"
(bandas rectangulares apiladas, emojis, simetría plana) y subir el sitio al nivel de las mejores
webs de pádel de España, con **coherencia de marca** con el logo y con la web hermana.

## Coherencia de marca (familia)

| Marca | Rol | Color |
|---|---|---|
| **Magaluf Sport Club** | El club (deporte, instalaciones) | **Navy `#0c1f3d` + Oro `#eebf57`** |
| **Mallorca Padel Experience** | La experiencia (viaje + hotel) | Azul royal `#0c4da2` + oro |

Misma familia (azul + oro), personalidad propia: MSC = navy profundo y sobrio; MPE = azul vivo.
**Decisión tomada:** MSC va con **Navy + Oro** (su logo real). Se descarta el verde (genérico y ajeno).

## Tokens (sustituyen a los actuales en `global.css`)

```css
@theme {
  --color-navy: #0c1f3d;       /* primario */
  --color-navy-700: #14294d;
  --color-navy-600: #1d3461;
  --color-gold: #eebf57;       /* acento */
  --color-gold-dark: #d4a23c;
  --color-cream: #f9f2de;      /* base cálida */
  --color-ink: #0b1220;
  --color-muted: #5b6573;
  --color-surface: #f6f7f9;
  --font-display: "Outfit", sans-serif;  /* coherente con MPE */
  --font-sans: "Inter", sans-serif;
}
```

## Las 6 palancas para salir de lo genérico

1. **Tipografía protagonista.** Cambiar Sora → **Outfit**. Titulares enormes y muy apretados
   (`tracking-tight`, `leading-[0.95]`), eyebrows con línea + versalitas. Es el 50 % del look premium.
2. **Fuera emojis → iconos SVG de línea.** Crear `components/ui/Icon.astro` con un set propio
   (pádel, balón, café, niños, trofeo, reloj, ubicación). Los emojis son el delator nº1 de web genérica.
3. **Transiciones entre secciones.** Nada de bandas planas: imágenes que **sangran** entre secciones,
   **tarjetas flotantes** con `margin-top` negativo que pisan la sección anterior, separadores
   curvos/diagonales puntuales. Crear `components/ui/Divider.astro`.
4. **Asimetría / bento.** Romper el "todo centrado": grid bento en stats y servicios, splits
   descuadrados (60/40), imágenes fuera de caja.
5. **Profundidad y textura.** Imágenes en **duotono navy**, grano sutil global, gradientes de marca
   (mesh navy→navy-600), capas superpuestas (foto + tarjeta de dato flotando encima).
6. **Movimiento con criterio.** Parallax en hero, **marquee** de instalaciones, contadores que
   suben (count-up), zoom suave de fotos al hover, botones con micro-interacción. Más adelante:
   **hero con scroll-vídeo** (skill `web-scrolling`) cuando llegue el drone.

## Cambios sección por sección (sobre los componentes actuales)

| Componente | Ahora (genérico) | v2 (top) |
|---|---|---|
| `Hero` | Foto + overlay + 2 botones | Overlay navy en degradado, titular cinético, parallax, **marquee** debajo |
| `StatsBar` | Banda verde plana | **Bento** / tarjeta flotante navy que pisa el hero, números con count-up, iconos SVG |
| `ServicesGrid` | 4 tarjetas iguales + emoji | Bento asimétrico, iconos SVG, tarjetas navy con borde oro al hover |
| `FeatureSplit` | Imagen + texto 50/50 | 60/40 descuadrado, **badge/stat flotante** sobre la imagen, línea oro de acento |
| `Holidays` | Ya potente | Tarjeta de precio estilo "ticket" con sello oro, fondo navy con textura |
| `EventsTeaser` | Tarjetas + emoji | Iconos SVG, bento, hover con elevación |
| `Gallery` | Grid bento básico | Bento mayor, duotono opcional, captions al hover |
| `CtaBanner` | Banda verde | Navy con textura + gradiente oro, tipografía grande |
| Global | Padding uniforme | Ritmo variado + `Divider` entre bloques clave |

## Orden de ejecución sugerido

1. **Tokens + fuente** (`global.css`): navy/oro + Outfit. *(impacto inmediato, bajo riesgo)*
2. **Iconos SVG** (`Icon.astro`) y quitar todos los emojis.
3. **Hero + StatsBar** (la parte que más se ve): parallax, marquee, tarjeta flotante.
4. **Servicios + FeatureSplit**: bento, asimetría, badges flotantes.
5. **Resto de secciones + `Divider`** y textura/grano global.
6. Revisión responsive + Lighthouse.

## Pendiente del cliente (para rematar el look)

- **Logo en SVG** (vectorial) — para sustituir la "M" provisional.
- **Drone + fútbol 7** — para hero con vídeo y la sección de fútbol.
- Confirmar paleta exacta del logo (oro `#eebf57` / navy `#0c1f3d`) por si la versión oficial varía.
