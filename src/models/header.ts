import readJson from '@utils/readJSON';
import { Image } from '@utils/types';

export const getHeaderComplete = async () => {
  try {
    const images = await readJson<Image[]>('src/data/images.json');
    return {
      images,
    };
  } catch (error) {
    throw new Error(
      'Error al obtener datos del header. Verificá que los archivos JSON existan.'
    );
  }
};
