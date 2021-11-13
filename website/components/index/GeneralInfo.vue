<template>
  <div id="general_info" class="info_container container">
    <h2 class="info_item_1-title">
      What is eMondrian
    </h2>
    <div class="info_item_1-text">
      eMonrian is an open-source free <a href="https://en.wikipedia.org/wiki/Online_analytical_processing">OLAP</a> server. It is based on the <a href="https://github.com/pentaho/mondrian">Mondrian</a> project.
    </div>
    <div class="info_item_2-pic">
      <img src="../../assets/illust2.svg">
    </div>
    <div class="info_item_2-text">
      eMondrian allows you to do Ad-Hoc analysis. You can explore, slice and dice data without needing to write queries.
    </div>
    <div class="info_item_3-pic">
      <img src="../../assets/illust1.svg">
    </div>
    <div class="info_item_3-text">
      eMondrian creates an analytic space and hides the complexity of underlying tables and their relations. It represents data as <a href="https://en.wikipedia.org/wiki/OLAP_cube">cubes</a>, dimensions and measures.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.info_container {
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 6rem;
  align-items: center;
  grid-auto-rows: auto 19rem 19rem;
  grid-template-areas:
    "n b b b b b m a a a a q"
    "w w c c c r d d d d d t"
    "y e e e e e u f f f i i";
}

.info_item_1-title {
  grid-area: a;

  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 56px;
  text-align: right;
  color: #000000;
}

.info_item_1-text {
  grid-area: b;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
}

.info_item_2-pic {
  grid-area: c;
  height: 100%;
  width: 100%;
}

.info_item_2-pic > img, .info_item_3-pic > img {
  height: 100%;
  width: 100%;
}

.info_item_2-text {
  grid-area: d;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
}

.info_item_3-pic {
  grid-area: f;
  height: 100%;
  width: 100%;
}

.info_item_3-text {
  grid-area: e;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
}

@media (max-width: 1200px) {
  .info_container {
  grid-column-gap: 0.5rem;
  grid-auto-rows: auto 14rem 14rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "b b b a a"
    "c c d d d"
    "e e e f f";
  }
}

@media (max-width: 600px) {
  .info_container {
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "f"
      "e";
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-row-gap: 2rem;
  }

  .info_item_1-title {
    font-size: 1.5rem;
    line-height: 2.33;
    text-align: center;
    margin: 4rem 0 0;
  }
}
</style>
