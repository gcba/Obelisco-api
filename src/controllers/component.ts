import { fetchComponent } from '@services/component';
import { componentDTO } from '@utils/dtos';
import sendResponse from '@utils/sendResponse';
import { Request, Response, RequestHandler } from 'express';

/**
 * @openapi
 * /api/componentes/{name}:
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
 *       - in: query
 *         name: encoded
 *         required: false
 *         description: Si es true, devuelve el base64 sin decodificar.
 *         schema:
 *           type: boolean
 *       - in: query
 *         name: html
 *         required: false
 *         description: Si es true, devuelve el base64 decodificado como HTML (text/html).
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: Datos del componente obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Component'
 *           text/html:
 *             schema:
 *               type: string
 *       500:
 *         description: Error del servidor al obtener el componente
 */
export const getComponent: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { name } = req.params as { name: string };
    const { encoded, html } = req.query as { encoded?: string, html?: string };
    const response = await fetchComponent(name);
    if (!response) {
      sendResponse(res, 404, {
        status: 'error',
        message: `Componente "${name}" no encontrado`,
      });
      return;
    }
    const encodedBool = String(encoded).toLowerCase() === 'true';
		const htmlBool = String(html).toLocaleLowerCase() === 'true';
    const responseDTO = componentDTO(response, encodedBool, htmlBool);

    sendResponse(res, 200, responseDTO, !htmlBool);
  } catch (error) {
    sendResponse(res, 500, {
      status: 'error',
      message: 'API Obelisco: Error al obtener componente.',
    });
  }
};