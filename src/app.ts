import sendResponse from '@utils/sendResponse';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';

// TODO importar rutas

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', (req, res) => {
  sendResponse(res, 200, { message: 'API Obelisco' });
});

// TODO app.use('/api', routes)
// Middleware para capturar rutas no definidas
app.use((req: Request, res: Response, next: NextFunction) => {
  sendResponse(res, 404, {
    status: 'error',
    message: 'API Obelisco: Ruta no encontrada',
  });
});

// middleware capturar error:
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  sendResponse(res, 500, {
    status: 'error',
    message: 'API Obelisco: Error interno del servidor',
  });
});

export default app;
