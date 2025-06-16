const chai = require('chai');
const chaiHttp = require('chai-http');
const startTestApp = require('../server/appForTest');
const MongoDataSource = require('../config/mongo');

const expect = chai.expect;
chai.use(chaiHttp);

let app;

before(async () => {
  app = await startTestApp(); // inicia la app de pruebas
});

after(async () => {
  await MongoDataSource.disconnect(); // desconecta la base de datos
});

describe('Pruebas de Proveedores', function () {
  this.timeout(7000); // opcional, por si las peticiones demoran

  it('Debe crear un nuevo proveedor', (done) => {
    chai.request(app)
      .post('/api/supplier/create')
      .send({
        name: 'Proveedor Test4000',
        phone: '904632104',
        email: 'proveedortest4000@example.com',
        address: 'Av. Siempre Viva 123',
        ruc: '12345678921'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});
