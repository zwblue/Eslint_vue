import Vue from 'vue';
let store={
    namespaced: true,
    state:{
        username:'zw'
    },
    //用commit来掉用
    //  this.$store.commit('vueExample/doneDate');
    mutations:{
        CHNANGE_USERNAME(state,val){
            state.username=val
        }
    },
    // this.$store.getters['vuexExample/doneDate']
    getters:{
        doneDate(state){
            return "名字："+state.username
        }
    },
    // this.$store.dispatch('setLogin', true);
    // true是通过setLogin来异步改变mutations中的某个方法
    actions:{
        timerChangeName({commit},data){
            setTimeout(() => {
                commit('CHNANGE_USERNAME',data.name)
            }, data.time);
        }
    }
}
export default store;