# 02 · Arquitectura

## Stack

- **Astro** — framework de contenido, output estático. Cero JS por defecto, islands solo donde haga falta.
- **Tailwind CSS** — sistema de estilos por utilidades + tokens de diseño.
- **TypeScript** — tipado en componentes y datos.
- **astro:i18n** — enrutado multiidioma nativo (ES/EN/DE).
- **astro:assets** — optimización automática de imágenes (WebP/AVIF, responsive).
- Despliegue estático en **Vercel/Netlify** (a confirmar).

### Por qué Astro y no Next.js

La web es un **escaparate de contenido** que canaliza reservas a un servicio externo (Playtomic).
No hay backend propio ni estado de servidor. Astro genera HTML estático ultraligero → mejor
Lighthouse, mejor SEO y menor coste. Si en el futuro aparece lógica dinámica (p. ej. un panel),
se añade una island o un endpoint sin reescribir el sitio.

## Principio rector: separación de responsabilidades

Tres capas que **nunca se mezclan**:

1. **Contenido / datos** (`src/content`, `src/i18n`) — textos, traducciones, datos del club.
   No contiene HTML ni estilos.
2. **Presentación** (`src/components`, `src/layouts`, `src/styles`) — cómo se ve. No contiene texto
   "hardcodeado": todo viene de la capa de contenido.
3. **Estructura / rutas** (`src/pages`) — qué URL existe y qué compone. Orquesta, no implementa.

Regla de oro: **ningún texto visible se escribe dentro de un componente**. Siempre `t('clave')`.

## Estructura de carpetas (propuesta)

```
magalufsportclub/
├── public/                 # assets estáticos (favicon, robots.txt, og-image)
├── src/
│   ├── pages/              # RUTAS (una por idioma vía i18n)
│   │   ├── index.astro          # /  (redirección/idioma por defecto)
│   │   └── [lang]/
│   │       ├── index.astro      # home
│   │       ├── padel.astro      # pádel + escuela + clases
│   │       ├── futbol-7.astro
│   │       ├── eventos.astro
│   │       ├── nosotros.astro
│   │       └── contacto.astro
│   ├── layouts/
│   │   └── BaseLayout.astro      # <head>, SEO, header, footer, hreflang
│   ├── components/
│   │   ├── ui/                   # átomos reutilizables (Button, Card, Section…)
│   │   ├── sections/            # bloques de página (Hero, Servicios, Galeria, CTA…)
│   │   ├── layout/              # Header, Footer, Nav, LanguageSwitcher
│   │   └── seo/                 # SEO.astro, StructuredData.astro
│   ├── i18n/
│   │   ├── ui.ts                # helper t(), idiomas, idioma por defecto
│   │   ├── es.json
│   │   ├── en.json
│   │   └── de.json
│   ├── content/                 # datos estructurados (no traducibles o con campos i18n)
│   │   ├── club.ts             # contacto, horario, redes, instalaciones
│   │   └── services.ts        # lista de servicios con claves i18n
│   ├── styles/
│   │   └── global.css          # @tailwind + tokens base
│   └── assets/
│       └── images/             # imágenes optimizadas por astro:assets
├── astro.config.mjs            # config i18n + integraciones
├── tailwind.config.ts          # tokens de marca (colores, fuentes, espaciado)
├── tsconfig.json
└── package.json
```

## Convenciones

- **Componentes** en PascalCase; un componente = una responsabilidad.
- **Secciones** (`sections/`) reciben datos por props, nunca importan textos directamente: el `.astro`
  de página les pasa `t` y los datos.
- **Sin "magic strings"** de configuración: contacto/horario/URLs viven en `src/content/club.ts`.
- **Accesibilidad** desde el inicio: HTML semántico, foco visible, contraste AA, `alt` en imágenes.
- **Rendimiento:** imágenes vía `astro:assets`, fuentes locales `font-display: swap`, lazy-loading.

## SEO técnico (resumen, detalle en doc 03)

- `hreflang` por idioma + `x-default` en el `<head>`.
- `sitemap.xml` automático (`@astrojs/sitemap`).
- Datos estructurados **JSON-LD `SportsActivityLocation` / `LocalBusiness`** con horario, geo y contacto.
- Meta y Open Graph por página e idioma desde la capa de contenido.

## Calidad / DX

- **Prettier + ESLint** (config Astro) y `prettier-plugin-astro`.
- **EditorConfig** para consistencia.
- Scripts: `dev`, `build`, `preview`, `lint`, `format`, `check` (astro check de tipos).
- Repo en Git desde el primer commit con `.gitignore` de Node/Astro.
