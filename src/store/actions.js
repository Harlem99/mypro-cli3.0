import { getAppName } from '@/api/app'

const actions = {
  updateAppName ({ commit }){
    getAppName().then(res => {  
      console.log('res', res)
      const { code, info: {appName} } = res
      commit('SET_APP_NAME', appName)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
export default actions