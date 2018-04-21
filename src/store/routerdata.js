let store={
    namespaced: true,
    state:{
        breadcrumbList:[]
    },
    mutations:{
        resetBreadcrumbList(state){
            state.breadcrumbList=[];
        }
    },
    getters:{
        getBreadcrumbList(state){
            return state.breadcrumbList
        }
    },
}
export default store;