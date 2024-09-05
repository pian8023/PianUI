import { type Context } from 'koa'

export const graphController = async (ctx: Context) => {
  const { filepath, depth, savepath, choice } = ctx.config

  ctx.body = {
    code: 200,
  }
}
