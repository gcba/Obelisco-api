// import { getFooterComplete, getFooterLegales } from '@services/footer';
import { getFooterComplete, getFooterLegales } from '@services/footerdb';
import sendResponse from '@utils/sendResponse';
import { Request, Response } from 'express';

export const getComplete = async (req: Request, res: Response) => {
  try {
    const response = await getFooterComplete();
    sendResponse(res, 200, response);
  } catch (error) {
    sendResponse(res, 500, {
      status: 'error',
      message: 'API Obelisco: Error al obtener footer.',
    });
  }
};

export const getLegales = async (req: Request, res: Response) => {
  try {
    const response = await getFooterLegales();
    sendResponse(res, 200, response);
  } catch (error) {
    sendResponse(res, 500, {
      status: 'error',
      message: 'API Obelisco: Error al obtener footer.',
    });
  }
};
