const fs = require("fs");
const path = require("path");
const ListMutations = require("./resolvers/mutation/list");
const TaskMutations = require("./resolvers/mutation/task");
const ListQueries = require("./resolvers/query/list");

const typeDefs = fs
  .readFileSync(path.join(__dirname, "schema.graphql"))
  .toString();

const resolvers = {
  Query: { ...ListQueries },
  Mutation: { ...ListMutations, ...TaskMutations },
};

module.exports = { typeDefs, resolvers };
