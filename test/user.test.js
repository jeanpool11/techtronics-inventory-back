const chai = require('chai');
const chaiHttp = require('chai-http');
const startTestApp = require('../server/appForTest');
const MongoDataSource = require('../config/mongo');

const expect = chai.expect;
chai.use(chaiHttp);

let app;

before(async () => {
  app = await startTestApp();
});

after(async () => {
  await MongoDataSource.disconnect();
});

describe('Pruebas de Usuarios', function () {
  this.timeout(7000); // Aumentamos timeout

  it('Debe crear un nuevo usuario', (done) => {
    chai.request(app)
      .post('/api/user/create')
      .send({
        name: 'Persona Test 4000',
        phone: '90463200',
        email: 'personatest4000@example.com',
        password: '876541231',
        role: 'seller'
      })
      .end((err, res) => {
        expect(res).to.have.status(201); // ✅ solo valida que fue creado
        done();
      });
  });
});