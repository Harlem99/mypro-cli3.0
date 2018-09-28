<template>
  <div>
    appName: {{ appName }}
    <button @click="handelClick">修改appName</button>
   <p> appVersion：{{ appVersion }}</p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations  } from 'vuex'
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    ...mapState({ //对象写法
      appName: state =>state.appName,
      userName: state =>state.user.userName,
      appVersion: state => state.appVersion
    }),
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME'
    ]),
    handelClick () {
      //this.$store.commit('SET_APP_NAME',{appName:'newAppName'})  //写法1
      // this.$store.commit({ //写法2
      //   type: 'SET_APP_NAME',
      //   appName:'newAppName2'
      // })

      //this.SET_APP_NAME('appName_map') //展开操作符写法1
      this.SET_APP_NAME({appName:'appName_map2'}) //展开操作符写法2

      //////////////////////////////////////////////
     this.$store.commit('SET_VER_NAME')
    }
  }
}
</script>

