import Image from '@models/image';
import Link from '@models/link';
import Phone from '@models/Phone';
import SocialMedia from '@models/SocialMedia';

export const getFooterComplete = async () => {
  try {
    const links = await Link.findAll();
    const socialMedia = await SocialMedia.findAll();
    const phones = await Phone.findAll();
    const images = await Image.findAll();
    return {
      links,
      socialMedia,
      phones,
      images,
    };
  } catch (error) {
    throw new Error('Error al obtener datos del footer.');
  }
};

export const getFooterLegales = async () => {
  try {
    const links = await Link.findAll();
    const images = await Image.findAll();

    return {
      links,
      images,
    };
  } catch (error) {
    throw new Error('Error al obtener datos del footer.');
  }
};
