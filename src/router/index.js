import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  routes
})

const HAS_LOGINED = true; //登录状态（通过接口更换状态）

router.beforeEach((to, from, next) => { //全局前置守卫
  if(to.name !== 'login') { //如果跳转的不是登录页
    if (HAS_LOGINED) next() //如果用户已经登录 则直接跳转
    else next({ name: 'login'}) //否则 跳转到登录页
  } else { //跳转的是登录页
    if (HAS_LOGINED) next({ name: 'home'}) //如果已经登录 并跳转登录页 则跳转home页
    else next() //
  }
})

export default  router
