import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import globalComponents from './globalComponents'

Vue.config.productionTip = false

Vue.use(globalComponents)

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
