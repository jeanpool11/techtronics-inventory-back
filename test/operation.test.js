const chai = require('chai');
const chaiHttp = require('chai-http');
const startTestApp = require('../server/appForTest');
const MongoDataSource = require('../config/mongo');

const expect = chai.expect;
chai.use(chaiHttp);

let app;

before(async () => {
  app = await startTestApp(); // Inicializa la app de pruebas
});

after(async () => {
  await MongoDataSource.disconnect(); // Cierra conexión a MongoDB
});

describe('Pruebas de Operaciones', function () {
  this.timeout(7000); // Tiempo extendido por si demora

  const productId = '683e5be18b1894e4a5d53e69'; // ⚠️ Asegúrate de que exista este producto en la base de datos

  it('Debe registrar un pedido', (done) => {
    chai.request(app)
      .post('/api/operation/create')
      .send({
        type: 'pedido',
        product: productId,
        quantity: 15,
        description: 'Reposición por ventas'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);

        done();
      });
  });

  it('Debe registrar una devolución', (done) => {
    chai.request(app)
      .post('/api/operation/create')
      .send({
        type: 'devolucion',
        product: productId,
        quantity: 5,
        description: 'Productos defectuosos'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});
