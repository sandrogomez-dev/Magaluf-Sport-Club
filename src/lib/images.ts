import type { ImageMetadata } from 'astro';

/**
 * Carga todas las imágenes de src/assets/images de forma estática (astro:assets).
 * Uso:  import { img } from '../lib/images';  <Image src={img('terrace-night.jpg')} .. />
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export function img(name: string): ImageMetadata {
  const key = `/src/assets/images/${name}`;
  const entry = images[key];
  if (!entry) {
    throw new Error(
      `Imagen no encontrada: ${name}. Disponibles: ${Object.keys(images).join(', ')}`,
    );
  }
  return entry.default;
}

/** ¿Existe la imagen? (para placeholders condicionales). */
export function hasImg(name: string): boolean {
  return `/src/assets/images/${name}` in images;
}
