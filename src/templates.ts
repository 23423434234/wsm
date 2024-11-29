import { Post } from './types'
import { mainStyles } from './styles'

export function renderBlogPage(post: Post): string {
  return `
    <!DOCTYPE html>
    <html lang="zh-Hans">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${post.title}</title>
        <style>${mainStyles}</style>
      </head>
      <body>
        <header class="site-header">
          <nav class="nav-container">
            <a href="/" class="nav-logo">Blog</a>
            <div class="nav-links">
              <a href="/about">关于</a>
              <a href="/contact">联系</a>
            </div>
          </nav>
        </header>

        <main class="main-content">
          <article class="post">
            <h1 class="post-title">${post.title}</h1>
            ${post.date ? `<time class="post-date">${post.date}</time>` : ''}
            <div class="post-content">${post.content}</div>
            ${post.tags ? `
              <div class="post-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
            ` : ''}
          </article>
        </main>

        <footer class="site-footer">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  `
}

export function renderNotFound(): string {
  return `
    <!DOCTYPE html>
    <html lang="zh-Hans">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 - 页面未找到</title>
        <style>${mainStyles}</style>
      </head>
      <body>
        <header class="site-header">
          <nav class="nav-container">
            <a href="/" class="nav-logo">Blog</a>
            <div class="nav-links">
              <a href="/about">关于</a>
              <a href="/contact">联系</a>
            </div>
          </nav>
        </header>

        <main class="main-content">
          <div class="error-page">
            <h1>404</h1>
            <p>抱歉，页面未找到</p>
            <a href="/" class="back-home">返回首页</a>
          </div>
        </main>

        <footer class="site-footer">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  `
}