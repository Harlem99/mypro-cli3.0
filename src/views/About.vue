<template>
  <div class="about">
    <h1>This is an about page!</h1>
    <div> {{ food }} </div>
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

    }
  },
  mounted () {
  }
}
</script>
