import  Sequelize  from 'sequelize';
import databaseConfig from '../config/database';

import Secao from '../models/secaoModel';
import Usuarios from '../models/usuarioModel';

const models = [Secao, Usuarios];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
