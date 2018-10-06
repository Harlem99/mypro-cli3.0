<template>
  <div>
    <list :list="list" :render="renderFunc"></list>
  </div>
</template>
<script>
import list from '_c/list'

export default {
  name: 'render',
  components: {
    list
  },
  data () {
    return {
      list: [
        {name: 'harlem'},
        {name: 'cc'}
      ]
    }
  },
  methods: {
    renderFunc (h, name) {
      /* return h('i', { 
        style: {
          color: 'pink'
        }
      },name) */
      return ( //JSX语法
        <i on-click={this.handelClick} style={{color: 'red'}}>{name}</i>
      )
    },
    handelClick (event) {
      console.log(event)
    }
  }
}
</script>
