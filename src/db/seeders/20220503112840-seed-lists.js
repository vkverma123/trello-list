module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Lists",
      [
        {
          title: "List-1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "List-2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "List-3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "List-4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Lists", null, {});
  },
};
