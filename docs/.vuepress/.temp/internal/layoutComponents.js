import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/fuzhengwei/1024/github/itedus/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("/Users/fuzhengwei/1024/github/itedus/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Blog": defineAsyncComponent(() => import("/Users/fuzhengwei/1024/github/itedus/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
