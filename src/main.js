import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import authPlugin from './plugins/auth'
import router from './configuration/router'

Vue.use(authPlugin)
Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
