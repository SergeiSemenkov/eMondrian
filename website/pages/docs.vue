<template>
  <nuxt-child :key="$route.fullPath" />
</template>

<script>

export default {
  layout: 'docs',
  middleware ({ route, redirect }) {
    if (route.fullPath === '/docs') {
      return redirect('/docs/introduction')
    }
  }
}
</script>
