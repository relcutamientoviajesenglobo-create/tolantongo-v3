/** Bidirectional URL mapping: Spanish path → English path */
export const routeMap: Record<string, string> = {
  '/': '/en/',
  '/grutas/': '/en/grottoes/',
  '/grutas/albercas-escalonadas/': '/en/grottoes/tiered-pools/',
  '/grutas/rio/': '/en/grottoes/river/',
  '/grutas/canon/': '/en/grottoes/canyon/',
  '/actividades/': '/en/activities/',
  '/actividades/natacion-termal/': '/en/activities/thermal-swimming/',
  '/actividades/senderismo/': '/en/activities/hiking/',
  '/actividades/rappel/': '/en/activities/rappelling/',
  '/actividades/fotografia/': '/en/activities/photography/',
  '/hospedaje/': '/en/lodging/',
  '/hospedaje/cabanas/': '/en/lodging/cabins/',
  '/hospedaje/camping/': '/en/lodging/camping/',
  '/precios/': '/en/prices/',
  '/como-llegar/': '/en/how-to-get-here/',
  '/contacto/': '/en/contact/',
  '/aguas-termales/': '/en/thermal-waters/',
  '/aviso-privacidad/': '/en/privacy-policy/',
  '/terminos/': '/en/terms/',
  '/cabanas/': '/en/cabins/',
  '/campamento/': '/en/campsite/',
  '/blog/': '/en/blog/',
  '/blog/grutas-termales/': '/en/blog/thermal-grottoes/',
  '/blog/actividades-aventura/': '/en/blog/adventure-activities/',
  '/blog/hospedaje-camping/': '/en/blog/lodging-camping/',
  '/blog/guias-viaje/': '/en/blog/travel-guides/',
  '/blog/cultura-region/': '/en/blog/culture-region/',
};

/** Reverse map: English path → Spanish path */
const reverseMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([es, en]) => [en, es])
);

/** Get the alternate-language path */
export function getAlternatePath(currentPath: string, currentLang: 'es' | 'en'): string {
  if (currentLang === 'es') {
    return routeMap[currentPath] || `/en${currentPath}`;
  }
  return reverseMap[currentPath] || currentPath.replace(/^\/en/, '') || '/';
}

/** Get hreflang URLs for both languages */
export function getHreflangs(currentPath: string, currentLang: 'es' | 'en') {
  if (currentLang === 'es') {
    return { es: currentPath, en: routeMap[currentPath] || `/en${currentPath}` };
  }
  const esPath = reverseMap[currentPath] || currentPath.replace(/^\/en/, '') || '/';
  return { es: esPath, en: currentPath };
}
