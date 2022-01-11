import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'
export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  // 站点配置
  lang: 'zh-CN',
  title: '海事信息事业部',
  description: '海事信息事业部开发知识库',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
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
      '/': {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        // editLinkText: 'Edit this page on GitHub',
      },
    },
  },
})
