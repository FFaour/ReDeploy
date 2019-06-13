// model name is Account
// next define all the properties in Account
module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("account", {
    organization: {
      type: DataTypes.STRING,
      isNull: true
    },

    userName: {
      type: DataTypes.STRING,
      notNull: true
    },
    password: {
      type: DataTypes.STRING,
      notNull: true
    },
    address: {
      type: DataTypes.STRING,
      notNull: true
    },
    state: {
      type: DataTypes.STRING,
      notNull: true
    },
    city: {
      type: DataTypes.STRING,
      notNull: true
    },
    zipcode: {
      type: DataTypes.STRING,
      notNull: true
    },
    contactName: {
      type: DataTypes.STRING,
      notNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      notNull: true
    },
    faxNumber: {
      type: DataTypes.STRING,
      notNull: true
    },
    email: {
      type: DataTypes.STRING,
      notNull: true
    }
  });

  return Account;
};
