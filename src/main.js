import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/store.js";

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
