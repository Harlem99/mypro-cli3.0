<template>
  <div>
    <input @input="handelIput" :value="value">
  </div>
</template>
<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handelIput (event) {
      const value = event.target.value;
      this.$emit('input', value);
    }
  }
}
</script>

