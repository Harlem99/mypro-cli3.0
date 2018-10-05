<template>
  <div>
   <p> appName: {{ appName }} </p>
   <p> userName: {{ userName }} </p>
   <p> appVersion：{{ appVersion }}</p>
   <button @click="changeAppName">修改appName</button>
   <button @click="changeUserName">修改userName</button>
   <button @click="regModule">注册模块</button>
   <ul>
      <p v-for="(item, index) in todoList" :key="index">{{ item }}</p>
   </ul>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
      appVersion: state => state.appVersion,
      todoList :state => state.todo ? state.todo.todoList : []
    }),
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_USER_NAME'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    changeAppName () {
      //this.$store.commit('SET_APP_NAME',{appName:'newAppName'})  //写法1
      // this.$store.commit({ //写法2
      //   type: 'SET_APP_NAME',
      //   appName:'newAppName2'
      // })

      //this.SET_APP_NAME('appName_map') //展开操作符写法1
      this.SET_APP_NAME({appName:'appName_map2'}) //展开操作符写法2

      //////////////////////////////////////////////
      this.$store.commit('SET_VER_NAME')
    },
    changeUserName () {
      this.SET_USER_NAME('newUserName2'),
      this.updateAppName()
    },
    regModule () {
      this.$store.registerModule('todo',{ //给特定的模块中添加时 ['例如user','模块名']
        state: {todoList: [
          '1、是什么？',
          '2、怎么做？'
        ]}
      })
    }
  }
}
</script>

