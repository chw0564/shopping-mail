import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import topSearch from "./modules/topSearch"
import SeachList from "./modules/SeachList"
import Home from './modules/Home'


Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    actions,
    mutations,
    modules:{
        topSearch,
        SeachList,
        Home
    }
})