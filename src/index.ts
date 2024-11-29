import { Env } from './types'
import { posts } from './data'
import { renderBlogPage, renderNotFound } from './templates'

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)
    const path = url.pathname
    
    const post = posts[path as keyof typeof posts]

    if (post) {
      return new Response(renderBlogPage(post), {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      })
    } else {
      return new Response(renderNotFound(), {
        status: 404,
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      })
    }
  }
}