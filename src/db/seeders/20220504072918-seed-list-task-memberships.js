module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ListTaskMemberships",
      [
        {
          ListId: 1,
          TaskId: 1,
          order: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ListId: 1,
          TaskId: 2,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ListId: 1,
          TaskId: 3,
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ListId: 2,
          TaskId: 4,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ListId: 3,
          TaskId: 5,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ListId: 3,
          TaskId: 6,
          order: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ListId: 3,
          TaskId: 7,
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ListId: 3,
          TaskId: 8,
          order: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ListTaskMemberships", null, {});
  },
};
