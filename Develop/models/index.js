// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

Product.belongsToMany(Tag, { through: 'ProductTag' });
Tag.belongsToMany(Product, { through: 'ProductTag' });

module.exports = { Category, Product, Tag };

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
