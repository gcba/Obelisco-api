import sequelize from '@config/database';
import { Image as ImageType, UUID } from '@utils/types';
import { DataTypes, Model, Optional } from 'sequelize';

export class Image
  extends Model<Optional<ImageType, 'id'>>
  implements ImageType
{
  public id!: UUID;
  public name!: string;
  public url!: string;
  public alt!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Image.init(
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
    alt: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize,
    modelName: 'Image',
    tableName: 'images',
    paranoid: true,
  }
);

export default Image;
