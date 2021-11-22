<template>
  <nuxt-child :key="$route.fullPath" />
</template>

<script>

export default {
  layout: 'docs'
}
</script>
