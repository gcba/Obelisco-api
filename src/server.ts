import './config/configAlias';
// import 'module-alias/register'; Esta linea es necesario si los alias estan configurados en el package.json
import app from './app';
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
