module.exports = function(sequelize, DataTypes) {
  var Donation = sequelize.define("Donation", {
    // eslint-disable-next-line camelcase
    item_description: {
      type: DataTypes.STRING,
      notNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      notNull: true
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
      isNull: true
    }
  });
  return Donation;
};
