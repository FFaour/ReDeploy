module.exports = function(sequelize, DataTypes) {
  var Supplies = sequelize.define("Supplies", {
    // eslint-disable-next-line camelcase
    item_description: {
      type: DataTypes.STRING,
      notNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      notNull: true,
      validate: { min: 1, max: 999999999 }
    },
    unit: {
      type: DataTypes.STRING,
      notNull: true
    },
    charity: {
      type: DataTypes.STRING,
      notNull: true
    },
    status: {
      type: DataTypes.STRING,
      isNull: true,
      defaultvalue: "Awaiting approval"
    }
  });
  return Supplies;
};
