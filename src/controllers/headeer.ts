// import { getHeaderComplete } from '@services/header';
import { getHeaderComplete, getHTML as getHTMLS } from '@services/headerdb';
import sendResponse from '@utils/sendResponse';
import { Request, Response } from 'express';

export const getComplete = async (req: Request, res: Response) => {
  try {
    const response = await getHeaderComplete();
    const imagesHeader = response.images.filter((i) =>
      i.url.includes('header')
    );
    sendResponse(res, 200, { images: imagesHeader });
  } catch (error) {
    sendResponse(res, 500, {
      status: 'error',
      message: 'API Obelisco: Error al obtener header.',
    });
  }
};
export const getHTML = async (req: Request, res: Response) => {
  try {
    const response = await getHTMLS();
    sendResponse(res, 200, { data: response });
  } catch (error) {
    sendResponse(res, 500, {
      status: 'error',
      message: 'API Obelisco: Error al obtener header.',
    });
  }
};
