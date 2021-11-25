<template>
  <nuxt-child :key="$route.fullPath" />
</template>

<script>

export default {
  layout: 'docs',
  mounted () {
    if (this.$route.fullPath === '/docs' || this.$route.fullPath === '/docs/') {
      this.$router.replace('/docs/Introduction')
    }
  }
}
</script>
