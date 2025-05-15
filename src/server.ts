import './config/configAlias';
// import 'module-alias/register'; Esta linea es necesario si los alias estan configurados en el package.json
import app from './app';
import dotenv from 'dotenv';
import sequelize from '@config/database';
import { initializeModels } from './models';
dotenv.config();
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await initializeModels();
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
