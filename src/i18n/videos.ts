/**
 * Video Registry — Bilingual metadata for all site videos
 * Spanish filenames are canonical; English filenames are symlinks.
 * Usage: import { videos, getVideosByCategory } from '../i18n/videos';
 */
import type { Lang } from './config';

export type VideoCategory =
  | 'pozas'
  | 'rio'
  | 'cascadas'
  | 'gruta'
  | 'natacion'
  | 'canon'
  | 'hospedaje';

export interface VideoMeta {
  id: string;
  src: Record<Lang, string>;
  alt: Record<Lang, string>;
  title: Record<Lang, string>;
  duration: number;       // seconds
  width: number;
  height: number;
  category: VideoCategory;
  /** Pages where this video should appear (slug paths) */
  pages: string[];
}

export const videos: VideoMeta[] = [
  // ─── POZAS / TIERED POOLS ───────────────────────────
  {
    id: 'pozas-panoramica',
    src: {
      es: '/media/grutas-tolantongo-pozas-termales-escalonadas-panoramica.mp4',
      en: '/media/tolantongo-grottoes-tiered-thermal-pools-panoramic.mp4',
    },
    alt: {
      es: 'Vista panorámica de las pozas termales escalonadas de Tolantongo',
      en: 'Panoramic view of the tiered thermal pools at Tolantongo',
    },
    title: {
      es: 'Pozas termales escalonadas — Grutas de Tolantongo',
      en: 'Tiered thermal pools — Tolantongo Grottoes',
    },
    duration: 27,
    width: 720,
    height: 1280,
    category: 'pozas',
    pages: ['/grutas/albercas-escalonadas/', '/en/grottoes/tiered-pools/'],
  },
  {
    id: 'albercas-drone',
    src: {
      es: '/media/grutas-tolantongo-albercas-escalonadas-vista-aerea-drone.mp4',
      en: '/media/tolantongo-grottoes-tiered-pools-aerial-drone-view.mp4',
    },
    alt: {
      es: 'Vista aérea con drone de las albercas escalonadas turquesa',
      en: 'Aerial drone view of the turquoise tiered pools',
    },
    title: {
      es: 'Albercas escalonadas desde el aire — Grutas de Tolantongo',
      en: 'Tiered pools from above — Tolantongo Grottoes',
    },
    duration: 18,
    width: 720,
    height: 1280,
    category: 'pozas',
    pages: ['/', '/en/', '/grutas/', '/en/grottoes/', '/grutas/albercas-escalonadas/', '/en/grottoes/tiered-pools/', '/precios/', '/en/prices/'],
  },
  {
    id: 'pozas-turquesa-soleado',
    src: {
      es: '/media/grutas-tolantongo-pozas-escalonadas-turquesa-dia-soleado.mp4',
      en: '/media/tolantongo-grottoes-tiered-pools-turquoise-sunny-day.mp4',
    },
    alt: {
      es: 'Pozas escalonadas turquesa en un día soleado',
      en: 'Turquoise tiered pools on a sunny day',
    },
    title: {
      es: 'Pozas turquesa en día soleado — Grutas de Tolantongo',
      en: 'Turquoise pools on a sunny day — Tolantongo Grottoes',
    },
    duration: 5,
    width: 720,
    height: 1280,
    category: 'pozas',
    pages: ['/', '/en/'],
  },
  {
    id: 'pozas-formaciones-atardecer',
    src: {
      es: '/media/grutas-tolantongo-pozas-escalonadas-formaciones-atardecer.mp4',
      en: '/media/tolantongo-grottoes-tiered-pools-formations-sunset.mp4',
    },
    alt: {
      es: 'Pozas escalonadas con formaciones minerales al atardecer',
      en: 'Tiered pools with mineral formations at sunset',
    },
    title: {
      es: 'Formaciones minerales al atardecer — Grutas de Tolantongo',
      en: 'Mineral formations at sunset — Tolantongo Grottoes',
    },
    duration: 41,
    width: 720,
    height: 1280,
    category: 'pozas',
    pages: ['/grutas/albercas-escalonadas/', '/en/grottoes/tiered-pools/'],
  },
  {
    id: 'pozas-vista-lateral',
    src: {
      es: '/media/grutas-tolantongo-pozas-escalonadas-vista-lateral-montanas.mp4',
      en: '/media/tolantongo-grottoes-tiered-pools-side-view-mountains.mp4',
    },
    alt: {
      es: 'Vista lateral de las pozas escalonadas con montañas de fondo',
      en: 'Side view of the tiered pools with mountains in the background',
    },
    title: {
      es: 'Pozas y montañas — Grutas de Tolantongo',
      en: 'Pools and mountains — Tolantongo Grottoes',
    },
    duration: 12,
    width: 720,
    height: 1280,
    category: 'pozas',
    pages: ['/precios/', '/en/prices/'],
  },

  // ─── RÍO TERMAL / THERMAL RIVER ────────────────────
  {
    id: 'rio-turquesa-cascada',
    src: {
      es: '/media/grutas-tolantongo-rio-termal-turquesa-cascada.mp4',
      en: '/media/tolantongo-grottoes-turquoise-thermal-river-waterfall.mp4',
    },
    alt: {
      es: 'Río termal turquesa con cascada entre vegetación',
      en: 'Turquoise thermal river with waterfall amidst vegetation',
    },
    title: {
      es: 'Río termal turquesa — Grutas de Tolantongo',
      en: 'Turquoise thermal river — Tolantongo Grottoes',
    },
    duration: 22,
    width: 720,
    height: 1280,
    category: 'rio',
    pages: ['/grutas/rio/', '/en/grottoes/river/'],
  },
  {
    id: 'rio-turquesa-rocas',
    src: {
      es: '/media/grutas-tolantongo-rio-termal-turquesa-rocas.mp4',
      en: '/media/tolantongo-grottoes-turquoise-thermal-river-rocks.mp4',
    },
    alt: {
      es: 'Río termal turquesa con persona entre las rocas',
      en: 'Turquoise thermal river with person among the rocks',
    },
    title: {
      es: 'Río termal y rocas — Grutas de Tolantongo',
      en: 'Thermal river and rocks — Tolantongo Grottoes',
    },
    duration: 11,
    width: 720,
    height: 1280,
    category: 'rio',
    pages: ['/grutas/rio/', '/en/grottoes/river/', '/aguas-termales/', '/en/thermal-waters/'],
  },
  {
    id: 'rio-turquesa-tranquilo',
    src: {
      es: '/media/grutas-tolantongo-rio-termal-agua-turquesa-tranquilo.mp4',
      en: '/media/tolantongo-grottoes-calm-turquoise-thermal-river.mp4',
    },
    alt: {
      es: 'Aguas turquesas tranquilas del río termal',
      en: 'Calm turquoise waters of the thermal river',
    },
    title: {
      es: 'Aguas tranquilas del río — Grutas de Tolantongo',
      en: 'Calm river waters — Tolantongo Grottoes',
    },
    duration: 19,
    width: 360,
    height: 450,
    category: 'rio',
    pages: ['/aguas-termales/', '/en/thermal-waters/'],
  },

  // ─── CASCADAS / WATERFALLS ──────────────────────────
  {
    id: 'cascada-minerales-musgo',
    src: {
      es: '/media/grutas-tolantongo-cascada-formaciones-minerales-musgo.mp4',
      en: '/media/tolantongo-grottoes-waterfall-mineral-formations-moss.mp4',
    },
    alt: {
      es: 'Cascada con formaciones minerales y musgo verde',
      en: 'Waterfall with mineral formations and green moss',
    },
    title: {
      es: 'Cascada de formaciones minerales — Grutas de Tolantongo',
      en: 'Mineral formations waterfall — Tolantongo Grottoes',
    },
    duration: 17,
    width: 720,
    height: 1280,
    category: 'cascadas',
    pages: ['/grutas/', '/en/grottoes/'],
  },
  {
    id: 'cascada-roca-closeup',
    src: {
      es: '/media/grutas-tolantongo-cascada-roca-mineral-closeup.mp4',
      en: '/media/tolantongo-grottoes-waterfall-mineral-rock-closeup.mp4',
    },
    alt: {
      es: 'Close-up de cascada cayendo sobre roca mineral roja',
      en: 'Close-up of waterfall flowing over red mineral rock',
    },
    title: {
      es: 'Cascada sobre roca mineral — Grutas de Tolantongo',
      en: 'Waterfall over mineral rock — Tolantongo Grottoes',
    },
    duration: 17,
    width: 720,
    height: 1280,
    category: 'cascadas',
    pages: ['/grutas/canon/', '/en/grottoes/canyon/'],
  },
  {
    id: 'cascada-monumental',
    src: {
      es: '/media/grutas-tolantongo-cascada-monumental-entrada.mp4',
      en: '/media/tolantongo-grottoes-monumental-waterfall-entrance.mp4',
    },
    alt: {
      es: 'Cascada monumental en la entrada de las grutas',
      en: 'Monumental waterfall at the grottoes entrance',
    },
    title: {
      es: 'Cascada monumental — Grutas de Tolantongo',
      en: 'Monumental waterfall — Tolantongo Grottoes',
    },
    duration: 18,
    width: 720,
    height: 1280,
    category: 'cascadas',
    pages: ['/', '/en/', '/grutas/', '/en/grottoes/', '/grutas/canon/', '/en/grottoes/canyon/'],
  },
  {
    id: 'cascada-mineral-vegetacion',
    src: {
      es: '/media/grutas-tolantongo-cascada-mineral-vegetacion.mp4',
      en: '/media/tolantongo-grottoes-mineral-waterfall-vegetation.mp4',
    },
    alt: {
      es: 'Cascada mineral con abundante vegetación',
      en: 'Mineral waterfall with lush vegetation',
    },
    title: {
      es: 'Cascada mineral — Grutas de Tolantongo',
      en: 'Mineral waterfall — Tolantongo Grottoes',
    },
    duration: 10,
    width: 360,
    height: 480,
    category: 'cascadas',
    pages: ['/actividades/senderismo/', '/en/activities/hiking/'],
  },

  // ─── GRUTA / CAVE ──────────────────────────────────
  {
    id: 'cascada-termal-minerales',
    src: {
      es: '/media/grutas-tolantongo-cascada-termal-aguas-minerales.mp4',
      en: '/media/tolantongo-grottoes-thermal-waterfall-mineral-waters.mp4',
    },
    alt: {
      es: 'Mujer bajo la cascada termal de aguas minerales en la gruta',
      en: 'Woman under the thermal mineral waterfall inside the grotto',
    },
    title: {
      es: 'Cascada termal en la gruta — Grutas de Tolantongo',
      en: 'Thermal waterfall in the grotto — Tolantongo Grottoes',
    },
    duration: 41,
    width: 720,
    height: 1280,
    category: 'gruta',
    pages: ['/grutas/', '/en/grottoes/'],
  },
  {
    id: 'gruta-cascada-gigante',
    src: {
      es: '/media/grutas-tolantongo-gruta-cascada-gigante-visitantes.mp4',
      en: '/media/tolantongo-grottoes-cave-giant-waterfall-visitors.mp4',
    },
    alt: {
      es: 'Cascada gigante dentro de la gruta con visitantes nadando',
      en: 'Giant waterfall inside the grotto with visitors swimming',
    },
    title: {
      es: 'Interior de la gruta — Grutas de Tolantongo',
      en: 'Inside the grotto — Tolantongo Grottoes',
    },
    duration: 38,
    width: 720,
    height: 1280,
    category: 'gruta',
    pages: ['/', '/en/', '/grutas/', '/en/grottoes/'],
  },
  {
    id: 'poza-termal-vapor',
    src: {
      es: '/media/grutas-tolantongo-poza-termal-vapor-cascada-piedra.mp4',
      en: '/media/tolantongo-grottoes-thermal-pool-steam-stone-waterfall.mp4',
    },
    alt: {
      es: 'Poza termal con vapor y cascada de piedra natural',
      en: 'Thermal pool with steam and natural stone waterfall',
    },
    title: {
      es: 'Poza termal con vapor — Grutas de Tolantongo',
      en: 'Steaming thermal pool — Tolantongo Grottoes',
    },
    duration: 25,
    width: 720,
    height: 1280,
    category: 'gruta',
    pages: ['/aguas-termales/', '/en/thermal-waters/'],
  },

  // ─── NATACIÓN / SWIMMING ────────────────────────────
  {
    id: 'poza-infinita-canon',
    src: {
      es: '/media/grutas-tolantongo-poza-infinita-vista-canon-montanas.mp4',
      en: '/media/tolantongo-grottoes-infinity-pool-canyon-mountain-view.mp4',
    },
    alt: {
      es: 'Mujer en poza infinita con vista al cañón y montañas',
      en: 'Woman in infinity pool overlooking the canyon and mountains',
    },
    title: {
      es: 'Poza infinita con vista al cañón — Grutas de Tolantongo',
      en: 'Infinity pool with canyon view — Tolantongo Grottoes',
    },
    duration: 11,
    width: 720,
    height: 1280,
    category: 'natacion',
    pages: ['/actividades/natacion-termal/', '/en/activities/thermal-swimming/', '/', '/en/'],
  },
  {
    id: 'natacion-atardecer',
    src: {
      es: '/media/grutas-tolantongo-natacion-termal-atardecer-canon.mp4',
      en: '/media/tolantongo-grottoes-thermal-swimming-sunset-canyon.mp4',
    },
    alt: {
      es: 'Natación termal al atardecer en el cañón de Tolantongo',
      en: 'Thermal swimming at sunset in the Tolantongo canyon',
    },
    title: {
      es: 'Natación termal al atardecer — Grutas de Tolantongo',
      en: 'Thermal swimming at sunset — Tolantongo Grottoes',
    },
    duration: 40,
    width: 720,
    height: 1280,
    category: 'natacion',
    pages: ['/', '/en/', '/actividades/natacion-termal/', '/en/activities/thermal-swimming/'],
  },
  {
    id: 'poza-cenital',
    src: {
      es: '/media/grutas-tolantongo-poza-natural-turquesa-vista-cenital.mp4',
      en: '/media/tolantongo-grottoes-natural-turquoise-pool-overhead-view.mp4',
    },
    alt: {
      es: 'Vista cenital de una poza natural turquesa',
      en: 'Overhead view of a natural turquoise pool',
    },
    title: {
      es: 'Poza natural turquesa — Grutas de Tolantongo',
      en: 'Natural turquoise pool — Tolantongo Grottoes',
    },
    duration: 38,
    width: 720,
    height: 1280,
    category: 'natacion',
    pages: ['/actividades/natacion-termal/', '/en/activities/thermal-swimming/'],
  },

  // ─── CAÑÓN / CANYON ─────────────────────────────────
  {
    id: 'canon-puente-panoramica',
    src: {
      es: '/media/grutas-tolantongo-canon-pozas-puente-colgante-panoramica.mp4',
      en: '/media/tolantongo-grottoes-canyon-pools-hanging-bridge-panoramic.mp4',
    },
    alt: {
      es: 'Vista panorámica del cañón con pozas y puente colgante',
      en: 'Panoramic view of the canyon with pools and hanging bridge',
    },
    title: {
      es: 'Cañón y puente colgante — Grutas de Tolantongo',
      en: 'Canyon and hanging bridge — Tolantongo Grottoes',
    },
    duration: 6,
    width: 360,
    height: 450,
    category: 'canon',
    pages: ['/grutas/canon/', '/en/grottoes/canyon/'],
  },

  // ─── HOSPEDAJE / LODGING ────────────────────────────
  {
    id: 'hotel-pozas-aerea',
    src: {
      es: '/media/grutas-tolantongo-hotel-pozas-cabanas-vista-aerea.mp4',
      en: '/media/tolantongo-grottoes-hotel-pools-cabins-aerial-view.mp4',
    },
    alt: {
      es: 'Vista aérea del hotel con pozas escalonadas y cabañas',
      en: 'Aerial view of the hotel with tiered pools and cabins',
    },
    title: {
      es: 'Hotel y cabañas — Grutas de Tolantongo',
      en: 'Hotel and cabins — Tolantongo Grottoes',
    },
    duration: 24,
    width: 720,
    height: 1280,
    category: 'hospedaje',
    pages: ['/hospedaje/', '/en/lodging/', '/hospedaje/cabanas/', '/en/lodging/cabins/', '/precios/', '/en/prices/'],
  },
  {
    id: 'cabana-interior',
    src: {
      es: '/media/grutas-tolantongo-cabana-hotel-interior-habitacion.mp4',
      en: '/media/tolantongo-grottoes-cabin-hotel-room-interior.mp4',
    },
    alt: {
      es: 'Interior de habitación de cabaña del hotel en Tolantongo',
      en: 'Interior of a cabin hotel room at Tolantongo',
    },
    title: {
      es: 'Interior de cabaña — Grutas de Tolantongo',
      en: 'Cabin interior — Tolantongo Grottoes',
    },
    duration: 50,
    width: 720,
    height: 1280,
    category: 'hospedaje',
    pages: ['/hospedaje/cabanas/', '/en/lodging/cabins/'],
  },
];

// ─── Helper functions ──────────────────────────────────

/** Get a single video by its ID */
export function getVideo(id: string): VideoMeta | undefined {
  return videos.find(v => v.id === id);
}

/** Get all videos for a given category */
export function getVideosByCategory(category: VideoCategory): VideoMeta[] {
  return videos.filter(v => v.category === category);
}

/** Get all videos assigned to a specific page path */
export function getVideosForPage(pagePath: string): VideoMeta[] {
  return videos.filter(v => v.pages.includes(pagePath));
}

/** Get the localized src for a video */
export function getVideoSrc(id: string, lang: Lang): string {
  const v = getVideo(id);
  return v ? v.src[lang] : '';
}

/** Get the localized alt text for a video */
export function getVideoAlt(id: string, lang: Lang): string {
  const v = getVideo(id);
  return v ? v.alt[lang] : '';
}
