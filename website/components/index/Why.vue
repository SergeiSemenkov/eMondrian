<template>
  <div class="container">
    <h2 class="text-center">
      Why eMondrian?
    </h2>
    <div class="grid_container">
      <div class="item item-1">
        <h4>
          Free
        </h4>
        <p>Save your budget. Get it for free.</p>
      </div>
      <div class="item item-2">
        <h4>
          Simple
        </h4>
        <p>eMondrian is created to be as simple as possible to deploy, develop and support.</p>
      </div>
      <div class="item item-3">
        <h4>
          Easy to change
        </h4>
        <p>It is an open source project. Customize it as you need. Use the power of the whole open source developer community.</p>
      </div>
      <div class="item item-4">
        <h4>
          Scalable
        </h4>
        <p>It could easily scale up and down to achieve the best result.</p>
      </div>
      <div class="item item-5">
        <h4>
          Effective
        </h4>
        <p>It is the most effective way to enhance your analytical environment. Pay only when you really need it - for customization and new features that you want.</p>
      </div>
      <div class="item item-6">
        <h4>
          Universal
        </h4>
        <p>eMondrian server can be hosted on any java server (Apache Tomcat, Jetty, Tiny Java Web Server). You can run it under Linux or Windows.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.4;
  margin-bottom: 5.5rem;
}

.grid_container {
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 6rem;
  align-items: start;
  grid-template-areas:
    "a a a a b b b b c c c c"
    "d d d d e e e e f f f f"
}

.item {
  padding: 0 2rem;
}

.item > h4 {
  margin: 0;
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  line-height: 1.17;

  color: #1A2FEE;
}

.item > p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.87;

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

@media (max-width: 1200px) {
  .grid_container {
    grid-template-areas:
      "a b"
      "c d"
      "e f"
  }
}

@media (max-width: 600px) {
  .grid_container {
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "e"
      "f";
    grid-auto-rows: auto;
    grid-row-gap: 4rem;
  }

  h2 {
    font-family: Prompt;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.33;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }

  .info_item_1-title {
    font-size: 1.5rem;
    line-height: 2.33;
    text-align: center;
    margin: 4rem 0 0;
  }

  .item > h4 {
    font-size: 2.5rem;
    line-height: 1.4;
  }

  .item {
    padding: 0;
  }
}
</style>
