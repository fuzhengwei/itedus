import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  {
    text: "星球项目【编写中】",
    icon: "note",
    prefix: "/md/project/",
    children: ["algorithm", "gateway"]
  },
  {
    text: "星球项目【已完结】",
    icon: "note",
    prefix: "/md/project/",
    collapsable: true,
    children: ["lottery", "im", "mybatis", "spring"]
  },
  {
    text: "星球书籍",
    icon: "note",
    prefix: "/md/pdf/",
    collapsable: true,
    children: ["pdf"]
  }
  /*{
    text: "文章",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        children: ["article1", "article2", "article3", "article4"],
      },
      {
        text: "文章 5-12",
        icon: "note",
        children: [
          {
            text: "文章 5-8",
            icon: "note",
            collapsable: true,
            prefix: "article/",
            children: ["article5", "article6", "article7", "article8"],
          },
          {
            text: "文章 9-12",
            icon: "note",
            children: ["article9", "article10", "article11", "article12"],
          },
        ],
      },
    ],
  },*/
]);
