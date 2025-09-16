import { Request, Response } from 'express';
import { login as loginS } from '@services/auth';
import sendResponse from '@utils/sendResponse';

const login = (req: Request, res: Response) => {
  // const referer = req.get('referer'); // o "referrer"
  const origin = req.get('origin');
  if (!origin) {
    sendResponse(res, 400, {
      status: 'error',
      message: 'API Obelisco: No se espesifico un origen',
    });
    return;
  }
  try {
    const response = loginS({ credential: origin });
    sendResponse(res, 200, {
      token: response,
    });
  } catch (error) {
    console.log('[ERROR]: ', error);
    sendResponse(res, 500, {
      status: 'error',
      message: 'API Obelisco: Error al intentar validar credencial',
    });
  }
};

export { login };
