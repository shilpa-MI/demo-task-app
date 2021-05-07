import Vue from 'vue'
import App from './App.vue'
import BootstrapVue , {IconsPlugin} from 'bootstrap-vue'
import routes from './routes/routes'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import GlobalJs from './global'
import { ApiService } from "./axios";

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(GlobalJs)
Vue.use(IconsPlugin)

const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})
new Vue({
  router,
  ApiService,
  render: h => h(App),
}).$mount('#app')
