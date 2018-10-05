<template>
  <div>
    <h1>{{ msg }},{{ newCount }}</h1>
    <div> {{dizeng}} </div>
    <p>
      <button @click="jisuan">计算</button>
    </p>
  </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  props: {
    msg: String,  
    newCount: {
      type: Number,
      default: '0'
    }
  },
  data () {
    return {
      dizeng: 0
    }
  },
  methods:{
    jisuan(){
      this.dizeng+=1
    }
  }
}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
div{
  display: block;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
