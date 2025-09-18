// /src/utils/index.ts
// general functions shared by different modules
import jwt from 'jsonwebtoken';
import { JWT_PAYLOAD } from './types';
import 'dotenv/config';

const generateToken = ({ payload }: { payload: JWT_PAYLOAD }) => {
  const token = jwt.sign(
    { ...payload },
    (process.env.JWT_SECRET as string) || 'DEFAULT_KEY_WHEN_ENV_DOES_NOT_EXIST',
    {
      expiresIn: '24h',
    }
  );

  return token;
};

export { generateToken };
