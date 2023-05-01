const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ListTaskMembership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ListTaskMembership.belongsTo(models.List);
      ListTaskMembership.belongsTo(models.Task);
    }
  }
  ListTaskMembership.init(
    {
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ListTaskMembership",
    }
  );
  return ListTaskMembership;
};
