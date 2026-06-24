import es from './es.json';
import en from './en.json';
import de from './de.json';

export const languages = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
} as const;

export const defaultLang: Lang = 'es';
export type Lang = keyof typeof languages;

const dict = { es, en, de } as const;

/** Idioma a partir de la URL (/es/.., /en/.., /de/..). */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as Lang;
  return defaultLang;
}

/** Ruta del idioma actual sin el prefijo de idioma (para el selector). */
export function getPathWithoutLang(url: URL): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] && segments[0] in languages) segments.shift();
  return '/' + segments.join('/');
}

/** Construye una ruta localizada: localizePath('en', '/padel') -> '/en/padel'. */
export function localizePath(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/^\//, '/');
  return `/${lang}${clean}`;
}

/** t('hero.title') con fallback al idioma por defecto si falta la clave. */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const lookup = (l: Lang) =>
      key.split('.').reduce<any>((acc, k) => (acc == null ? acc : acc[k]), dict[l]);
    const value = lookup(lang) ?? lookup(defaultLang);
    return typeof value === 'string' ? value : key;
  };
}

/** Acceso a datos estructurados (listas/objetos) del diccionario. */
export function getDict(lang: Lang): any {
  return dict[lang];
}
