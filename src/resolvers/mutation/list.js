const { List } = require("../../models");
const ListMutations = {
  createList: async (_, { title }) => await List.create({ title }),
};

module.exports = ListMutations;
