import { Router } from 'express';
import RiscoController from '../controllers/RiscoController';
import loginRequired from '../middlewares/loginRequired';

const RiscoRoutes = new Router();

RiscoRoutes.get('/', loginRequired, RiscoController.index); // lista todos
RiscoRoutes.get('/:id', loginRequired, RiscoController.show); // lista apenas um
RiscoRoutes.post('/', loginRequired, RiscoController.create); // insere
RiscoRoutes.put('/:id', loginRequired, RiscoController.update); // atualiza
RiscoRoutes.delete('/:id', loginRequired, RiscoController.delete); // apaga

export default RiscoRoutes;
