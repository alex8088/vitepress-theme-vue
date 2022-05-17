import type { UserConfig as VitePressConfig } from 'vitepress'
import baseConfig from '@vue/theme/config'

export default async (): Promise<VitePressConfig> => {
  const config = await baseConfig()
  config.vite?.optimizeDeps?.exclude?.push('vitepress-theme-vue')
  if (config.head) {
    const hd = config.head[0]
    if (hd[1]['rel'] === 'icon') {
      config.head.shift()
    }
  }
  return config
}
