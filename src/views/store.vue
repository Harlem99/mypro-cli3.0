<template>
  <div>
    <a-input v-model="inputValue"/>
    <!-- <a-input :value="inputValue" @input="handelIput"/> -->
    <p>{{ inputValue }}</p>
    <p>
      appName: {{ appName }}
    </p>
     <p> 
      appName: {{ appName }} appNameWithVersion-> {{ appNameWithVersion }}
    </p>
    <p> 
      userName: {{ userName }} firstLetter-> {{ firstLetter }}
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
import { mapState, mapGetters } from 'vuex'
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
    }),
    ...mapGetters([ //数组写法
      'appNameWithVersion',
      'firstLetter'
    ]),

    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // }
  },
  methods: {
    handelIput (val) {
      this.inputValue = val;
    }
  }
 
  
}
</script>
