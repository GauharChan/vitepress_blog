import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "gauhar's blog",
  description: 'just a blog',
  head: [
    [
      'script',
      {
        async: 'true',
        // crossorigin: 'anonymous',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1206812165499181'
      }
    ],
    [
      'link',
      {
        rel: 'icon', href: '/favicon.ico'
      }
    ]
  ], 
  themeConfig: {
    // logo: '/assets/logo.jpg',
    lastUpdatedText: '最后修改时间',
    outline: 'deep',
    outlineTitle: '本页目录',
    docFooter: {
      prev: '前一篇',
      next: '下一篇',
    },
    // algolia: {
    //   indexName: 'vuejs',
    //   appId: 'ML0LEBN7FQ',
    //   apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
    //   searchParameters: {
    //     facetFilters: ['version:v3']
    //   }
    // },
    nav: [
      { text: 'hexo版博客', link: 'https://gauhar.gitee.io/' },
      { text: '码云', link: 'https://gitee.com/gauhar' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GauharChan' },
      { icon: 'twitter', link: 'https://twitter.com/GauharChen' },
      { icon: 'facebook', link: 'https://www.facebook.com/gauhar.chan.779' },
    ],
    sidebar: [
      {
        text: '框架',
        items: [
          { text: 'vue3', link: '/vue3' },
          { text: 'react', link: '/react笔记' },
          { text: 'vue3源码', link: '/vue3源码' },
          { text: 'vue2笔记', link: '/vue笔记' },
        ],
        collapsible: true,
      },
      {
        text: '工具库',
        items: [
          { text: 'antv', link: '/antv' },
          { text: 'webpack', link: '/webpack' },
        ],
        collapsible: true,
      },
      {
        text: 'js相关',
        items: [
          { text: 'typeScript', link: '/typeScript' },
          { text: 'es6笔记', link: '/es6笔记' },
          { text: 'js学习笔记', link: '/js学习笔记' },
          { text: '正则表达式', link: '/正则表达式' },
          { text: 'js笔记', link: '/js笔记' },
          { text: 'note', link: '/note' },
        ],
        collapsible: true,
      },
      {
        text: '工作积累',
        items: [
          { text: '问题', link: '/问题' },
          { text: '常用代码', link: '/常用代码' },
          { text: '工作常用代码', link: '/工作常用代码' },
          { text: '工作上遇到的坑', link: '/工作上遇到的坑' },
          { text: '那些坑', link: '/那些坑' },
        ],
        collapsible: true,
      },
      {
        text: '小程序',
        items: [
          { text: 'taro1.x', link: '/taro' },
          { text: 'uniapp', link: '/uniapp' },
        ],
        collapsible: true,
      },
    ]
  }
})
