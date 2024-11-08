import MarkdownItMagicLink from 'markdown-it-magic-link'
import { defineConfig } from 'vite'
import '@slidev/cli'

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            'MicaApps': 'https://github.com/MicaApps',
            'Leetcode-master': 'https://github.com/youngyangyang04/leetcode-master',
            'CS-base': 'https://github.com/xiaolincoder/CS-Base',
            'BewlyBewly':'https://github.com/BewlyBewly/BewlyBewly'
          }
        })
      },
    },
  },
})
