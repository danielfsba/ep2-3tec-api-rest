import { Router } from 'express';
import FuncaoController from '../controllers/FuncaoController';
import loginRequired from '../middlewares/loginRequired';

const FuncaoRoutes = new Router();

FuncaoRoutes.get('/', loginRequired, FuncaoController.index); // lista todos
FuncaoRoutes.get('/:id', loginRequired, FuncaoController.show); // lista apenas um
FuncaoRoutes.post('/', loginRequired, FuncaoController.create); // insere
FuncaoRoutes.put('/:id', loginRequired, FuncaoController.update); // atualiza
FuncaoRoutes.delete('/:id', loginRequired, FuncaoController.delete); // apaga

export default FuncaoRoutes;
