<template>
  <div>
    bus2 接收 bus1 传入的值：{{ message }}
  </div>
</template>
<script>
export default {
  name: 'Bus2',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
     this.$bus.$on('on-click', mes => {
        this.message = mes;
      })  
  },

}
</script>
