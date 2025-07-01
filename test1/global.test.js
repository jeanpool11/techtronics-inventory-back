const MongoDataSource = require('../config/mongo');
const Server = require('../server/server');
const routes = require('../routes');

let app;

before(async () => {
  await MongoDataSource.getInstance();
  const server = Server.getInstance({ routes });
  app = server.app;
  global.app = app;
});

after(async () => {
  await MongoDataSource.disconnect();
});
