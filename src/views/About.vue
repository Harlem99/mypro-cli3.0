<template>
  <div class="about">
    <h1>This is an about page!</h1>
    <div> {{ food }} </div>
    <p> {{c}} </p>
  </div>
</template>

<script>
import toUpper from 'toupper-case-str'
export default {
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  data () {
    return {
      strs: 'hongliang',
      c: '',
    }
  },
  mounted () {
    this.c = toUpper(this.strs)
    console.log(c)
  }
}
</script>
