import  Sequelize  from 'sequelize';
import databaseConfig from '../config/database';

import Secao from '../models/secaoModel';
import Funcoes from '../models/funcaoModel';
import Usuarios from '../models/usuarioModel';
import Riscos from '../models/riscoModel';
import Epis from '../models/epiModel';


const models = [Secao, Usuarios, Funcoes, Riscos, Epis];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
