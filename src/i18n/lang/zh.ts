import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    tags: "标签",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享本文：",
    sharePostOn: "分享到 {{platform}}",
    sharePostViaEmail: "通过邮件发送",
    tagLabel: "标签",
    backToTop: "返回顶部",
    goBack: "返回上一页",
    editPage: "编辑页面",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "页码",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选文章",
    recentPosts: "最新文章",
    allPosts: "查看全部文章",
  },
  footer: {
    copyright: "版权所有",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "标签对应的所有文章",

    tagsTitle: "标签",
    tagsDesc: "文章中使用的所有标签。",

    postsTitle: "文章",
    postsDesc: "已发布的所有文章。",

    archivesTitle: "归档",
    archivesDesc: "所有归档文章。",

    searchTitle: "搜索",
    searchDesc: "搜索任意文章...",
  },
  a11y: {
    skipToContent: "跳转到主内容",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换主题",
    searchPlaceholder: "搜索文章...",
    noResults: "未找到相关结果",
    goToPreviousPage: "返回上一页",
    goToNextPage: "进入下一页",
  },
  notFound: {
    title: "404 页面未找到",
    message: "您访问的页面不存在",
    goHome: "返回首页",
  },
} satisfies UIStrings;
