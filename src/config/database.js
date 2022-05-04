import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node", "root", "secret", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
});

export default sequelize;
