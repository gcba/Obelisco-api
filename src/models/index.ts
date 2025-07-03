// /src/models/index.ts
import sequelize from '@config/database';

const initializeModels = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
};

export { initializeModels, sequelize };
