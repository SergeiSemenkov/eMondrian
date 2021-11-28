<template>
  <div
    :class="`tree_node level${level}` + (isOpened ? ' isOpened' : '')"
    @click.stop.prevent="isOpened = !isOpened"
  >
    <template v-if="hasChildren">
      <span
        :class="{ 'isActive': isActive }"
      >
        {{ treeNode.name }}
        <span v-show="isOpened" class="icon"><img src="../../assets/arrow_down.svg"></span>
        <span v-show="!isOpened" class="icon"><img src="../../assets/arrow_right.svg"></span>
      </span>
      <div v-show="isOpened" class="tree_node_childs">
        <tree-node
          v-for="child in treeNode.children"
          :key="child.name"
          :tree-node="child"
          :level="level + 1"
          @openLink="$emit('openLink', $event)"
        />
      </div>
    </template>
    <template v-else>
      <a
        :class="{ 'isActive': isActive }"
        @click="$emit('openLink', '/docs/' + treeNode.path)"
      >
        {{ treeNode.name }}
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    treeNode: {
      type: Object,
      default: null
    },
    level: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      isOpened: this.$route.fullPath.includes('/docs/' + this.treeNode.path)
    }
  },
  computed: {
    hasChildren () {
      return Array.isArray(this.treeNode.children) && this.treeNode.children.length
    },
    isActive () {
      return this.$route.fullPath.includes('/docs/' + this.treeNode.path)
    }
  }
}
</script>

<style>
.tree_node_childs {
  padding-left: 1.5rem;
}

.tree_node {
  cursor: pointer;
  text-align: left;
}

.tree_node .isActive {
  border-bottom: 2px solid #ffffff;
}

.level1 {
  margin-top: 1.25rem;
}

.level1 > span, .level1 > a {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.6;
}

.level2 {
  margin-top: 0.75rem;
}

.level2 > span,  .level2 > a {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2;
  margin-top: 0.75rem;
}

.tree_node a {
  color: #ffffff;
  text-decoration: none;
}

.icon {
  margin-left: 1rem;
}
</style>
