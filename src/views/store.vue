<template>
  <div>
    <a-input v-model="inputValue"/>
    <!-- <a-input :value="inputValue" @input="handelIput"/> -->
    <p>{{ inputValue }}</p>
    <div>
      AShow:
      <p>
        <a-show :content="inputValue"/>
      </p>
    </div>
  </div>
</template>
<script>

import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
export default {
  name: 'store',
  components: {
    AInput,
    AShow
  },
   data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handelIput (val) {
      this.inputValue = val;
    }
  }
 
  
}
</script>
