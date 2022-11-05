const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require("./Product");
const Tag = require("./Tag");
class ProductTag extends Model {}

ProductTag.init(
  {
    // productTag_id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
    // productTag_id column
    product_id: {
      type: DataTypes.INTEGER,
      // This references the `product` model, which we set in `Product.js` as its `modelName` property
      references: {
        model: Product,
        key: "id",
      },
    },
    // productTag_id column
    tag_id: {
      type: DataTypes.INTEGER,
      // This references the `tag` model, which we set in `Tag.js` as its `modelName` property
      references: {
        //model is variable 
        model: Tag,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
