import Vue from "vue";
import Router from "vue-router";
import store from '../store/index'
import myes6 from './myes6'
import myvue from './myvue'
import myvuerouter from './myvuerouter'
import myvuex from './myvuex'
import myplugins from './myplugins'
import { resolve } from "url";
// 在路由中用store中的数据
console.log(11111111, store.state.vuexExample.username);
// 页面布局

// 非懒加载方式
//import Orgchart from '@/views/orgchart'

// 插件的用法
// const OrgChart = r => require.ensure([], () => r(require('@/views/orgchart')), '组织树插件的引入')

let routerArray = [{
  path: "",
  name: "Home",
  component: resolve => require(['@/views/Home'], resolve),//我的个人主页    懒加载方式
  meta: {
    rName: "我的主页"
  }
},
{
  path: "orgchart",
  name: "orgchart",
  component:  resolve =>require(['@/views/orgchart'], resolve)//组织树插件的引入
}];

// 将各个路由中的拼接成一个整的路由
routerArray = routerArray.concat(myes6.routes, myvue.routes, myvuerouter.routes, myvuex.routes, myplugins.routes);
Vue.use(Router);
const router1 = new Router({
  routes: [{
    path: "/",
    component: resolve => require(['@/components/leftSider'], resolve),//'左边导航'
    children: routerArray
  }]
});
export default router1;
router1.beforeEach((to, from, next) => {
  store.commit('routerdata/resetBreadcrumbList')
  for (let val of to.matched) {
    if ('rName' in val.meta) {
      store.state.routerdata.breadcrumbList.push(val.meta.rName)
    }
  }
  next()
})
