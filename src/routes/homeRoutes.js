import { Router } from 'express'
import homeController from '../controllers/HomeController'

const homeRoutes = new Router()

homeRoutes.get('/', homeController.index)

export default homeRoutes
