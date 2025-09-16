import { generateToken } from '@utils/index';

const USERS = [
  {
    id: 1,
    url: 'http://localhost:8080',
  },
  {
    id: 2,
    url: 'http://localhost:8080',
  },
  {
    id: 3,
    url: 'https://mi-frontend.com',
  },
];

export const login = ({ credential }: { credential: string }) => {
  const exist = USERS.find((u) => u.url === credential);

  if (!exist) {
    throw new Error('Ocurrio un error con su credencial');
  }

  const token = generateToken({ payload: exist });

  return token;
};
