import sendResponse from '@utils/sendResponse';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import router from './routes';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
// Middleware para servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', router);

// Middleware para capturar rutas no definidas
app.use((req: Request, res: Response, next: NextFunction) => {
  sendResponse(res, 404, {
    status: 'error',
    message: 'API Obelisco: Ruta no encontrada',
  });
});

// middleware capturar error:
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('[ERROR]: ', err);
  sendResponse(res, 500, {
    status: 'error',
    message: 'API Obelisco: Error interno del servidor',
  });
});

export default app;
