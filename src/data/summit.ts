/**
 * SOLVÉ Global Summit — every word on /global-summit, in both languages.
 *
 * English is verbatim from Rida's November 2026 mockups and Website User Flow;
 * nothing is invented, corrected or paraphrased. The only English not printed on
 * a mockup is interface wording (menu, form errors, the confirmation line,
 * page descriptions for search engines), kept as plain as possible.
 *
 * Spanish (`es`): a working translation by Avallon, published 2026-11-20 at
 * Ali's request so the ES switch works before Rida's approved copy arrives.
 * When her copy comes, replace these strings with hers word for word. Any
 * string left out falls back to English, so nothing is ever blank.
 */

export type Lang = 'en' | 'es'

export const SUMMIT_BASE = '/global-summit'

export const summitPaths = {
  home: SUMMIT_BASE,
  about: `${SUMMIT_BASE}/about`,
  platform: `${SUMMIT_BASE}/platform`,
  challenges: `${SUMMIT_BASE}/global-challenges`,
  impact: `${SUMMIT_BASE}/impact`,
  contact: `${SUMMIT_BASE}/contact`,
  register: `${SUMMIT_BASE}/register`,
} as const

/** Stable ids for the four pillars; they are also the anchors on The Platform page. */
export const PILLAR_IDS = ['illuminate', 'equip', 'unite', 'restore'] as const

/**
 * The five Area of Interest options from the Register mockup. The English label
 * is what reaches the Google Form, whatever language the visitor reads, so the
 * Form's choices must match these exactly.
 */
export const INTEREST_OPTIONS = [
  'Sponsorship',
  'Speaker / Contributor',
  'Organization',
  'Delegation',
  'Collaboration',
] as const

const en = {
  brand: 'SOLVÉ Global Summit',
  logoAlt: 'SOLVÉ Global Summit',

  nav: {
    home: 'Home',
    about: 'About the Summit',
    challenges: 'Global Challenges',
    platform: 'The Platform',
    pillars: 'Four Pillars',
    impact: 'Impact',
    contact: 'Contact',
    register: 'Register Interest',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    solVe: 'Sol Vé Custom Events',
  },

  cta: 'Register Interest',

  meta: {
    home: {
      title: 'SOLVÉ Global Summit — Coming Soon 2028, Quintana Roo, Mexico',
      description:
        'An independent international convening platform connecting global leadership, knowledge, institutions, frontline workers and support services to strengthen coordinated humanitarian responses to societal challenges.',
    },
    about: {
      title: 'About the Summit | SOLVÉ Global Summit',
      description:
        'SOLVÉ Global Summit is an independent, incorporated Canadian company developing an international convening platform, built for meaningful collaboration beyond any single gathering.',
    },
    platform: {
      title: 'The Platform | SOLVÉ Global Summit',
      description:
        'A comprehensive framework that convenes expertise, builds capacity, drives collaboration and sustains the people behind the work.',
    },
    challenges: {
      title: 'Global Challenges | SOLVÉ Global Summit',
      description: 'Human trafficking crosses borders. So must our responses.',
    },
    impact: {
      title: 'Impact | SOLVÉ Global Summit',
      description:
        'The Summit creates measurable, lasting impact through people, partnerships and practical commitments.',
    },
    contact: {
      title: 'Contact | SOLVÉ Global Summit',
      description: 'Let’s explore how you can be part of SOLVÉ Global Summit.',
    },
    register: {
      title: 'Register Your Interest | SOLVÉ Global Summit',
      description:
        'Be part of a global platform for leadership, collaboration and lasting impact.',
    },
  },

  home: {
    line1: 'The Right People.',
    line2: 'The Right Conversations.',
    line3: 'Working Toward Shared Solutions.',
    body: 'An independent international convening platform connecting global leadership, knowledge, institutions, frontline workers and support services to strengthen coordinated humanitarian responses to societal challenges.',
    status: 'Coming Soon 2028',
    location: 'Quintana Roo, Mexico',
    imageAlt:
      'Leaders from different regions in conversation around a table on a terrace overlooking the sea',
  },

  about: {
    line1: 'Built to Convene.',
    line2: 'Designed to Endure.',
    body: 'SOLVÉ Global Summit is an independent, incorporated Canadian company developing an international convening platform, built for meaningful collaboration beyond any single gathering.',
    imageAlt: 'Flags of many nations lining the approach to an international headquarters',
    pillars: [
      {
        title: 'An Enduring Global Platform',
        body: 'Connecting expertise, institutions and leadership across borders.',
      },
      {
        title: 'A Recurring Convening Model',
        body: 'A proposed biennial cycle, beginning with a human trafficking summit in 2028.',
      },
      {
        title: 'A Sustainable Global Platform',
        body: 'Year-round engagement, strategic collaboration and diversified revenue opportunities to sustain long-term impact.',
      },
    ],
    closing: 'The Gathering Concludes. The Collaboration Continues.',
  },

  platform: {
    line1: 'The Platform.',
    line2: 'Four Pillars. A Shared Purpose.',
    body: 'A comprehensive framework that convenes expertise, builds capacity, drives collaboration and sustains the people behind the work.',
    pillars: [
      { title: 'Illuminate', body: 'Advance evidence, awareness and shared understanding.' },
      { title: 'Equip', body: 'Strengthen capacity through knowledge, skills and resources.' },
      { title: 'Unite', body: 'Build cross-sector collaboration for coordinated action.' },
      {
        title: 'Restore',
        body: 'Sustain the people behind the work, through care, wellness and support.',
      },
    ],
  },

  challenges: {
    line1: 'Global Challenges.',
    line2: 'Shared Responsibility.',
    body: 'Human trafficking crosses borders. So must our responses.',
    imageAlt: 'The Americas at night, cities linked by lines of light',
    stats: [
      { value: '49.6 million', label: 'people living in modern slavery (2021)' },
      { value: '$236B', label: 'annual illegal profits from human trafficking' },
      { value: '+25%', label: 'detected trafficking in victims (2022 vs. 2019)' },
    ],
    source: 'Source: ILO (2022), UNODC (2023)',
    areasHeading: 'Our Impact Areas',
    areas: [
      {
        title: 'Prevention',
        body: 'Addresses root causes and reduce vulnerability across communities.',
      },
      {
        title: 'Protection',
        body: 'Enhances safety, support and dignity for those at risk and affected.',
      },
      {
        title: 'Justice',
        body: 'Strengthens accountability and enforcement across borders and sectors.',
      },
      {
        title: 'Restoration',
        body: 'Enable long-term recovery, reintegration and opportunities for a renewed future.',
      },
    ],
  },

  impact: {
    line1: 'Impact.',
    line2: 'From Dialogue to Action.',
    body: 'The Summit creates measurable, lasting impact through people, partnerships and practical commitments.',
    outcomes: [
      { title: 'Relationships', body: 'Build trusted, cross-sector connections.' },
      { title: 'Shared Understanding', body: 'Align on evidence, needs and solutions.' },
      { title: 'Collaborative Commitments', body: 'Translate dialogue into coordinated action.' },
    ],
  },

  contact: {
    heading: 'Contact Us.',
    body: 'Let’s explore how you can be part of SOLVÉ Global Summit.',
    emailLabel: 'General Inquiries',
    email: 'info@solveglobalsummit.com',
    location: 'Calgary, Alberta, Canada',
    website: 'www.solveglobalsummit.com',
    websiteHref: 'https://www.solveglobalsummit.com',
  },

  register: {
    line1: 'Register Your',
    line2: 'Interest',
    body: 'Be part of a global platform for leadership, collaboration and lasting impact.',
    areasHeading: 'Areas of Involvement',
    /** Same order as INTEREST_OPTIONS. `title` is what the visitor reads. */
    areas: [
      { title: 'Sponsorship', body: 'Support the Summit and its long-term impact.' },
      { title: 'Speaker / Contributor', body: 'Share expertise, evidence or lived experience.' },
      { title: 'Organization', body: 'Represent your organization or initiative.' },
      { title: 'Delegation', body: 'Join the gathering in 2028.' },
      { title: 'Collaboration', body: 'Explore research, training or program opportunities.' },
    ],
    fields: {
      fullName: 'Full Name',
      email: 'Email Address',
      organization: 'Organization / Affiliation',
      interest: 'Area of Interest',
      message: 'Message (optional)',
      select: 'Select an option',
    },
    errors: {
      fullName: 'Please enter your full name.',
      email: 'Please enter a valid email address.',
      interest: 'Please select an area of interest.',
      send: 'Your submission could not be sent. Please try again, or email info@solveglobalsummit.com.',
    },
    submit: 'Submit Interest',
    sending: 'Sending…',
    confirmationHeading: 'Thank you.',
    confirmation: 'Your interest has been received. We will be in touch as the Summit advances.',
    again: 'Submit another response',
  },

  footer: {
    rights: 'All rights reserved.',
    explore: 'Explore',
    contact: 'Contact',
  },
}

export type SummitCopy = typeof en

type DeepPartial<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepPartial<U>[]
    : { [K in keyof T]?: DeepPartial<T[K]> }

/**
 * Spanish, keyed exactly as `en` above. Avallon's working translation —
 * neutral Latin-American Spanish, formal "usted" — pending Rida's review.
 */
const es: DeepPartial<SummitCopy> = {
  nav: {
    home: 'Inicio',
    about: 'Acerca de la Cumbre',
    challenges: 'Desafíos Globales',
    platform: 'La Plataforma',
    pillars: 'Cuatro Pilares',
    impact: 'Impacto',
    contact: 'Contacto',
    register: 'Registrar Interés',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
  },

  cta: 'Registrar Interés',

  meta: {
    home: {
      title: 'SOLVÉ Global Summit — Próximamente 2028, Quintana Roo, México',
      description:
        'Una plataforma internacional e independiente de convocatoria que conecta el liderazgo global, el conocimiento, las instituciones, a los trabajadores de primera línea y a los servicios de apoyo para fortalecer respuestas humanitarias coordinadas ante los desafíos sociales.',
    },
    about: {
      title: 'Acerca de la Cumbre | SOLVÉ Global Summit',
      description:
        'SOLVÉ Global Summit es una empresa canadiense independiente y constituida que desarrolla una plataforma internacional de convocatoria, creada para una colaboración significativa más allá de cualquier encuentro individual.',
    },
    platform: {
      title: 'La Plataforma | SOLVÉ Global Summit',
      description:
        'Un marco integral que convoca experiencia, fortalece capacidades, impulsa la colaboración y sostiene a las personas detrás del trabajo.',
    },
    challenges: {
      title: 'Desafíos Globales | SOLVÉ Global Summit',
      description: 'La trata de personas cruza fronteras. Nuestras respuestas también deben hacerlo.',
    },
    impact: {
      title: 'Impacto | SOLVÉ Global Summit',
      description:
        'La Cumbre genera un impacto medible y duradero a través de las personas, las alianzas y los compromisos prácticos.',
    },
    contact: {
      title: 'Contacto | SOLVÉ Global Summit',
      description: 'Exploremos cómo puede formar parte de SOLVÉ Global Summit.',
    },
    register: {
      title: 'Registre su Interés | SOLVÉ Global Summit',
      description: 'Forme parte de una plataforma global de liderazgo, colaboración e impacto duradero.',
    },
  },

  home: {
    line1: 'Las Personas Indicadas.',
    line2: 'Las Conversaciones Indicadas.',
    line3: 'Trabajando Hacia Soluciones Compartidas.',
    body: 'Una plataforma internacional e independiente de convocatoria que conecta el liderazgo global, el conocimiento, las instituciones, a los trabajadores de primera línea y a los servicios de apoyo para fortalecer respuestas humanitarias coordinadas ante los desafíos sociales.',
    status: 'Próximamente 2028',
    location: 'Quintana Roo, México',
    imageAlt:
      'Líderes de distintas regiones conversan alrededor de una mesa en una terraza con vista al mar',
  },

  about: {
    line1: 'Creada para Convocar.',
    line2: 'Diseñada para Perdurar.',
    body: 'SOLVÉ Global Summit es una empresa canadiense independiente y constituida que desarrolla una plataforma internacional de convocatoria, creada para una colaboración significativa más allá de cualquier encuentro individual.',
    imageAlt: 'Banderas de muchas naciones a lo largo del acceso a una sede internacional',
    pillars: [
      {
        title: 'Una Plataforma Global Duradera',
        body: 'Conecta experiencia, instituciones y liderazgo a través de las fronteras.',
      },
      {
        title: 'Un Modelo de Convocatoria Recurrente',
        body: 'Un ciclo bienal propuesto, que comienza con una cumbre sobre la trata de personas en 2028.',
      },
      {
        title: 'Una Plataforma Global Sostenible',
        body: 'Participación durante todo el año, colaboración estratégica y fuentes de ingresos diversificadas para sostener el impacto a largo plazo.',
      },
    ],
    closing: 'El Encuentro Concluye. La Colaboración Continúa.',
  },

  platform: {
    line1: 'La Plataforma.',
    line2: 'Cuatro Pilares. Un Propósito Compartido.',
    body: 'Un marco integral que convoca experiencia, fortalece capacidades, impulsa la colaboración y sostiene a las personas detrás del trabajo.',
    pillars: [
      { title: 'Iluminar', body: 'Impulsar la evidencia, la conciencia y el entendimiento compartido.' },
      { title: 'Equipar', body: 'Fortalecer capacidades mediante conocimientos, habilidades y recursos.' },
      { title: 'Unir', body: 'Construir colaboración intersectorial para una acción coordinada.' },
      {
        title: 'Restaurar',
        body: 'Sostener a las personas detrás del trabajo, mediante el cuidado, el bienestar y el apoyo.',
      },
    ],
  },

  challenges: {
    line1: 'Desafíos Globales.',
    line2: 'Responsabilidad Compartida.',
    body: 'La trata de personas cruza fronteras. Nuestras respuestas también deben hacerlo.',
    imageAlt: 'Las Américas de noche, con ciudades unidas por líneas de luz',
    stats: [
      { value: '49.6 millones', label: 'de personas viven en esclavitud moderna (2021)' },
      { value: '$236 mil millones', label: 'en ganancias ilegales anuales por la trata de personas' },
      { value: '+25%', label: 'de víctimas de trata detectadas (2022 vs. 2019)' },
    ],
    source: 'Fuente: OIT (2022), UNODC (2023)',
    areasHeading: 'Nuestras Áreas de Impacto',
    areas: [
      {
        title: 'Prevención',
        body: 'Aborda las causas de fondo y reduce la vulnerabilidad en las comunidades.',
      },
      {
        title: 'Protección',
        body: 'Mejora la seguridad, el apoyo y la dignidad de las personas en riesgo y afectadas.',
      },
      {
        title: 'Justicia',
        body: 'Fortalece la rendición de cuentas y la aplicación de la ley entre fronteras y sectores.',
      },
      {
        title: 'Restauración',
        body: 'Hace posible la recuperación a largo plazo, la reintegración y las oportunidades para un futuro renovado.',
      },
    ],
  },

  impact: {
    line1: 'Impacto.',
    line2: 'Del Diálogo a la Acción.',
    body: 'La Cumbre genera un impacto medible y duradero a través de las personas, las alianzas y los compromisos prácticos.',
    outcomes: [
      { title: 'Relaciones', body: 'Construir conexiones intersectoriales de confianza.' },
      { title: 'Entendimiento Compartido', body: 'Alinearse en torno a la evidencia, las necesidades y las soluciones.' },
      { title: 'Compromisos Colaborativos', body: 'Convertir el diálogo en acción coordinada.' },
    ],
  },

  contact: {
    heading: 'Contáctenos.',
    body: 'Exploremos cómo puede formar parte de SOLVÉ Global Summit.',
    emailLabel: 'Consultas Generales',
    location: 'Calgary, Alberta, Canadá',
  },

  register: {
    line1: 'Registre su',
    line2: 'Interés',
    body: 'Forme parte de una plataforma global de liderazgo, colaboración e impacto duradero.',
    areasHeading: 'Áreas de Participación',
    areas: [
      { title: 'Patrocinio', body: 'Apoye la Cumbre y su impacto a largo plazo.' },
      { title: 'Ponente / Colaborador', body: 'Comparta su experiencia, evidencia o vivencias.' },
      { title: 'Organización', body: 'Represente a su organización o iniciativa.' },
      { title: 'Delegación', body: 'Únase al encuentro en 2028.' },
      { title: 'Colaboración', body: 'Explore oportunidades de investigación, capacitación o programas.' },
    ],
    fields: {
      fullName: 'Nombre Completo',
      email: 'Correo Electrónico',
      organization: 'Organización / Afiliación',
      interest: 'Área de Interés',
      message: 'Mensaje (opcional)',
      select: 'Seleccione una opción',
    },
    errors: {
      fullName: 'Ingrese su nombre completo.',
      email: 'Ingrese un correo electrónico válido.',
      interest: 'Seleccione un área de interés.',
      send: 'No se pudo enviar su registro. Inténtelo de nuevo o escriba a info@solveglobalsummit.com.',
    },
    submit: 'Enviar Interés',
    sending: 'Enviando…',
    confirmationHeading: 'Gracias.',
    confirmation: 'Hemos recibido su interés. Nos pondremos en contacto a medida que avance la Cumbre.',
    again: 'Enviar otra respuesta',
  },

  footer: {
    rights: 'Todos los derechos reservados.',
    explore: 'Explorar',
    contact: 'Contacto',
  },
}

/** Overlays `partial` onto `base`, key by key and item by item; anything missing keeps the English. */
function overlay<T>(base: T, partial: unknown): T {
  if (partial === undefined || partial === null) return base
  if (typeof base === 'string') return (typeof partial === 'string' && partial ? partial : base) as T
  if (Array.isArray(base)) {
    const items = Array.isArray(partial) ? partial : []
    return base.map((item, i) => overlay(item, items[i])) as T
  }
  if (typeof base === 'object') {
    const out: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(base as Record<string, unknown>)) {
      out[key] = overlay(value, (partial as Record<string, unknown>)[key])
    }
    return out as T
  }
  return base
}

export const summitCopy: Record<Lang, SummitCopy> = {
  en,
  es: overlay(en, es),
}
