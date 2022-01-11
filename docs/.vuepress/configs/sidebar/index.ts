import type { SidebarConfig } from '@vuepress/theme-default'
export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: 'HTML 规范',
      //collapsible: true,
      children: ['/guide/html/code.md', '/guide/html/note.md', '/guide/html/template.md', '/guide/html/webapp.md'],
    },
    {
      text: '图片规范',
      //collapsible: true,
      children: ['/guide/image/format.md', '/guide/image/size.md', '/guide/image/quality.md', '/guide/image/import.md'],
    },
    {
      text: 'CSS 规范',
      //collapsible: true,
      children: [
        '/guide/css/code.md',
        '/guide/css/note.md',
        '/guide/css/sass.md',
        '/guide/css/reset.md',
        '/guide/css/query.md',
        '/guide/css/webkit.md',
      ],
    },
    {
      text: '命名规范',
      //collapsible: true,
      children: ['/guide/name/dir.md', '/guide/name/image.md', '/guide/name/htmlcss.md', '/guide/name/classname.md'],
    },
    {
      text: 'JS 规范',
      //collapsible: true,
      children: [
        '/guide/js/language.md',
        '/guide/js/code.md',
        //   '/guide/js/react.md'
      ],
    },
  ],
}
