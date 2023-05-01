const express = require("express");
const cookieParser = require("cookie-parser");
const { ApolloServer } = require("apollo-server-express");
const { resolvers, typeDefs } = require("./schema");

const apollo = new ApolloServer({ typeDefs, resolvers });
const app = express();

app.use(cookieParser());
app.use(express.json());

app.get("/health-check", (req, res) => {
  res.status(200).send("Ok");
});

apollo.start().then((res) => {
  apollo.applyMiddleware({ app });
  app.listen({ port: 7000 }, () =>
    console.log(`Gateway API running at port: ${7000}`)
  );
});
