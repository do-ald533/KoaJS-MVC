import koa from "koa";
import koaRouter from "koa-router";
import dotenv from "dotenv";
import morgan from "koa-morgan";
import path from "path";
import render from 'koa-ejs'

dotenv.config({ path: "config.env" });

const app = new koa();
const router = new koaRouter();

// mock data
const things = ['beer', 'whiskey', 'cigars', 'video games', 'my family', 'music']

app.use(morgan("tiny"));

// template engine
render(app, {
    root: path.join(__dirname, '..', 'views'),
    layout: path.join('layouts', 'main'),
    viewExt: 'ejs'
})

// router middleware
app.use(router.routes()).use(router.allowedMethods());

// route for the index page
router.get("/", async (ctx) => {
    await ctx.render('index', {
        title: 'things i love',
        things: things
    })
})
router.get("/add", async (ctx) => {
    await ctx.render('add')
});

app.listen(process.env.PORT);
