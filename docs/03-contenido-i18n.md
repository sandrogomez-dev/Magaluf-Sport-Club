# 03 · Contenido e i18n

## Idiomas

| Idioma | Código | Rol | Por qué |
|--------|--------|-----|---------|
| Español | `es` | **Por defecto** | Cliente y mercado local. |
| Inglés | `en` | Prioritario | Turismo británico masivo en Magaluf. |
| Alemán | `de` | Prioritario | Segundo mercado turístico de la zona. |

### Estrategia de enrutado

- URLs **con prefijo de idioma**: `/es/`, `/en/`, `/de/`.
- `/` → redirige al idioma por defecto o al detectado por el navegador (`Accept-Language`).
- `hreflang` + `x-default` en todas las páginas (clave para SEO multilingüe).
- **Selector de idioma** en el header que mantiene la página actual (no manda siempre a home).

## Mapa del sitio (MVP)

| Página | Ruta | Propósito | CTA principal |
|--------|------|-----------|---------------|
| **Home** | `/[lang]/` | Presentar TODA la oferta y generar reserva. | Reservar (Playtomic) |
| **Pádel** | `/[lang]/padel` | Pistas + escuela + clases + niveles. | Reservar pista / Apuntarse |
| **Fútbol 7** | `/[lang]/futbol-7` | Campo, características, reserva. | Reservar campo |
| **Eventos** | `/[lang]/eventos` | Torneos, campus, cumpleaños, empresas. | Solicitar info |
| **Nosotros** | `/[lang]/nosotros` | Historia, instalaciones, equipo, galería. | Conócenos / Visítanos |
| **Contacto** | `/[lang]/contacto` | Mapa, horario, teléfono, email, WhatsApp. | Cómo llegar / Llamar |

> Pádel agrupa escuela y clases para no fragmentar; si el contenido crece, se separan.

## Estructura de la Home (bloques)

1. **Hero** — imagen/vídeo de impacto + titular + CTA reserva.
2. **Oferta de un vistazo** — 4 tarjetas: Pádel · Fútbol 7 · Eventos · Café bar.
3. **Pádel destacado** — 7 pistas, escuela, clases, enlace a Playtomic.
4. **Fútbol 7** — césped pro, iluminación nocturna, vestuarios.
5. **Eventos** — torneos / cumpleaños / empresas.
6. **Galería** — instalaciones (foto real cuando llegue).
7. **Por qué nosotros** — confianza (años, comunidad, ubicación).
8. **Ubicación + horario** — mapa, horario, CTA cómo llegar.
9. **CTA final** — reserva / contacto.

## Modelo de contenido

### Datos del club — `src/content/club.ts` (no traducibles)

```ts
export const club = {
  name: "Magaluf Sport Club",
  phone: "+34609140624",
  phoneDisplay: "+34 609 140 624",
  email: "magalufsportclub@gmail.com",
  whatsapp: "+34609140624",
  booking: "https://playtomic.com/clubs/magaluf-sport-club",
  instagram: "https://www.instagram.com/magalufsportclub/",
  address: "PENDIENTE confirmar dirección exacta",
  maps: "PENDIENTE enlace Google Maps",
  geo: { lat: 0, lng: 0 }, // PENDIENTE
  hours: {
    weekdays: "09:00–22:00",
    saturday: "09:00–14:00",
    note: "Sábado tarde y domingo bajo petición",
  },
  facilities: { padelCourts: 7, football7: 1, cafeBar: true, kidsArea: true },
} as const;
```

### Traducciones — `src/i18n/{es,en,de}.json`

Mismo esquema de claves en los 3 idiomas. Estructura por secciones para mantenerlo legible:

```jsonc
{
  "nav": { "home": "Inicio", "padel": "Pádel", "football": "Fútbol 7", "events": "Eventos", "about": "Nosotros", "contact": "Contacto" },
  "hero": { "title": "…", "subtitle": "…", "cta": "Reservar pista" },
  "services": { "padel": { "title": "…", "desc": "…" }, "football": { … } },
  "footer": { … },
  "seo": { "home": { "title": "…", "description": "…" } }
}
```

### Helper i18n — `src/i18n/ui.ts`

- `languages = ['es','en','de']`, `defaultLang = 'es'`.
- `useTranslations(lang)` → devuelve `t(key)` con fallback al idioma por defecto si falta una clave.
- `getLangFromUrl(url)` para resolver el idioma desde la ruta.

## Reglas de copy

- **Voz:** cercana, deportiva, energética. Mismo tono en los 3 idiomas (no traducción literal: adaptada).
- **Titulares orientados a beneficio**, no a la instalación ("Juega al pádel todo el año", no "Tenemos 7 pistas").
- CTAs en imperativo y claros: *Reservar · Apuntarse · Cómo llegar*.
- El alemán y el inglés los revisa un hablante nativo antes de producción (placeholder en el MVP).

## SEO de contenido

- `title`/`description` propios por página **y por idioma** (desde `seo.*` en los JSON).
- JSON-LD `SportsActivityLocation` con `openingHours`, `geo`, `telephone`, `sameAs` (Instagram).
- Keywords objetivo: *padel Magaluf, padel Mallorca, padel Calvià, football 7 Magaluf, padel courts Mallorca*.
- `alt` de imágenes descriptivo y localizado.
