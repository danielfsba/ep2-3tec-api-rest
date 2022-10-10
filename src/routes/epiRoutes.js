import { Router } from 'express';
import EpiController from '../controllers/EpiController';
import loginRequired from '../middlewares/loginRequired';

const epiRoutes = new Router();

epiRoutes.get('/', loginRequired, EpiController.index); // lista todos
epiRoutes.get('/:id', loginRequired, EpiController.show); // lista apenas um
epiRoutes.post('/', loginRequired, EpiController.create); // insere
epiRoutes.put('/:id', loginRequired, EpiController.update); // atualiza
epiRoutes.delete('/:id', loginRequired, EpiController.delete); // apaga

export default epiRoutes;
