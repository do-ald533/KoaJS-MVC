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
        const body = ctx.request.body
        const user = await User.create({
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            age: body.age
        })
        await ctx.redirect('/')
    }
}