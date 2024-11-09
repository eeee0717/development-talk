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
            'Podwise-AI': 'https://github.com/eeee0717/podwise-ai-refactor',
            'Subtitle-Translator-CLI': 'https://github.com/eeee0717/subtitle-translator-cli'
          }
        })
      },
    },
  },
})
