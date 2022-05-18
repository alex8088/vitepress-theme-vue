import { h } from 'vue'
import { Theme } from 'vitepress'
import { VPVTheme } from '../../../src/index'

import Icon from './components/Icon.vue'

const DefaultTheme: Theme = {
  ...VPVTheme,
  Layout: () => {
    return h(VPVTheme.Layout, null, {
      'navbar-icon': () => h(Icon)
      // slots for theme layout
    })
  },
  enhanceApp(ctx) {
    VPVTheme.enhanceApp?.(ctx)
    // register global components
  }
}

export default DefaultTheme
