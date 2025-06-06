const envs            = require('./config/envs');
const MongoDataSource = require('./config/mongo');
const Server          = require('./server/server');

// archivo principal
(async () => {
  try {
    if (envs.DB_ENGINE === 'nosql') {
      await MongoDataSource.getInstance();
    }

    Server.getInstance().start();
  } catch (err) {
    console.error('❌  Error al iniciar la aplicación:', err);
    process.exit(1);
  }
})();