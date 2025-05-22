// import { getFooterComplete, getFooterLegales } from '@services/footer';
import { getFooterComplete, getFooterLegales } from '@services/footerdb';
import { footerCompleteDTO, footerLegalesDTO } from '@utils/dtos';
import sendResponse from '@utils/sendResponse';
import { Request, Response } from 'express';

/**
 * @openapi
 * /api/footer/complete:
 *   get:
 *     summary: Obtener footer completo
 *     tags:
 *       - Footer
 *     responses:
 *       200:
 *         description: Datos del footer obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FooterCompleto'
 *       500:
 *         description: Error del servidor al obtener el footer
 */
export const getComplete = async (req: Request, res: Response) => {
  try {
    const response = await getFooterComplete();
    const responseDTO = footerCompleteDTO(response);
    sendResponse(res, 200, responseDTO);
  } catch (error) {
    sendResponse(res, 500, {
      status: 'error',
      message: 'API Obelisco: Error al obtener footer.',
    });
  }
};

/**
 * @openapi
 * /api/footer/legales:
 *   get:
 *     summary: Obtener footer legales
 *     tags:
 *       - Footer
 *     responses:
 *       200:
 *         description: Datos del footer obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FooterLegales'
 *       500:
 *         description: Error del servidor al obtener el footer
 */

export const getLegales = async (req: Request, res: Response) => {
  try {
    const response = await getFooterLegales();
    const responseDTO = footerLegalesDTO(response);
    sendResponse(res, 200, responseDTO);
  } catch (error) {
    sendResponse(res, 500, {
      status: 'error',
      message: 'API Obelisco: Error al obtener footer.',
    });
  }
};
