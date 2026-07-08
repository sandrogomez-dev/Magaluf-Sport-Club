/**
 * Datos del club NO traducibles (contacto, horario, instalaciones, paquetes).
 * Fuente: web actual + Instagram (@magalufsportclub) + flyer "Padel Holidays".
 * PENDIENTE confirmar con el cliente: dirección exacta, geo, vigencia de precios.
 */
export const club = {
  name: 'Magaluf Sport Club',
  tagline: 'Pádel · Fútbol 7 · Eventos',
  phone: '+34609140624',
  phoneDisplay: '+34 609 140 624',
  email: 'magalufsportclub@gmail.com',
  whatsapp: '34609140624',
  booking: 'https://playtomic.com/clubs/magaluf-sport-club',
  instagram: 'https://www.instagram.com/magalufsportclub/',
  website: 'https://magalufsportclub.com',
  mpe: 'https://mallorcapadelexperience.com',
  // Analítica: rellenar cuando el cliente pase los IDs. Vacío = no se carga nada.
  analytics: {
    ga4: '', // p. ej. 'G-XXXXXXXXXX'
    metaPixel: '', // p. ej. '123456789012345'
  },

  address: 'Av. Pere Vaquer Ramis, 47, 07181 Magaluf, Illes Balears',
  mapsEmbed:
    'https://www.google.com/maps?q=Magaluf+Sport+Club,+Av.+Pere+Vaquer+Ramis+47,+07181+Magaluf&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Magaluf+Sport+Club,+Av.+Pere+Vaquer+Ramis+47,+07181+Magaluf',
  geo: { lat: 39.5101, lng: 2.5326 }, // aprox. — afinar si hace falta

  hours: {
    weekdays: '09:00–22:00',
    saturday: '09:00–14:00',
  },

  facilities: {
    padelCourts: 7,
    football7: 1,
    cafeBar: true,
    kidsArea: true,
    parking: true,
  },

  // Equipo de entrenadores. PENDIENTE: fotos individuales. Dany Ferrer dado de baja del equipo.
  team: [
    { key: 'maxi', name: 'Maxi Zanazzi', photo: 'coach-maxi.jpg', initials: 'MZ' },
    { key: 'angel', name: 'Ángel Bonilla', photo: 'coach-angel.jpg', initials: 'AB' },
    { key: 'miki', name: 'Miki', photo: null, initials: 'MK' },
    { key: 'silvia', name: 'Silvia', photo: null, initials: 'SL' },
  ],

  // Reseñas reales de Google (no traducir: se muestran en su idioma original).
  google: {
    score: 4.9,
    count: 22,
    url: 'https://www.google.com/maps/search/?api=1&query=Magaluf+Sport+Club,+Av.+Pere+Vaquer+47,+07181+Magaluf',
  },
  reviews: [
    { name: 'Mattias Eriksson', lang: 'en', text: 'This club has fantastic padel facilities, and my daily games and coaching sessions here have been an absolute highlight!' },
    { name: 'Christian Haupt', lang: 'en', text: 'Very nice atmosphere, great people, perfectly maintained courts — absolutely brilliant, we love it!!' },
    { name: 'Sven Broger', lang: 'de', text: 'Schöne und gepflegte Anlage zum Padel und Fussball spielen inkl. Clubhaus und Umkleiden. Unser Padeltrainer Maxi ist wahnsinnig kompetent…' },
    { name: 'José E. Marín', lang: 'es', text: 'Muy buenas instalaciones, trato con la gente y restaurante.' },
    { name: 'Martina', lang: 'de', text: 'Die Anlage ist super, es hat einen Spielplatz für die Kleinen und ein Fussballfeld das man zu einem fairen Preis mieten kann. Die Eigentümer sind sehr freundlich und kompetent.' },
    { name: 'hoWgan', lang: 'en', text: 'Nice padel spot with great and friendly owners!' },
  ],

  // Paquete "Mallorca Padel Experience" (del flyer de Instagram) — PENDIENTE confirmar vigencia.
  holidays: {
    hotel: 'Hotel Flamboian Caribe & Spa',
    nights: 6,
    days: 7,
    board: 'half-board',
    priceLow: 600, // mar, abr, may, oct
    priceHigh: 750, // jun, sep
    currency: '€',
  },
} as const;
