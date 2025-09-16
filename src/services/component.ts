import Component from '@models/component';

export const fetchComponent = async (name: string) => {
  try {
    const component = await Component.findOne({ where: { name } });
    return component;
  } catch (error) {
    throw new Error('Error al obtener el componente.');
  }
};

