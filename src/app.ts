import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';

// TODO importar rutas

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', (req, res) => {
  res.send('API Obelisco');
});

app.use('/', (req, res) => {
  res.send('Obelisco Ruta base');
});

// TODO app.use('/api', routes)
// Middleware para capturar rutas no definidas
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ status: 'error', message: 'Obelisco Ruta no encontrada' });
});

// middleware capturar error:
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  res.status(404).json({ status: 'error', message: 'No se encontró la ruta' });
});

export default app;
