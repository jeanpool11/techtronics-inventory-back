// server/appForTest.js
const express = require('express');
const app = express();

const MongoDataSource = require('../config/mongo'); // usa tu clase
const routes = require('../routes');

async function startTestApp() {
  try {
    // Conexión a la base de datos de prueba
    process.env.DB_URI = process.env.TEST_DB_URI || 'mongodb://localhost:27017/test_db';
    await MongoDataSource.getInstance();

    app.use(express.json());
    app.use('/api', routes);

    return app;
  } catch (err) {
    console.error('❌ Error al iniciar app de pruebas:', err);
    process.exit(1);
  }
}

module.exports = startTestApp;