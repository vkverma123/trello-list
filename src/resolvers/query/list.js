const { List, Task, ListTaskMembership } = require("../../models");

const ListQueries = {
  lists: async () =>
    await List.findAll({
      include: Task,
      required: true,
      order: [[Task, ListTaskMembership, "order", "ASC"]],
    }),
};

module.exports = ListQueries;
