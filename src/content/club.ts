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

  // PENDIENTE: dirección postal exacta + coordenadas + enlace Maps real.
  address: 'Magaluf, Calvià, Mallorca (Illes Balears)',
  mapsEmbed:
    'https://www.google.com/maps?q=Magaluf+Sport+Club+Calvia+Mallorca&output=embed',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Magaluf+Sport+Club+Calvia',
  geo: { lat: 39.5101, lng: 2.5326 }, // aprox. Magaluf — PENDIENTE precisar

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
    { name: 'Maxi Zanazzi', roleKey: 'head', initials: 'MZ' },
    { name: 'Ángel Bonilla', roleKey: 'fitness', initials: 'AB' },
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
