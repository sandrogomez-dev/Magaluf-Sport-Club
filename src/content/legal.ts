import { club } from './club';

/**
 * Textos legales (plantilla estándar España: LSSI-CE + RGPD/LOPDGDD).
 * En español (versión con validez bajo legislación española). PENDIENTE de
 * revisión por un profesional antes de publicar en producción.
 */
const holder = {
  name: 'Miguel Bauzá López',
  nif: '43035026W',
  brand: 'Magaluf Sport Club',
  address: 'Av. Pere Vaquer Ramis, 47, 07181 Magaluf, Illes Balears (España)',
  email: club.email,
  phone: club.phoneDisplay,
  web: 'magalufsportclub.com',
};

type Section = { heading?: string; paragraphs?: string[]; list?: string[] };
type Doc = { title: string; sections: Section[] };

export const legalUpdated = '08/07/2026';

export const avisoLegal: Doc = {
  title: 'Aviso Legal',
  sections: [
    {
      heading: '1. Datos identificativos',
      paragraphs: [
        `En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este sitio web es:`,
      ],
      list: [
        `Titular: ${holder.name}`,
        `NIF: ${holder.nif}`,
        `Nombre comercial: ${holder.brand}`,
        `Domicilio: ${holder.address}`,
        `Email: ${holder.email}`,
        `Teléfono: ${holder.phone}`,
      ],
    },
    {
      heading: '2. Objeto',
      paragraphs: [
        'El presente aviso legal regula el uso del sitio web, cuya finalidad es informar sobre los servicios e instalaciones del club (pádel, escuela, metodología de entrenamiento, fútbol 7, eventos) y facilitar el contacto y la reserva a través de plataformas de terceros.',
      ],
    },
    {
      heading: '3. Condiciones de uso',
      paragraphs: [
        'El usuario se compromete a utilizar el sitio web y sus contenidos de forma lícita y conforme a la buena fe, absteniéndose de cualquier uso que pueda dañar el funcionamiento del sitio o los derechos de terceros.',
      ],
    },
    {
      heading: '4. Propiedad intelectual e industrial',
      paragraphs: [
        'Todos los contenidos del sitio (textos, imágenes, logotipos, diseño y marcas, incluida The Padel Performance Method®) son titularidad del club o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción sin autorización.',
      ],
    },
    {
      heading: '5. Responsabilidad',
      paragraphs: [
        'El titular no se hace responsable de los daños que pudieran derivarse del uso del sitio, ni del contenido de sitios de terceros enlazados (por ejemplo, la plataforma de reservas Playtomic).',
      ],
    },
    {
      heading: '6. Legislación aplicable',
      paragraphs: [
        'Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.',
      ],
    },
  ],
};

export const privacidad: Doc = {
  title: 'Política de Privacidad',
  sections: [
    {
      heading: '1. Responsable del tratamiento',
      list: [
        `Responsable: ${holder.name} (${holder.brand})`,
        `NIF: ${holder.nif}`,
        `Domicilio: ${holder.address}`,
        `Email: ${holder.email}`,
      ],
    },
    {
      heading: '2. Finalidad del tratamiento',
      paragraphs: [
        'Tratamos los datos que nos facilitas a través del formulario de contacto (nombre, email, teléfono y mensaje) con la única finalidad de atender tu consulta o solicitud de información sobre nuestros servicios.',
      ],
    },
    {
      heading: '3. Legitimación',
      paragraphs: [
        'La base legal es tu consentimiento, que otorgas al enviar el formulario. No estás obligado a facilitar tus datos, pero sin ellos no podremos atender tu solicitud.',
      ],
    },
    {
      heading: '4. Destinatarios y conservación',
      paragraphs: [
        'No cedemos tus datos a terceros salvo obligación legal. El sitio está alojado en Netlify y los envíos de formulario se gestionan a través de dicho proveedor. Conservamos tus datos el tiempo necesario para atender tu solicitud y, después, durante los plazos legalmente exigibles.',
      ],
    },
    {
      heading: '5. Tus derechos',
      paragraphs: [
        `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${holder.email}. Asimismo, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
      ],
    },
  ],
};

export const cookies: Doc = {
  title: 'Política de Cookies',
  sections: [
    {
      heading: '1. Qué son las cookies',
      paragraphs: [
        'Las cookies son pequeños archivos que se almacenan en tu dispositivo al navegar y que permiten, entre otras cosas, recordar tus preferencias y obtener información estadística sobre el uso del sitio.',
      ],
    },
    {
      heading: '2. Cookies que utilizamos',
      list: [
        'Técnicas o necesarias: imprescindibles para el funcionamiento del sitio y para recordar tu decisión sobre las cookies. No requieren consentimiento.',
        'Analíticas (Google Analytics): nos ayudan a entender cómo se usa la web para mejorarla. Solo se activan si aceptas.',
        'Publicidad (Meta Pixel): permiten medir y optimizar campañas. Solo se activan si aceptas.',
      ],
    },
    {
      heading: '3. Gestión de cookies',
      paragraphs: [
        'Al entrar en la web puedes aceptar o rechazar las cookies no necesarias. Puedes cambiar tu decisión en cualquier momento borrando las cookies desde la configuración de tu navegador. Rechazar las cookies analíticas y de publicidad no afecta al funcionamiento del sitio.',
      ],
    },
  ],
};

export const legalDocs = { avisoLegal, privacidad, cookies };
