import { fetchComponent } from '@services/component';
import { componentDTO } from '@utils/dtos';
import sendResponse from '@utils/sendResponse';
import { Request, Response, RequestHandler } from 'express';

/**
 * @openapi
 * /api/component/{name}:
 *   get:
 *     summary: Obtener un componente
 *     tags:
 *       - Component
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Nombre del componente a obtener (por ejemplo, "header" o "footer").
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del componente obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Component'
 *       500:
 *         description: Error del servidor al obtener el componente
 */
export const getComponent: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { name } = req.params as { name: string };
    const response = await fetchComponent(name);
    if (!response) {
      sendResponse(res, 404, {
        status: 'error',
        message: `Componente "${name}" no encontrado`,
      });
      return;
    }
    const responseDTO = componentDTO(response);
    sendResponse(res, 200, responseDTO);
  } catch (error) {
    sendResponse(res, 500, {
      status: 'error',
      message: 'API Obelisco: Error al obtener componente.',
    });
  }
};