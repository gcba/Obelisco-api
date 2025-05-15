import sequelize from '@config/database';
import { SocialMedia as SocialMediaType, UUID } from '@utils/types';
import { DataTypes, Model, Optional } from 'sequelize';

// Phone model

export class SocialMedia
  extends Model<Optional<SocialMediaType, 'id'>>
  implements SocialMediaType
{
  public id!: UUID;
  public name!: string;
  public url!: string;
  public icon!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

SocialMedia.init(
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
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize,
    modelName: 'SocialMedia',
    tableName: 'socialsmedias',
    paranoid: true,
  }
);

export default SocialMedia;
