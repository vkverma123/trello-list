module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          title: "Task-1",
          status: "In Progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Task-2",
          status: "In Progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Task-3",
          status: "In Progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Task-4",
          status: "Completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Task-5",
          status: "Completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Task-6",
          status: "Completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Task-7",
          status: "Completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Task-8",
          status: "Completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
