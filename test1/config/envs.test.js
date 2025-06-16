const chai = require('chai');
const expect = chai.expect;
const envs = require('../../config/envs');

describe('🧪 Prueba de configuración - Variables de Entorno', () => {
  it('DB_URI debe estar definido', () => {
    expect(envs.DB_URI).to.be.a('string').that.is.not.empty;
  });

  it('JWT_SECRET debe estar definido', () => {
    expect(envs.JWT_SECRET).to.be.a('string').that.is.not.empty;
  });

  it('PORT debe estar definido y ser un número', () => {
    expect(envs.PORT).to.be.a('number');
  });

  it('FRONTEND_ORIGIN debe estar definido', () => {
    expect(envs.FRONTEND_ORIGIN).to.be.a('string').that.includes('http');
  });
});
