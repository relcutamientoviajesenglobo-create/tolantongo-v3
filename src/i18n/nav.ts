import type { Lang } from './config';

export function getNavItems(lang: Lang) {
  if (lang === 'en') {
    return [
      {
        label: 'Grottoes & Pools', href: '/en/grottoes/',
        children: [
          { label: '🌊 Thermal Grottoes',  href: '/en/grottoes/' },
          { label: '💧 Tiered Pools',       href: '/en/grottoes/tiered-pools/' },
          { label: '🏞️ Tolantongo River',   href: '/en/grottoes/river/' },
          { label: '🏔️ Tolantongo Canyon',  href: '/en/grottoes/canyon/' },
        ]
      },
      {
        label: 'Activities', href: '/en/activities/',
        children: [
          { label: '🏊 Thermal Swimming',       href: '/en/activities/thermal-swimming/' },
          { label: '🥾 Hiking',                  href: '/en/activities/hiking/' },
          { label: '🧗 Rappelling & Adventure',  href: '/en/activities/rappelling/' },
          { label: '📸 Photography',             href: '/en/activities/photography/' },
        ]
      },
      {
        label: 'Lodging', href: '/en/lodging/',
        children: [
          { label: '🛏️ Thermal Cabins', href: '/en/lodging/cabins/' },
          { label: '⛺ Campsite',        href: '/en/lodging/camping/' },
        ]
      },
      { label: 'Prices',          href: '/en/prices/' },
      { label: 'How to Get Here', href: '/en/how-to-get-here/' },
      { label: 'Blog',            href: '/en/blog/' },
    ];
  }

  // Spanish (default)
  return [
    {
      label: 'Grutas y Albercas', href: '/grutas/',
      children: [
        { label: '🌊 Las Grutas Termales',  href: '/grutas/' },
        { label: '💧 Albercas Escalonadas', href: '/grutas/albercas-escalonadas/' },
        { label: '🏞️ Río Tolantongo',       href: '/grutas/rio/' },
        { label: '🏔️ Cañón de Tolantongo',  href: '/grutas/canon/' },
      ]
    },
    {
      label: 'Actividades', href: '/actividades/',
      children: [
        { label: '🏊 Natación Termal',  href: '/actividades/natacion-termal/' },
        { label: '🥾 Senderismo',       href: '/actividades/senderismo/' },
        { label: '🧗 Rappel y Aventura',href: '/actividades/rappel/' },
        { label: '📸 Fotografía',       href: '/actividades/fotografia/' },
      ]
    },
    {
      label: 'Hospedaje', href: '/hospedaje/',
      children: [
        { label: '🛏️ Cabañas Termales', href: '/hospedaje/cabanas/' },
        { label: '⛺ Campamento',       href: '/hospedaje/camping/' },
      ]
    },
    { label: 'Precios',       href: '/precios/' },
    { label: 'Cómo Llegar',   href: '/como-llegar/' },
    { label: 'Blog',           href: '/blog/' },
  ];
}
