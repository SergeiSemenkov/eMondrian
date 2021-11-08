<template>
  <div>
    <div class="heading" @click="isOpened = !isOpened">
      <h3>
        {{ item.heading }}
      </h3>
      <div v-if="isOpened">
        <img src="../../assets/Cross.svg">
      </div>
      <div v-else>
        <img src="../../assets/Plus.svg">
      </div>
    </div>
    <transition
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      >
      <div v-if="isOpened" class="description">
        {{ item.desc }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.height = '0'
      el.style.opacity = '0'
      el.style.padding = '0'
    },
    enter (el) {
      el.style.height = el.scrollHeight + 'px'
      el.style.opacity = '1'
      el.style.padding = '0.5rem 0 1.5rem'
    },
    beforeLeave (el) {
      el.style.height = el.scrollHeight + 'px'
      el.style.opacity = '1'
      el.style.padding = '0.5rem 0 1.5rem'
    },
    leave (el) {
      el.style.height = '0'
      el.style.opacity = '0'
      el.style.padding = '0'
    }
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 1.5rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.5;
  color: #000000;
}

.heading {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;

  cursor: pointer;
}

.description {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5;

  transition: all 500ms ease-out;
  overflow: hidden;
}

@media (max-width: 1000px) {
  .heading {
    align-items: baseline;
  }

  .heading > div {
    transform: translateY(0.5rem);
  }
}

@media (max-width: 600px) {
  h3 {
    font-size: 1.25rem;
    line-height: 1.6;
  }
}
</style>
