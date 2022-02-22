import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";
import VueCompositionAPI from '@vue/composition-api'
import 'materialize-css/dist/css/materialize.min.css'
import moment from 'moment'

Vue.prototype.moment = moment

Vue.use(VueCompositionAPI);

Vue.filter('apiFile', value => '/storage' + value)

//Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
