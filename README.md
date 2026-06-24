# Magaluf Sport Club — Nueva Web

Rediseño completo de la web de [Magaluf Sport Club](https://magalufsportclub.com/): un centro
deportivo en Calvià (Mallorca) centrado en **pádel**, con fútbol 7, café bar, escuela, eventos y
tienda.

Objetivo: una web **10x mejor** que la actual — moderna, rápida, multiidioma (ES/EN/DE) y orientada
a conversión (reservas en Playtomic, clases y eventos).

## Estado

🟢 **Prototipo construido (Astro).** Home completa + 5 páginas en ES/EN/DE, sistema de diseño,
i18n, SEO y fotos reales optimizadas. Pendiente de `npm install` + verificación de build.

## Cómo arrancar

Requiere **Node.js LTS** (https://nodejs.org).

```bash
npm install      # instala dependencias
npm run dev      # servidor local en http://localhost:4321
npm run build    # build de producción en dist/
npm run preview  # previsualiza el build
```

Rutas: `/` redirige al idioma del navegador → `/es/`, `/en/`, `/de/`.
Páginas: `/`, `/padel`, `/futbol-7`, `/eventos`, `/nosotros`, `/contacto` (por idioma).

## Decisiones tomadas

| Tema        | Decisión                          | Por qué |
|-------------|-----------------------------------|---------|
| Stack       | **Astro + Tailwind CSS**          | Sitio escaparate de contenido → rendimiento y SEO máximos (Lighthouse ~100). |
| i18n        | **JSON en el repo** (es/en/de)    | Rápido para el prototipo, control total, cero coste de infra. |
| Reservas    | **Externas (Playtomic)**          | El club ya las gestiona ahí; la web canaliza, no reimplementa. |
| Fotos       | Reales de Instagram + placeholders| El Drive es material "modelo IG"; se sustituirá por foto profesional luego. |
| Hosting     | Vercel / Netlify (a confirmar)    | Deploy estático trivial, dominio + SSL gratis. |

## Documentación

1. [Descubrimiento](docs/01-descubrimiento.md) — qué tienen hoy, diagnóstico, qué respetar.
2. [Arquitectura](docs/02-arquitectura.md) — stack, estructura de carpetas, separación de responsabilidades.
3. [Contenido e i18n](docs/03-contenido-i18n.md) — mapa del sitio, modelo de contenido, estrategia de idiomas y SEO.
4. [Diseño](docs/04-diseno.md) — marca, dirección visual, sistema de componentes.
5. [Roadmap](docs/05-roadmap.md) — alcance del MVP, fases y tareas.
6. [Estructura de la landing](docs/06-estructura-landing.md) — secciones validadas y orientación a conversión.
7. [Hallazgos de Instagram](docs/07-instagram-hallazgos.md) — datos y material extraído del perfil.
8. [Dirección visual v2](docs/08-direccion-visual-v2.md) — plan de mejora visual (navy+oro, anti-genérico).

## Datos del negocio (referencia rápida)

- **Instalaciones:** 7 pistas de pádel · campo de fútbol 7 · café bar · zona infantil.
- **Servicios:** escuela de pádel (niños/adultos), clases todos los niveles, eventos/torneos/cumpleaños, tienda.
- **Reservas:** [Playtomic](https://playtomic.com/clubs/magaluf-sport-club)
- **Contacto:** +34 609 140 624 · <magalufsportclub@gmail.com>
- **Horario:** L–V 9:00–22:00 · S 9:00–14:00 · resto bajo petición
- **Instagram:** [@magalufsportclub](https://www.instagram.com/magalufsportclub/)
