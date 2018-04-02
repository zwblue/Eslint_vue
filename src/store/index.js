import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
import vuexExample from './vuexExample';
const store =new Vuex.Store({
    modules:{
        vuexExample
    }
})
export default store;