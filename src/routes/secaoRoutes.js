import { Router } from 'express';
import secaoController from '../controllers/SecaoController';
import loginRequired from '../middlewares/loginRequired';

const secaoRoutes = new Router();

secaoRoutes.get('/', loginRequired, secaoController.index); // lista todos
secaoRoutes.get('/:id', loginRequired, secaoController.show); // lista apenas um
secaoRoutes.post('/', loginRequired, secaoController.create); // insere
secaoRoutes.put('/:id', loginRequired, secaoController.update); // atualiza
secaoRoutes.delete('/:id', loginRequired, secaoController.delete); // apaga

export default secaoRoutes;
