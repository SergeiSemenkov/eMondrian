<template>
  <div class="container">
    <h2 class="header">
      Consulting and Support
    </h2>
    <h4 class="subheader">
      I can help you
    </h4>
    <div class="grid_container">
      <div class="item item_1">
        <span>
          Build and tune custom eMondrian configuration.
        </span>
      </div>
      <div class="item item_2">
        <span>
          Deploy eMondrian server to your environment.
        </span>
      </div>
      <div class="item item_3">
        <span>
          Bug Fixing and Changing eMondrian server behavior.
        </span>
      </div>
      <div class="item item_4">
        <span>
          Design eMondrian schema. Create cubes, dimensions and measures for your database.
        </span>
      </div>
      <div class="item item_5">
        <span>
          Set up Role based data access-control.
        </span>
      </div>
      <div class="item item_6">
        <span>
          Tune eMondrian instance performance.
        </span>
      </div>
      <div class="item item_7">
        <a href="./consulting">
          <span>
            More
          </span>
          <span>
            <img src="../../assets/arrow.svg">
          </span>
        </a>
      </div>
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
  grid-row-gap: 1.5rem;
  grid-template-areas:
    "a a a b b b c c c d d d"
    "e e e f f f g g g g g g";
}

.header {
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 56px;
  text-align: center;

  color: #000000;
  margin-bottom: 1.25rem;
}

.subheader {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 30px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 6rem;

  color: #000000;
}

.item_1 {
  grid-area: a;
}
.item_2 {
  grid-area: b;
}
.item_3 {
  grid-area: c;
}
.item_4 {
  grid-area: d;
}
.item_5 {
  grid-area: e;
}
.item_6 {
  grid-area: f;
}
.item.item_7 {
  grid-area: g;
  background-color:  #262627;
}

.item {
  border-radius: 2rem;
  border: 1px solid #000000;
  padding: 2.5rem 2.25rem;
  display: table;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 30px;

  color: #000000;
}

.item > span, .item > a {
  display: table-cell;
  vertical-align: bottom;
}

.item > a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.item > a > div {
  display: inline-block;

  border: 1px solid #FFFFFF;
  border-radius: 20px;
  padding: 1rem 2rem;

  font-family: Prompt;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 30px;
  /* identical to box height, or 125% */

  color: #FFFDFD;
}

.item > a {
  text-decoration: none;
}

.item > a > span:nth-child(1) {
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 9rem;
  line-height: 1.20;
  text-align: center;
  color: #FFFFFF;
}

.item > a > span:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  flex-basis: 4rem;
  margin-left: 1.5rem;

  background: rgba(255, 255, 255, 0.12);
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  border-radius: 16px;
}

.item > a > span:nth-child(2) > img {
  height: 2rem;
}

@media (max-width: 1200px)  {
    .grid_container {
      grid-template-areas:
        "a b"
        "c d"
        "e f"
        "g g";
    }
}

  @media (max-width: 600px) {
    .item {
      box-sizing: border-box;
    }

    .grid_container {
      grid-template-areas:
        "a"
        "b"
        "c"
        "d"
        "e"
        "f"
        "g";
    }
    .item > a {
      flex-wrap: wrap;
    }

    .item > a > span:nth-child(1) {
      font-size: 5.5rem;
      line-height: 1.20;
    }

    .item > a > span:nth-child(2) {
      flex-basis: 100%;
      margin-top: 2.5rem;
      margin-left: 0;
    }

    .item.item_7 {
      padding: 2rem 1.75rem;
    }
  }
</style>
