import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
const store =new Vuex.Store({
    state:{
        username:'zw'
    },
    mutations:{
        CHNANGE_USERNAME(state,val){
            state.username=val
        }
    },
    actions:{

    }
})
export default store;