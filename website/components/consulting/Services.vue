<template>
  <div class="container">
    <h2>
      How I can help you:
    </h2>
    <ul>
      <li v-for="service in services" :key="service.heading">
        <expandable-list-item :item="service" />
      </li>
    </ul>
  </div>
</template>

<script>
import ExpandableListItem from './ExpandableListItem.vue'
import services from '@/data/services.json'

export default {
  components: { ExpandableListItem },
  data () {
    return {
      services: services.services
    }
  }
}
</script>

<style scoped>
h2 {
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.4;
  text-align: center;
  color: #000000;

  margin-bottom: 3.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: 0 1.5rem 0 2rem;
  border-bottom: 1px solid #CBCCD8;
}

ul li:last-child {
  border-bottom: none;
}

@media (max-width: 600px) {
  h2 {
    font-size: 2rem;
    line-height: 1.5;
  }
}
</style>
