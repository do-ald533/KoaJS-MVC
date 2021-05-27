import Router from "koa-router";
import { Routes_controller } from "../controllers/controller";

const router = new Router();
const controller = new Routes_controller();

export default router
	.get("/", controller.home)
	.get("/add", controller.add_page)
	.post("/addContact", controller.add_contact)
	.delete("/deleteContact", controller.delete_contact);
