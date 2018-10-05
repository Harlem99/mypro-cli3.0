<template>
  <div class="home">
    {{ food }}
    <hello-world :id="elId" :new-count="count" msg="萌萌是小仙女"/>
    <button @click="increment">{{ count }}</button>
    <div>
    <div style="height: 400px; width: 400px;">
    <div class="tagcloud">
        <a href="javascript:;" @click="cFun">text</a>
        <a href="#">text</a>
        <a href="#">text</a>
        <a href="#">text</a>
        <a href="#">text</a>
        <a href="#">text</a>
        <a href="#">text</a>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '_c/HelloWorld.vue'
require('TagCloud');

export default {
  name: 'home',
  props: {
    food: {
      type: String,
      default: 'apple2'
    },
  
  },
  components: {
    HelloWorld,
  },
  data () {
    return {
      count: 0,
      data: ['1212','131']
    }
  },
  computed:{
    elId () {
      return `elID_${this._uid}`
    }
  },
  mounted () {
    tagcloud({
      //参数名: 默认值
      selector: ".tagcloud",  //元素选择器
      fontsize: 16,       //基本字体大小
      radius: 60,         //滚动半径
      mspeed: "normal",   //滚动最大速度
      ispeed: "normal",   //滚动初速度
      direction: 135,     //初始滚动方向
      keep: true          //鼠标移出组件后是否继续随鼠标滚动
    })
  },
  methods: {
    increment () {
      this.count++
    },
    cFun () {
    }
  }
}
</script>
