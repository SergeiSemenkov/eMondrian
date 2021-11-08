<template>
  <footer>
    <div class="grid">
      <h3 class="title">
        eMondrian
      </h3>
      <nav class="links">
        <ul>
          <li>
            <a href="/docs">Documentation</a>
          </li>
          <li>
            <a @click="openMore">About eMondrian</a>
          </li>
        </ul>
      </nav>
      <h3 class="year">
        @2021
      </h3>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    openMore () {
      const el = document.querySelector('#general_info')
      document.querySelector('main').scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    }
  }
}
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-areas: "a b c";
}

.title {
  grid-area: a;
}
.links {
  grid-area: b;
}
.year {
  grid-area: c;
  text-align: right;
}

footer {
  position: relative;
  bottom: -16rem;
  width: 100%;
}

footer > div {
  margin: 2rem;
  align-items: center;
  max-width: 1296px;
  margin: 0 auto;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

ul > li {
  padding: 1rem;
}

ul > li > a {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-decoration: none;

  cursor: pointer;

  color: #000000;
}

nav {
  flex-grow: 1;
}

h3 {
  margin-left: 2rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height, or 125% */

  color: #000000;
}

@media (max-width: 600px) {
  footer {
    bottom: -9rem;
  }

  .grid {
    align-items: baseline;
    grid-template-areas:
      "a b"
      "c b";
  }

  .year {
    text-align: left;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.5;
    margin: 0 0 0.75rem;
  }

  ul {
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    justify-content: end;
  }

  ul > li {
    padding: 0;
    margin: 0.5rem 0;
  }
}
</style>
