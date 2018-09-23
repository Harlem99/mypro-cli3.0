<template>
  <div>
    bus1
    <button @click="handelClick">按我</button>
  </div>
</template>
<script>
export default {
  name: 'Bus1',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    
  },
  methods: {
    handelClick () {
      this.$bus.$emit('on-click','hello')  
    }
  }
}
</script>
