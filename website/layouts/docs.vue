<template>
  <div class="docs_container">
    <nav class="docs_nav">
      <nuxt-link class="logo" to="/">
        <img src="~/assets/logo_white.svg">
      </nuxt-link>
      <tree-node
        v-for="child in files"
        :key="child.name"
        :tree-node="child"
      />
    </nav>
    <Nuxt class="docs_article" />
  </div>
</template>

<script>
import treeNode from '../components/docs/treeNode.vue'

export default {
  components: { treeNode },
  fetchOnServer: true,
  data () {
    return {
      files: []
    }
  },
  fetch () {
    if (process.server) {
      const docsUtils = require('@/utils/docs')
      const files = docsUtils.getDocumentsTree()
      this.files = files
    }
  }
}
</script>

<style scoped>
.logo {
  width: 100%;
  margin-bottom: 3rem;
  display: block;
}

.logo img {
  width: 100%;
}

.docs_container {
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
}

.docs_nav {
  background-color: #262627;
  max-width: 300px;
  flex: 1 1 30%;
  color: #ffffff;
  padding: 5rem 2.5rem;
  box-sizing: border-box;
}

.docs_article {
  box-sizing: border-box;
  flex: 1 1 70%;
  padding: 5rem 3rem;
  overflow: auto;
}

</style>
<style>
.docs_article h1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.4;
}

.docs_article h2 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 1.14;
}

.docs_article p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  color: #000;
}

.docs_article a {
  color: #000;
}

.docs_article p img {
  max-width: 100%;
  border-radius: 12px;
}

.docs_article pre {
  overflow: auto;
}
</style>
