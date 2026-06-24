# 05 · Roadmap

## Alcance del MVP (prototipo)

✅ Dentro:
- 6 páginas (Home, Pádel, Fútbol 7, Eventos, Nosotros, Contacto) en **ES/EN/DE**.
- i18n con JSON en repo + selector de idioma + `hreflang`.
- Sistema de diseño base (tokens, UI, secciones).
- SEO técnico (meta por idioma, sitemap, JSON-LD LocalBusiness).
- Reserva canalizada a Playtomic (enlaces, sin integración profunda).
- Galería con foto real de IG + placeholders.
- Responsive y accesible (AA).

❌ Fuera del MVP (fases siguientes):
- CMS para que el cliente edite (evaluar Sanity/Storyblok más adelante).
- Tienda online real (hoy solo es presentación).
- Integración profunda / reserva embebida de Playtomic.
- Blog / contenido SEO continuo.
- Formularios con backend (en MVP: `mailto`/WhatsApp o servicio tipo Formspree).

## Fases

### Fase 0 — Planificación ✅ (en curso)
- [x] Descubrimiento del negocio y la web actual.
- [x] Decisiones de stack / i18n / contenido.
- [x] Documentos de arquitectura, contenido y diseño.
- [ ] Confirmar pendientes con el cliente (dirección, logo, colores, precios).

### Fase 1 — Andamiaje
- [ ] `npm create astro` + Tailwind + TypeScript + integraciones (sitemap).
- [ ] Configurar i18n en `astro.config.mjs` y `src/i18n/`.
- [ ] `BaseLayout` con SEO, header, footer, hreflang.
- [ ] Tokens de diseño en `tailwind.config.ts` + `global.css`.
- [ ] Prettier/ESLint, scripts, Git inicial.

### Fase 2 — Sistema de diseño
- [ ] Componentes `ui/` (Button, Card, Section, Heading…).
- [ ] Componentes `layout/` (Header, Footer, Nav, LanguageSwitcher).
- [ ] Componentes `sections/` (Hero, ServicesGrid, FeatureSplit, Gallery, LocationMap, CtaBanner).

### Fase 3 — Contenido y páginas
- [ ] Redacción de copy ES + traducción EN/DE (placeholder, revisión nativa después).
- [ ] `club.ts` + `services.ts`.
- [ ] Montar las 6 páginas componiendo secciones.
- [ ] Imágenes (selección IG + placeholders) vía `astro:assets`.

### Fase 4 — SEO, pulido y QA
- [ ] JSON-LD, sitemap, robots, OG images.
- [ ] Auditoría Lighthouse (objetivo ≥95 en las 4 métricas).
- [ ] Revisión responsive + accesibilidad (teclado, contraste, lectores).
- [ ] Revisión de traducciones por nativo.

### Fase 5 — Despliegue (prototipo)
- [ ] Deploy en Vercel/Netlify con URL de preview para el cliente.
- [ ] Recoger feedback → iterar.

## Métricas de éxito ("10x")

- **Lighthouse** ≥ 95 en Rendimiento, Accesibilidad, Best Practices y SEO.
- **3 idiomas** funcionando con SEO correcto (hreflang validado).
- **Toda la oferta** visible (no solo pádel).
- **Reserva** alcanzable en ≤ 1 clic desde cualquier página.
- Carga **< 1.5 s** en móvil (4G).

## Riesgos / dependencias

| Riesgo | Mitigación |
|--------|------------|
| Falta de foto profesional | Placeholders + IG en MVP; proponer sesión de fotos. |
| Traducciones sin revisar | Marcar como provisional; revisión nativa antes de producción. |
| Datos pendientes (dirección, logo, precios) | Lista de pendientes en doc 01; no bloquea el andamiaje. |
| Cambios de alcance (tienda, CMS) | Acotados a fases posteriores; MVP cerrado. |
