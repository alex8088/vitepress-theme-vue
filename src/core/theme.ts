import { Theme } from 'vitepress'
import { VPTheme, Config as ThemeConfig } from '@vue/theme'
import { MenuItemChildWithChildren, MenuItemWithLink } from '@vue/theme'

import Layout from './components/Layout.vue'
import Home from './components/Home.vue'

const VPVTheme: Theme = {
  ...VPTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Home', Home)
  }
}

export { VPVTheme }

export type Config = Omit<ThemeConfig, 'footer'> & {
  navLogo?: string
}

export type NavItem = NavItemWithLink | NavItemWithChildren

export type NavItemWithLink = MenuItemWithLink & {
  activeMatch?: string
}

export interface NavItemWithChildren {
  text?: string
  activeMatch?: string
  items: (NavItemWithLink | MenuItemChildWithChildren)[]
}

export type SidebarConfig = SidebarGroup[] | MultiSidebarConfig

export interface SidebarGroup {
  text: string
  items: MenuItemWithLink[]
}

export interface MultiSidebarConfig {
  [path: string]: SidebarGroup[]
}
