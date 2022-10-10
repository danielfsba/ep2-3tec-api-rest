/* eslint-disable import/first */
import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './src/routes/homeRoutes';
import secaoRoutes from './src/routes/secaoRoutes';
import usuarioRoutes from './src/routes/usuarioRoutes';
import tokenRoutes from './src/routes/tokenRoutes';

class App {
  constructor () {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware () {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extend: true }));
    this.app.use(express.json());
  }

  routes () {
    this.app.use('/', homeRoutes);
    this.app.use('/secao/', secaoRoutes);
    this.app.use('/usuario/', usuarioRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
