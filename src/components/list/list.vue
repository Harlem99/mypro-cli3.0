<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="`item_${index}`">
        <span v-if="!render">{{ item.name }}</span>
        <render-dom v-else :render-func="render" :name="item.name"></render-dom>
      </li>
    </ul>
  </div>
</template>
<script>
import renderDom from '_c/render-dom'
export default {
  name: 'list',
  components: {
    renderDom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {

    }
  }
}
</script>

