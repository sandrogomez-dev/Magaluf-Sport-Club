# 04 · Diseño

> Dirección provisional para el prototipo. Se ajustará con el logo y los colores oficiales del cliente
> (pendientes). El objetivo visual: que se perciba **moderno, premium y deportivo** — un 10x frente al
> sitio actual.

## Concepto

Energía deportiva + claridad mediterránea. Mucho aire, imágenes grandes, tipografía con carácter,
acentos de color vivos sobre base neutra. Sensación "club premium", no "polideportivo municipal".

## Tokens de marca (provisionales)

```ts
// tailwind.config.ts — theme.extend
colors: {
  brand: {
    DEFAULT: "#0B6E4F",   // verde pádel/césped (acento principal) — AJUSTAR a marca real
    dark:    "#08533C",
    light:   "#16A075",
  },
  accent:  "#F2C14E",     // amarillo pelota (CTAs secundarios / highlights)
  ink:     "#0E1116",     // texto principal
  muted:   "#5B636E",     // texto secundario
  surface: "#F7F8F9",     // fondo claro
}
```

- **Tipografía:** display con personalidad para titulares (p. ej. *Sora* / *Clash Display*) + sans
  legible para cuerpo (*Inter*). Fuentes self-hosted (`font-display: swap`).
- **Radios:** generosos (xl/2xl) para tarjetas y botones → aire moderno.
- **Sombras:** sutiles, una sola elevación de tarjeta. Nada de skeuomorfismo.
- **Espaciado:** secciones con padding vertical amplio; ritmo consistente (escala de Tailwind).

## Sistema de componentes

### UI (átomos) — `components/ui/`
- `Button` (variantes: primary, secondary, ghost; tamaños sm/md/lg).
- `Card` (servicio, evento, feature).
- `Section` (wrapper con padding y `max-w` consistentes).
- `Badge`, `IconText`, `Heading` (eyebrow + título + intro).

### Secciones — `components/sections/`
- `Hero`, `ServicesGrid`, `FeatureSplit` (imagen + texto alternado), `Gallery`,
  `StatsBar` (7 pistas · fútbol 7 · café · zona infantil), `LocationMap`, `CtaBanner`.

### Layout — `components/layout/`
- `Header` (logo, nav, `LanguageSwitcher`, CTA reserva sticky en móvil).
- `Footer` (contacto, horario, redes, idiomas, enlaces legales).
- `Nav` responsive (menú hamburguesa en móvil).

## Responsive / accesibilidad

- **Mobile-first.** La mayoría del tráfico será móvil (turistas sobre la marcha).
- Breakpoints estándar de Tailwind (`sm md lg xl`).
- Contraste **AA** mínimo; estados de foco visibles; navegación por teclado.
- Imágenes con `alt`; vídeos con controles; `prefers-reduced-motion` respetado en animaciones.

## Imágenes (prototipo)

- Reutilizar fotos **reales** de [@magalufsportclub](https://www.instagram.com/magalufsportclub/)
  donde aporten (pistas, fútbol 7, ambiente) + **placeholders** de calidad donde no haya material.
- El Drive es material "modelo IG": se hará una **selección curada** para la galería más adelante.
- Recomendación al cliente: **sesión de foto/vídeo profesional** de instalaciones para producción.
- Todas las imágenes pasan por `astro:assets` → WebP/AVIF, tamaños responsive, lazy-load.

## Microinteracciones (con mesura)

- Aparición suave de secciones al hacer scroll (respetando `reduced-motion`).
- Hover sutil en tarjetas y botones.
- CTA de reserva siempre accesible (sticky en móvil). Nada que penalice rendimiento.
