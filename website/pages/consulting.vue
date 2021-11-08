<template>
  <div>
    <Header />
    <Rate />
    <Services />
  </div>
</template>

<script>
import Header from '~/components/consulting/Header.vue'
import Rate from '~/components/consulting/Rate.vue'
import Services from '~/components/consulting/Services.vue'
export default {
  components: {
    Header,
    Rate,
    Services
  }
}
</script>

<style>
body {
  padding-bottom: 15rem;
}

.container {
  padding: 0 2rem;
  margin: 9rem auto 0;
}

@media (min-width: 1300px) {
  .container {
    max-width: 1296px;
  }
}

@media (max-width: 600px) {
  .container {
    max-width: 1296px;
  }
}
</style>
