import vue from 'vue'
const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params.appName
  },
  SET_VER_NAME (state) {
    vue.set(state, 'appVersion', 'v_2.0')
  }
}

export default mutations