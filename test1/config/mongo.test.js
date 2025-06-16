const chai = require('chai');
const expect = chai.expect;
const MongoDataSource = require('../../config/mongo');

describe('🧪 Prueba de configuración - Conexión a MongoDB', function () {
  this.timeout(10000); // por si la conexión demora

  it('Debería conectarse exitosamente a MongoDB', async () => {
    const mongoose = await MongoDataSource.getInstance();
    expect(mongoose.connection.readyState).to.equal(1); // 1 = conectado
    await MongoDataSource.disconnect(); // desconectar al final
  });
});
