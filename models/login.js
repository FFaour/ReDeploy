module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Login", {
    
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
