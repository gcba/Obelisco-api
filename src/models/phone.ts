import sequelize from '@config/database';
import { Phone as PhoneType, UUID } from '@utils/types';
import { DataTypes, Model, Optional } from 'sequelize';

// Phone model

export class Phone
  extends Model<Optional<PhoneType, 'id'>>
  implements PhoneType
{
  public id!: UUID;
  public name!: string;
  public number!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Phone.init(
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
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize, modelName: 'Phone', tableName: 'phones', paranoid: true }
);

export default Phone;
