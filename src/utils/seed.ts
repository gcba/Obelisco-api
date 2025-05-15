import Image from '@models/image';
import { sequelize } from '@models/index';
import Link from '@models/link';
import Phone from '@models/Phone';
import SocialMedia from '@models/SocialMedia';

const seedDatabase = async () => {
  try {
    console.log('Iniciando seeding...');

    // Sincronizar modelos
    await sequelize.sync({ force: true }); // ¡Cuidado! Esto elimina y recrea las tablas.

    await Phone.bulkCreate([
      {
        name: '102 - Niñez y Adolescencia',
        number: 'tel:102',
      },
      {
        name: '103 - Emergencias',
        number: 'tel:103',
      },
      {
        name: '107 - SAME',
        number: 'tel:107',
      },
      {
        name: '911 - Policía',
        number: 'tel:911',
      },
      {
        name: '144 - Violencia de género',
        number: 'tel:144',
      },
      {
        name: '147 - Atención ciudadana',
        number: 'tel:147',
      },
    ]);

    await SocialMedia.bulkCreate([
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/GCBA',
        icon: 'bx bxl-facebook-circle',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/gcba',
        icon: 'bx bxl-instagram-alt',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/buenosaires',
        icon: 'bx bxl-twitter',
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/user/GCBA',
        icon: 'bx bxl-youtube',
      },
      {
        name: 'LinkedIn',
        url: 'https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires',
        icon: 'bx bxl-linkedin-square',
      },
      {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@buenosaires',
        icon: 'bx bxl-tiktok',
      },
      {
        name: 'Pinterest',
        url: 'https://www.pinterest.es/buenosaires',
        icon: 'bx bxl-pinterest',
      },
    ]);

    await Link.bulkCreate([
      {
        name: 'Términos y condiciones',
        url: 'https://buenosaires.gob.ar/terminos-y-condiciones',
      },
      {
        name: 'Política de privacidad',
        url: 'https://buenosaires.gob.ar/privacidad',
      },
      {
        name: 'Oficios judiciales',
        url: 'https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales',
      },
      {
        name: 'Transparencia',
        url: 'https://buenosaires.gob.ar/gobierno/transparencia',
      },
      {
        name: 'Boletín oficial',
        url: 'https://boletinoficial.buenosaires.gob.ar',
      },
    ]);

    await Image.bulkCreate([
      {
        name: 'ciudad-ba.svg',
        alt: 'Ciudad de Buenos Aires',
        url: '/footer/ciudad-ba.svg',
      },
      {
        name: 'ciudad-ba-sm.svg',
        alt: 'Ciudad de Buenos Aires',
        url: '/footer/ciudad-ba-sm.svg',
      },
      {
        name: 'vamos-ba.svg',
        alt: 'Vamos Buenos Aires',
        url: '/footer/vamos-ba.svg',
      },
      {
        name: 'logo_ba.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires - Inicio',
        url: '/header/logo_ba.svg',
      },
      {
        name: 'logo_ba_mobile.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires - Inicio',
        url: '/header/logo_ba_mobile.svg',
      },
    ]);

    console.log('Seeding completado exitosamente.');
    process.exit(0);
  } catch (err) {
    console.error('Error durante el seeding:', err);
    process.exit(1);
  }
};

seedDatabase();
