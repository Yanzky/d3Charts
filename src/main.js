import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Line from './components/Line'
import base from './components/base'
import baseBar from './components/baseBar'

Vue.config.debug = true

window.entry = {initCharts () {}}

Vue.use(VueRouter)
// 路由配置在此处即可，保存在变量中
var rout = [
  {path: '/line', component: Line},
  {path: '/base', component: base},
  {path: '/baseBar', component: baseBar}
]

var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: rout,
  linkActiveClass: 'active'
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

window.initCharts = (obj) => {
  window.entry.initCharts(obj)
}
