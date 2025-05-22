const engine = process.env.DB_ENGINE || null;

const pathModel = engine === "mysql" ? "./sql" : "./nosql"

const models = {
  UserModel: require(`${pathModel}/userModel`),
};


module.exports = models;