<template>
  <div class="container grid_container">
    <h2 class="title">
      Connect to eMondrian from your favorite analytical tool
    </h2>
    <div class="item item_1">
      <img src="../../assets/excel.svg">
      <p>Excel</p>
    </div>
    <div class="item item_2">
      <img src="../../assets/powerBI.svg">
      <p>Power BI</p>
    </div>
    <div class="item item_3">
      <img src="../../assets/tableau.svg">
      <p>Tableau</p>
    </div>
    <div class="item item_4">
      <img src="../../assets/qlikSense.svg">
      <p>Qlik Sense</p>
    </div>
    <div class="item_5 item_more">
      <p>And more</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.grid_container {
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 4rem;
  align-items: center;
  grid-template-areas:
    "a a a a a a n b b c c m"
    "a a a a a a n d d e e m"
    "k k k k k k n f f f f m";
  margin-top: 12rem;
}

.title {
  grid-area: a;

  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.4;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item > img {
  height: 4rem;
  max-width: 100%;
}

.item > p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
}

.item_more {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  color: #858585;
}

.item_1 {
  grid-area: b;
}

.item_2 {
  grid-area: c;
}

.item_3 {
  grid-area: d;
}

.item_4 {
  grid-area: e;
}

.item_5 {
  grid-area: f;
}

@media (max-width: 1200px) {
  .grid_container {
    margin-top: 7rem;
    margin-bottom: 4.5rem;
    grid-template-areas:
    "a a"
    "b c"
    "d e"
    "f f";
  }

  .title {
    text-align: center;
  }

  .item_more {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 1.5rem;
    line-height: 1.5;
  }
}
</style>
