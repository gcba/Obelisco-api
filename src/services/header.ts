import Image from '@models/image';

export const getHeaderComplete = async () => {
  try {
    const images = await Image.findAll();
    return {
      images,
    };
  } catch (error) {
    throw new Error('Error al obtener datos del header.');
  }
};
