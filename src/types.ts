export interface Post {
    title: string
    content: string
    date?: string
    tags?: string[]
  }
  
  export interface Posts {
    [key: string]: Post
  }
  
  export interface Env {
    // 环境变量类型定义
  }