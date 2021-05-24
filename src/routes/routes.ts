import Router from 'koa-router'
import { Routes_controller } from '../controllers/controller'

const router = new Router()
const controller = new Routes_controller

export default router.get('/', controller.home)