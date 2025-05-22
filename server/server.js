const express    = require('express');
const cors       = require('cors');
const cookieParser = require('cookie-parser');
const envs         = require('../config/envs');

class Server {

  constructor() {
    this.port = envs.PORT;
    this.app  = express();
    

    /* ---------- Middlewares genéricos ---------- */
    this.app.use(cookieParser());
    this.app.use(cors({
      origin: envs.FRONTEND_ORIGIN,
      credentials: true,
    }));
    this.app.use(express.json());
    
  }

  /** Patrón Singleton */
  static getInstance() {
    if (!Server._instance) Server._instance = new Server();
    return Server._instance;
  }

  /** Arranca el listener */
  start() {
    this.app.listen(this.port, () =>
      console.log(`🚀  Server ready: http://localhost:${this.port}`),
    );
  }
}

module.exports = Server;
