import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import globalComponents from './globalComponents'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(globalComponents);
Vue.use(VueAwesomeSwiper);

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
