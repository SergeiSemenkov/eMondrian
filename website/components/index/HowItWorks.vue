<template>
  <div class="container">
    <h2 class="header">
      How it works?
    </h2>
    <div class="grid_container">
      <div class="item item-1">
        <img src="../../assets/HowItWorks/illu1.png">
        <p>eMondrian hides complexity of underlying source from the end-users and moves configuration responsibility from these users to a DBA or other app developer. It makes it simple to do Ad-hoc analysis and create enterprise reporting.</p>
      </div>
      <div class="item item-2">
        <img src="../../assets/HowItWorks/illu1.png">
        <p>Mondrian server is a Relational OLAP (ROLAP) server that means that it always shows real time data from the source. This server runs queries written in the MDX language, reads data from a source database, and presents the results in a multidimensional format.</p>
      </div>
      <div class="item item-3">
        <img src="../../assets/HowItWorks/illu1.png">
        <p>Any database that has a JDBC driver can be the source for eMondrian.</p>
      </div>
      <div class="item item-4">
        <img src="../../assets/HowItWorks/illu1.png">
        <p>Mondrian supports XMLA for Analysis and olap4j standards. So you can load data from it to your own application.</p>
      </div>
      <div class="item item-5">
        <img src="../../assets/HowItWorks/illu1.png">
        <p>It has Role based access-control. You can manage access at cube, dimension, hierarchy and even at each row level.</p>
      </div>
      <div class="item item-6">
        <img src="../../assets/HowItWorks/illu1.png">
        <p>It is easy to deloy, design data schema and support.</p>
      </div>
    </div>
    <div class="buttons_container">
      <a href="/docs" class="primary_button">Documentation</a>
      <a class="secondary_button" @click="openQuickStart">Quick start</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openQuickStart () {
      const el = document.querySelector('#quick_start')
      document.querySelector('main').scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.grid_container {
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 4rem;
  align-items: start;
  grid-template-areas:
    "a a a a b b b b c c c c"
    "d d d d e e e e f f f f"
}

h2 {
  margin-bottom: 5rem;

  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 56px;

  text-align: center;

  color: #000000;
}

.item-1 {
  grid-area: a;
}

.item-2 {
  grid-area: b;
}

.item-3 {
  grid-area: c;
}

.item-4 {
  grid-area: d;
}

.item-5 {
  grid-area: e;
}

.item-6 {
  grid-area: f;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
}

.item > p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.87;

  color: #000000;
}

.item > img {
  height: 10rem;
}

.buttons_container {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 6rem;
}

.buttons_container > .primary_button {
  background-color: #FB9B2B;
  box-shadow: 0px 4px 30px rgba(237, 145, 38, 0.5);
}

@media (max-width: 1200px) {
  .grid_container {
    grid-template-areas:
      "a b"
      "c d"
      "e f";
    grid-row-gap: 4.5rem;
  }
}

@media (max-width: 600px) {
  h2 {
    margin-top: 5.5rem;
    margin-bottom: 4rem;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5;
  }

  .grid_container {
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "e"
      "f";
    grid-row-gap: 4.5rem;
  }

  .buttons_container {
    flex-wrap: wrap;
    margin-top: 6rem;
    margin-bottom: 5.5rem;
  }

  .buttons_container > a {
    width: 100%;
    text-align: center;
    margin: 0;
  }

  .buttons_container > a.primary_button {
    display: block;
    margin: 0 0 1rem;
  }
}
</style>
