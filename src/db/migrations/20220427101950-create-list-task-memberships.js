module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ListTaskMemberships", {
      ListId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Lists",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      TaskId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Tasks",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ListTaskMemberships");
  },
};
