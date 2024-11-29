import { Posts } from './types'

export const posts: Posts = {
  '/': {
    title: '欢迎来到我的博客！',
    content: '这是我的第一个博客文章，欢迎大家的到来！',
    date: '2024-03-21',
    tags: ['介绍', '欢迎']
  },
  '/about': {
    title: '关于我',
    content: '我是一名 Web 开发者，专注于前端技术和 Cloudflare Workers。'
  },
  '/contact': {
    title: '联系我们',
    content: '你可以通过邮件联系我：example@example.com'
  }
}