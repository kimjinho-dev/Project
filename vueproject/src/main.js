import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from "axios"

let url = "http://127.0.0.1:8000/"

axios.get(url)
.then(function (response) {
  console.log(response);  
})
.catch(function (response) {
  console.log(response)  
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
