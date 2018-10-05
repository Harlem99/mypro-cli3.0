const state = {
  userName: 'harlem'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0,1)
  }
}
const mutations = {
  SET_USER_NAME (state, parmas) {
    state.userName = parmas
  }
}
const actions = {
  //
}

export default {
  state,
  mutations,
  actions,
  getters
}