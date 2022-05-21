# Configuration

## Overview

To customize your site, you need first create a `.vitepress` directory inside your docs directory. This is where all VitePress-specific files will be placed. Your project structure is probably like this:

```
.vitepress
├─ theme
│  └─ index.js
└─ config.js
```

## Using Theme

You can enable this custom theme by adding the `.vitepress/theme/index.js` file (the "theme entry file"). And you need to import and re-export it from the theme entry:

```js
// .vitepress/theme/index.js
import { VPVTheme } from 'vitepress-theme-vue'
export default VPVTheme
```

## Config Theme

Configure the theme config in the `.vitepress/config.js` file.

```js{3,6,7}
// .vitepress/config.js
import { defineConfig } from 'vitepress'
import baseConfig from 'vitepress-theme-vue/config'

export default defineConfig({
  extends: baseConfig,
  themeConfig: {
    // ...
  }
})

```

Check out the [Config Options](/guide/theme-config-options) for a full list of the `themeConfig` options.


For typescript project, you'll need to use `defineConfigWithTheme` instead of `defineConfig`, and pass the config type for your custom theme via a generic argument:


```js
// .vitepress/config.ts
import { defineConfigWithTheme } from 'vitepress'
import { Config as ThemeConfig } from 'vitepress-theme-vue'
import baseConfig from 'vitepress-theme-vue/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  themeConfig: {
    // Type is `ThemeConfig`
  }
})

```

And, you need to add a `*.d.ts` declaration file to define the `vitepress-theme-vue/config` module.

```ts
declare module 'vitepress-theme-vue/config' {
  import { UserConfig } from 'vitepress'
  const config: () => Promise<UserConfig>
  export default config
}
```
