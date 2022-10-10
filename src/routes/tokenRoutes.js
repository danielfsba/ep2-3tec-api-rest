import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const tokenRoutes = new Router();

tokenRoutes.post('/', tokenController.create);

export default tokenRoutes;
