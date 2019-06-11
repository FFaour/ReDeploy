module.exports = function(sequelize, DataTypes) {
  var Supplies = sequelize.define("Supplies", {
    // eslint-disable-next-line camelcase
    item: {
      type: DataTypes.STRING,
      notNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      notNull: true,
      validate: {
        len: [1, 14]
      }
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
      defaultValue: "Processing"
    }
  });
  return Supplies;
};
