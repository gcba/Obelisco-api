import sequelize from '@config/database';
import { Link as LinkType, UUID } from '@utils/types';
import { DataTypes, Model, Optional } from 'sequelize';

// Phone model

export class Link extends Model<Optional<LinkType, 'id'>> implements LinkType {
  public id!: UUID;
  public name!: string;
  public url!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Link.init(
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
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize, modelName: 'Link', tableName: 'links', paranoid: true }
);

export default Link;
