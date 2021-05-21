import { IRouterContext } from "koa-router";
import { User } from "../database/model/model";


export class Routes_controller {
    async home(ctx: IRouterContext) {
        await ctx.render('index', {
            title: 'test',
            thing: 
        })
    }
}