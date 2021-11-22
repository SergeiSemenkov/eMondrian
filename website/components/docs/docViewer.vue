<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="$md.render(data)" />
</template>

<script>
export default {
  asyncData ({ route }) {
    let data = null
    if (process.server) {
      const docsUtils = require('@/utils/docs')
      data = null
      const contentPath = route.meta.find(e => e.originalDocumentContent).originalDocumentContent
      data = docsUtils.GetFileContent(contentPath)
    }
    return {
      data
    }
  }
}
</script>
