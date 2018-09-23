<template>
  <div class="home">
    {{ food }}
    <hello-world msg="Welcome to Your Vue.js App"/>
    <button @click="increment">{{ count }}</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '_c/HelloWorld.vue'

export default {
  name: 'home',
  props: {
    food: {
      type: String,
      default: 'apple2'
    }
  },
  components: {
    HelloWorld
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
