<template>
  <div class="background">
    <div class="container">
      <div class="content">
        <h2 class="header">
          Who is using?
        </h2>
        <div class="item">
          <div class="item_content" />
        </div>
        <div class="item">
          <div class="item_content" />
        </div>
        <div class="item">
          <div class="item_content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.background {
  background: #262627;
}

.content {
  display: flex;
  padding: 2rem 8.33333%;
  align-items: center;
}

.header {
  flex-basis: 40%;

  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 56px;

  color: #FFFFFF;
}

.item_content {
  width: 100%;
  height: 90px;
  background-color: rgba(255, 255, 255, 0.2);
}

.item {
  box-sizing: border-box;
  flex-basis: 20%;
  padding: 1.5rem;
}

@media (max-width: 600px) {
  .content {
    flex-wrap: wrap;
    padding: 0;
    padding-bottom: 3rem;
  }

  .header {
    font-size: 1.5rem;
    line-height: 1.5;
    flex-basis: 100%;
    text-align: center;
    margin: 2rem 0 1.5rem;
  }

  .item {
    flex-basis: 50%;
    padding: 0.5rem;
  }
}
</style>
