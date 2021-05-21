import koa from "koa";
import koaRouter from "koa-router";
import dotenv from "dotenv";
import morgan from "koa-morgan";
import path from "path";
import render from "koa-ejs";
import json from "koa-json";
import serve from "koa-static";
import { connectDB } from "./database/connection";
import { Routes_controller } from "./controllers/controller";

dotenv.config({ path: "config.env" });

const app = new koa();
const router = new koaRouter();
const controller = new Routes_controller();

app.use(morgan("tiny"))
	.use(router.routes())
	.use(router.allowedMethods())
	.use(json)
	.use(serve(path.join(__dirname, "..", "public")));

// template engine
render(app, {
	root: path.join(__dirname, "..", "views"),
	layout: path.join("layouts", "main"),
	viewExt: "ejs",
});

connectDB();

// route for the index page
router.get("/", controller.home);
router.get("/add", async (ctx) => {
	await ctx.render("add");
});

app.listen(process.env.PORT);
