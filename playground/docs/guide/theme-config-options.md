# Theme Config Options

## Theme Config Type

```ts
interface Config {
  /**
   * The appearance option to enable/disable light/dark mode.
   * @default true
   */
  appearance?: boolean
  /**
   * The nav bar logo.
   */
  navLogo?: string
  /**
   * The social links to be displayed at the end of the nav bar. Perfect for
   * placing links to social services such as GitHub, Twitter, Facebook, etc.
   */
  socialLinks?: SocialLink[]
  /**
   * The nav items.
   */
  nav?: NavItem[]
  /**
   * The sidebar items.
   */
  sidebar?: SidebarConfig
  /**
   * Info for the edit link
   */
  editLink?: {
    repo?: string
    text?: string
  }
  /**
   * Algolia configuration for the site search.
   */
  algolia?: AlgoliaSearchOptions
  /**
   * CarbonAds configuration
   */
  carbonAds?: {
    code: string
    placement: string
  }
}
```

## Theme Config: Nav

Example:

```js
[
  {
    text: 'Guide',
    items: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Configuration', link: '/guide/configuration' }
        ]
      }
    ]
  },
  {
    text: 'Links',
    items: [
      { text: '@vitepress', link: 'https://vitepress.vuejs.org/' },
      { text: '@vue/theme', link: 'https://github.com/vuejs/theme' }
    ]
  }
]

```

## Theme Config: Sidebar

Example:

```js
const guideSidebar = [
  {
    text: 'Guide',
    items: [
      { text: 'Introduction', link: '/guide/introduction' },
      { text: 'Getting Started', link: '/guide/getting-started' },
      { text: 'Configuration', link: '/guide/configuration' }
    ]
  }
]

const sidebar = {
  '/guide': guideSidebar
}
```

## Theme Config: Algolia

Check out [Algolia DocSearch's documentation](https://vitepress.vuejs.org/config/algolia-search.html)

## Theme Config: Carbon Ads

Check out [Carbon Ads's documentation](https://vitepress.vuejs.org/config/carbon-ads.html)
