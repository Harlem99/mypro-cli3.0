<template>
  <div>
    <a-input v-model="inputValue"/>
    <!-- <a-input :value="inputValue" @input="handelIput"/> -->
    <p>{{ inputValue }}</p>
    <p>
      appName: {{ appName }}
    </p>
    <p>
      userName: {{ userName }}
    </p>
    <div>
      AShow:
      <p>
        <a-show :content="inputValue"/>
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
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
  computed: {
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    
    // ...mapState([ //数组写法
    //   'appName'
    // ])

    ...mapState({ //对象写法
      appName: state =>state.appName,
      userName: state =>state.user.userName
    })
  },
  methods: {
    handelIput (val) {
      this.inputValue = val;
    }
  }
 
  
}
</script>
