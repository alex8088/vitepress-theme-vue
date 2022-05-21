# Extending Theme

## Layout Slots

The theme's `<Layout/>` component has a few slots that can be used to inject content at certain locations of the page. Here's an example of injecting a component to replace the nav bar icon:

```js
// .vitepress/theme/index.js
import { h } from 'vue'
import { VPVTheme } from 'vitepress-theme-vue'
import Icon from './components/Icon.vue'

export default {
  ...VPVTheme,
  Layout:  () => {
    return h(VPVTheme.Layout, null, {
      'navbar-icon': () => h(Icon)
      // slots for theme layout
    })
  }
}
```

Full list of slots available in the theme layout:

- `navbar-icon`
- `navbar-title`
- `navbar-search`
- `sidebar-top`
- `sidebar-bottom`
- `content-top`
- `content-bottom`
- `aside-top`
- `aside-mid`
- `aside-bottom`

## Registering Global Components

When registering your own components，you need to remount the entry function of the theme.

```js{8}
// .vitepress/theme/index.js
import { VPVTheme } from 'vitepress-theme-vue'
import Icon from './components/Icon.vue'

export default {
  ...VPVTheme,
  enhanceApp(ctx) {
    VPVTheme.enhanceApp?.(ctx)
    // register global components
    const { app } = ctx
    app.component('Icon', Icon)
    // ...
  }
}
```
