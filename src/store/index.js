import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
import vuexExample from './vuexExample';
import routerdata from './routerdata';
const store =new Vuex.Store({
    modules:{
        vuexExample,
        routerdata
    }
})
export default store;