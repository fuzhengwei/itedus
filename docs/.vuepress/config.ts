import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "星球：码农会锁",
  description: "vuepress-theme-hope 的演示",
  base: "/",
  dest: "./dist",
  theme: hopeTheme({
        author: {
            name: "小傅哥",
            url: "https://itedus.cn",
        },
        logo: "/logo.svg",
        repo: "https://github.com/fuzhengwei/itedus",
        iconPrefix: "iconfont icon-",
        // navbar
        navbar: navbar,
        // sidebar
        sidebar: sidebar,

        plugins: {
        blog: {
          autoExcerpt: true,
        },
        // Giscus：https://giscus.app/zh-CN
        comment: {
          provider: "Giscus",
          repo: "fuzhengwei/CodeGuide",
          repoId: "MDEwOlJlcG9zaXRvcnkyNTU1NTgzNDU=",
          category: "General",
          categoryId: "MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMDQwNjUw",
        },

        mdEnhance: {
          enableAll: true,
          presentation: {
            plugins: ["highlight", "math", "search", "notes", "zoom"],
          },
        },
      },

  })
});
