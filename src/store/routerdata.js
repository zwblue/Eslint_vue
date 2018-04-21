let store={
    namespaced: true,
    state:{
        breadcrumbList:[]
    },
    mutations:{
        resetBreadcrumbList(state){
            state.breadcrumbList=[];
            console.log(1111111,state.breadcrumbList);
        }
    },
    getters:{
        getBreadcrumbList(state){
            return state.breadcrumbList
        }
    },
}
export default store;