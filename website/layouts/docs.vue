<template>
  <div class="docs_container">
    <input type="checkbox">
    <div class="burger_container">
      <span />
      <span />
      <span />
    </div>
    <nuxt-link class="logo" to="/">
      <img class="black" src="~/assets/logo.svg">
      <img class="white" src="~/assets/logo_white.svg">
    </nuxt-link>
    <nav class="docs_nav">
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
  position: absolute;
  width: 30%;
  max-width: 300px;
  margin-bottom: 3rem;
  display: block;
}

.logo img {
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
}

.logo .white {
  display: block;
}

.logo .black {
  display: none;
}

.docs_container {
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
}

.docs_container input {
  display: none;
}

.docs_nav {
  background-color: #262627;
  max-width: 300px;
  flex: 1 1 30%;
  color: #ffffff;
  padding: 8rem 2.5rem 5rem;
  box-sizing: border-box;
}

.docs_article {
  box-sizing: border-box;
  flex: 1 1 70%;
  padding: 5rem 3rem;
  overflow: auto;
}

@media (max-width: 800px) {
  .docs_nav {
    display: none;
  }

  .logo {
    position: absolute;
    max-width: 300px;
    max-height: 2rem;
    margin: 0.5rem 3rem;
  }

  .logo img {
    height: 100%;
    width: auto;
    padding: 0;
  }

  .logo .white {
    display: none;
  }

  /* .docs_container input:checked ~ .logo .white {
    display: block;
  } */

  .logo .black {
    display: block;
  }

  /* .docs_container input:checked ~ .logo .black {
    display: none;
  } */

  .docs_container .docs_nav {
    padding: 3rem 3rem 2rem;
    display: block;
    position: absolute;
    text-align: center;
    background: #262627;
    width: 100%;
    height: 100%;
    max-width: 100%;

    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.5s ease-in-out,
                opacity 0.55s ease;
  }

  .docs_container input:checked ~ .docs_nav {
    transform: translateY(0);
    opacity: 1;
  }

  .docs_container input:checked ~ div span {
    opacity: 1;
    transform:  translate(4px, -15px) rotate(45deg);
    background: #FFF;
  }

  .docs_container input:checked ~ div span:nth-last-child(3)
  {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  .docs_container input:checked ~ div span:nth-last-child(2)
  {
    transform: translate(1px, 11px) rotate(-45deg);
  }

  .docs_container input {
    display: block;
    width: 33px;
    height: 27px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  .docs_container .burger_container {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .docs_container .burger_container span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #212121;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }
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
