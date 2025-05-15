import 'dotenv/config';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
  dialect: 'postgres',
  logging: false,
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false, // Opción que permite ignorar ciertos errores de verificación SSL (por ejemplo, si el certificado no está validado)
  //   },
  // },
});

export default sequelize;
