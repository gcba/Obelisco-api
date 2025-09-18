import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { JWT_PAYLOAD } from '@utils/types';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return next(new Error('No token'));
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || ''
    ) as JWT_PAYLOAD;
    req.user = decoded;
    next();
  } catch (error) {
    return next(new Error('Invalid token'));
  }
};

export { verifyToken };
