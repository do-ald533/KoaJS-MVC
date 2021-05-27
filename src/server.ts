import koa from "koa";
import dotenv from "dotenv";
import morgan from "koa-morgan";
import path from "path";
import render from "koa-ejs";
import json from "koa-json";
import serve from "koa-static";
import bodyParser from "koa-bodyparser";
import { connectDB } from "./database/connection";
import router from "./routes/routes";

dotenv.config({ path: "config.env" });

const app = new koa();

app.use(morgan("dev"))
	.use(serve(path.join(__dirname, "..", "public")))
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods())
	.use(json);

// template engine
render(app, {
	root: path.join(__dirname, "..", "views"),
	layout: path.join("layouts", "main"),
	viewExt: "ejs",
});

connectDB();

app.listen(process.env.PORT);
