import { IRouterContext } from "koa-router";
import { User } from "../database/model/model";


export class Routes_controller {
    async home(ctx: IRouterContext) {
        const users = await User.findAll()
        await ctx.render('index', {
            title: 'test',
            users: users
        })
    }

    async add_page(ctx: IRouterContext) {
        await ctx.render('add')
    }

    async add_contact(ctx: IRouterContext) {
        console.log(ctx.request.body)
    }
}