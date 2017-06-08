import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Line from './components/Line'

window.entry = {initCharts () {}}

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/line': {
    component: Line
  }
})

router.start(App, 'app')

window.initCharts = (obj) => {
  window.entry.initCharts(obj)
}
