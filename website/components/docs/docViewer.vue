<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="$md.render(data)" />
</template>

<script>
import hljs from 'highlight.js'

export default {
  asyncData ({ route, router, $config }) {
    let data = null
    if (process.server) {
      const docsUtils = require('@/utils/docs')
      data = null
      const { originalDocumentContent, baseFolder } = route.meta.find(e => e.originalDocumentContent)
      data = docsUtils.GetFileContent(originalDocumentContent)

      data = data.replace(/__contentFolder__/g, `${$config._app.assetsPath}${baseFolder}`)
    }
    return {
      data
    }
  },
  async mounted () {
    await this.$nextTick()
    hljs.highlightAll()
  }
}
</script>
