import readJson from '@utils/readJSON';
import { Link, Phone, SocialMedia, Footer, Image } from '@utils/types';

export const getFooterComplete = async () => {
  try {
    const links = await readJson<Link>('src/data/links.json');
    const socialMedia = await readJson<SocialMedia>(
      'src/data/socialMedias.json'
    );
    const phones = await readJson<Phone>('src/data/phones.json');
    const images = await readJson<Image>('src/data/images.json');
    return {
      links,
      socialMedia,
      phones,
      images,
    };
  } catch (error) {
    throw new Error(
      'Error al obtener datos del footer. Verificá que los archivos JSON existan.'
    );
  }
};

export const getFooterLegales = async () => {
  try {
    const links = await readJson<Link>('src/data/links.json');
    const images = await readJson<Image>('src/data/images.json');
    return {
      links,
      images,
    };
  } catch (error) {
    throw new Error(
      'Error al obtener datos del footer. Verificá que los archivos JSON existan.'
    );
  }
};
