// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "Category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "Category_id",
});
// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Tag, {
  through: "ProductTag"
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: "ProductTag"
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
