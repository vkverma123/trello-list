require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "trello-db",
  host: process.env.DB_HOST,
  dialect: "postgres",
  dialectOptions: {
    connectTimeout: 60000,
  },
  seederStorage: "sequelize",
  seederStorageTableName: "sequelizeseeds",
  logging: false,
};
