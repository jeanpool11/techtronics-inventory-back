const chai = require('chai');
const chaiHttp = require('chai-http');
const startTestApp = require('../server/appForTest');
const MongoDataSource = require('../config/mongo');

const expect = chai.expect;
chai.use(chaiHttp);

let app;

before(async () => {
  app = await startTestApp(); // Inicia la app de pruebas
});

after(async () => {
  await MongoDataSource.disconnect(); // Cierra conexión a MongoDB
});

describe('Pruebas de Productos', function () {
  this.timeout(7000); // Por si demora la petición

  const proveedorId = '6837c602eb242a0931122c06'; // ⚠️ Asegúrate de que este ID exista

  it('Debe registrar un nuevo producto', (done) => {
    chai.request(app)
      .post('/api/product/create')
      .send({
        code: 'PROD-7000',
        name: 'Mouse Gamerss',
        description: 'Ratón con luces RGBs',
        price: 109.99,
        stock: 7,
        minStock: 2,
        maxStock: 50,
        supplier: proveedorId
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});
