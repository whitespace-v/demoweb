const { INTEGER, DATE, STRING } = require("sequelize");
const sequelize = require("./database");

// Партнеры
const Partners = sequelize.define("partners", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  contact: { type: STRING },
  phone: { type: STRING },
  email: { type: STRING },
  reg_date: { type: DATE },
  category: { type: STRING, allowNull: true },
  rating: { type: INTEGER, allowNull: true },
});

// Физические точки доставки
const Points = sequelize.define("points", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  partner_id: { type: INTEGER },
  address: { type: STRING },
  phone: { type: STRING },
  schedule: { type: STRING },
});

// связь
Partners.hasMany(Points);
Points.belongsTo(Partners);

module.exports = {
  Partners,
  Points,
};
