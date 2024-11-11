import MarkdownItMagicLink from 'markdown-it-magic-link'
import { defineConfig } from 'vite'
import '@slidev/cli'

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            'Leetcode-master': 'https://github.com/youngyangyang04/leetcode-master',
            'BewlyBewly':'https://github.com/BewlyBewly/BewlyBewly',
            'MicaApps': 'https://github.com/MicaApps',
          }
        })
      },
    },
  },
})
