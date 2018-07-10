import http from 'axios';
import { Notice } from 'iview'
let store = {
    namespaced: true,
    state: {
        breadcrumbList: [],
        userId: ''
    },
    mutations: {
        resetBreadcrumbList(state) {
            state.breadcrumbList = [];
        }
    },
    getters: {
        getBreadcrumbList(state) {
            return state.breadcrumbList
        }
    },
    actions: {
        getUserInfo(context) {
            http({
                method: 'post',
                url: '/getUser',
                data: context.state.userId,
                success: (data) => {
                    console.log(data);
                }, error: (err) => {
                    Notice.error({
                        title: '接口故障："/getUser"',
                        content: err
                    })
                }
            })
        }
    }
}
export default store;