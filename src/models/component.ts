import sequelize from '@config/database';
import { Component as ComponentType, UUID } from '@utils/types';
import { DataTypes, Model, Optional } from 'sequelize';

// Phone model

export class Component extends Model<Optional<ComponentType, 'id'>> implements ComponentType {
  public id!: UUID;
  public name!: string;
  public code!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Component.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize, modelName: 'Component', tableName: 'components', paranoid: true }
);

export default Component;
