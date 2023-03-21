import { defineUserConfig } from "vuepress"
import type { DefaultThemeOptions } from "vuepress"
import { navbar, sidebar } from "./configs"
export default defineUserConfig<DefaultThemeOptions>({
  base: "/",
  // 站点配置
  lang: "zh-CN",
  title: "开发知识库",
  description: "每天进步一点点！",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    search: true,
    // 新增代码
    // nav: [
    // 配置顶部导航栏
    // {
    //   text: '首页',
    //   link: '/'
    // },
    // {
    //   text: '规范',
    //   link: './guide/',
    // },
    // {
    //   text: '组件',
    //   link: '/comps/',
    // },
    // ],
    //sidebar: { // 配置侧边栏部分
    // '/comps/': ['/comps/', '/comps/select.md']
    //},
    locales: {
      "/": {
        // navbar
        navbar: navbar.zh,

        // sidebar
        // sidebar:sidebar.zh
        sidebar: {
          "/guide/": [
            {
              text: "HTML 规范",
              //collapsible: true,
              children: ["/guide/html/code.md", "/guide/html/note.md", "/guide/html/template.md", "/guide/html/webapp.md"],
            },
            {
              text: "图片规范",
              //collapsible: true,
              children: ["/guide/image/format.md", "/guide/image/size.md", "/guide/image/quality.md", "/guide/image/import.md"],
            },
            {
              text: "CSS 规范",
              //collapsible: true,
              children: [
                "/guide/css/code.md",
                "/guide/css/note.md",
                "/guide/css/sass.md",
                "/guide/css/reset.md",
                "/guide/css/query.md",
                "/guide/css/webkit.md",
              ],
            },
            {
              text: "命名规范",
              //collapsible: true,
              children: ["/guide/name/dir.md", "/guide/name/image.md", "/guide/name/htmlcss.md", "/guide/name/classname.md"],
            },
            {
              text: "JS 规范",
              //collapsible: true,
              children: [
                "/guide/js/language.md",
                "/guide/js/code.md",
                //   '/guide/js/react.md'
              ],
            },
          ],
          "/components/": [
            {
              text: "环境安装",
              link: "/components/Install.md",
              // collapsible: true,
              // children: ["/components/Install.md"],
            },
          ],
        },

        // page meta
        // editLinkText: 'Edit this page on GitHub',
      },
    },
  },
})
