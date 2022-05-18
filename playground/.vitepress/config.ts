import { defineConfigWithTheme } from 'vitepress'
import {
  Config as ThemeConfig,
  SidebarGroup,
  MultiSidebarConfig,
  NavItem
} from '../../src/index'
import baseC from '../../src/core/config'

const guideGroupItems = [
  { text: 'Introduction', link: '/guide/introduction' },
  { text: 'Getting Started', link: '/guide/getting-started' },
  { text: 'Configuration', link: '/guide/configuration' }
]

const themeGroupItems = [
  { text: 'Config Options', link: '/guide/theme-config-options' },
  { text: 'Extending', link: '/guide/extending-theme' }
]

const componentGroupItems = [
  { text: 'Home', link: '/guide/home-component' }
]

const guideSidebar: SidebarGroup[] = [
  { text: 'Guide', items: guideGroupItems },
  { text: 'Theme', items: themeGroupItems },
  { text: 'Components', items: componentGroupItems }
]

const sidebar: MultiSidebarConfig = {
  '/guide': guideSidebar
}

const nav: NavItem[] = [
  {
    text: 'Guide',
    items: [
      { text: 'Guide', items: guideGroupItems},
      { text: 'Theme', items: themeGroupItems },
      { text: 'Components', items: componentGroupItems }
    ],
    activeMatch: `^/guide/`,
  },
  {
    text: 'Links',
    items: [
      { text: '@vitepress', link: 'https://vitepress.vuejs.org/' },
      { text: '@vue/theme', link: 'https://github.com/vuejs/theme' }
    ]
  }
]

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseC,
  lang: 'en-US',
  title: 'VitePress Theme Vue',
  description: 'VitePress theme base on @vue/theme.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],
  srcDir: 'docs',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/alex8088/vitepress-theme-vue'
      }
    ],
    nav,
    sidebar
  }
})
