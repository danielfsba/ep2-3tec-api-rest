import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';
import loginRequired from '../middlewares/loginRequired';

const usuarioRoutes = new Router();

usuarioRoutes.get('/', loginRequired, usuarioController.index); // lista todos
usuarioRoutes.get('/:id', loginRequired, usuarioController.show); // lista apenas um
usuarioRoutes.post('/', loginRequired, usuarioController.create); // insere
usuarioRoutes.put('/:id', loginRequired, usuarioController.update); // atualiza
usuarioRoutes.delete('/:id', loginRequired, usuarioController.delete); // apaga

export default usuarioRoutes;
