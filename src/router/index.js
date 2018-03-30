import Vue from "vue";
import Router from "vue-router";
// 页面布局
const leftSider = r => require.ensure([], () => r(require('@/components/leftSider')), '左边导航')
const Home = r => require.ensure([], () => r(require('@/views/Home')), '我的个人主页')
// 插件的用法
const OrgChart = r => require.ensure([], () => r(require('@/views/orgchart')), '组织树插件的引入')
// vuex的用法
const Vuex = r => require.ensure([], () => r(require('@/views/vuex')), 'vuex相关的用法')
const State = r => require.ensure([], () => r(require('@/views/vuex/state')), 'store中state的用法')
const Getter = r => require.ensure([], () => r(require('@/views/vuex/getter')), 'store中getter的用法')
// vue-router的用法
const Vuerouter = r => require.ensure([], () => r(require('@/views/vuerouter')), 'vueRouter相关的用法')
const routerLink = r => require.ensure([], () => r(require('@/views/vuerouter/routerLink')), 'routerLink相关的用法')
const routerView = r => require.ensure([], () => r(require('@/views/vuerouter/routerView')), 'routerView相关的用法')
const Bar = r => require.ensure([], () => r(require('@/views/vuerouter/routerView/test/Bar')), 'routerView相关的用法')
const Baz = r => require.ensure([], () => r(require('@/views/vuerouter/routerView/test/Baz')), 'routerView相关的用法')
const router = r => require.ensure([], () => r(require('@/views/vuerouter/router')), '$router相关的知识')
const route = r => require.ensure([], () => r(require('@/views/vuerouter/route')), '$route相关的知识')
// vue的相关知识
const vueIndex = r => require.ensure([], () => r(require('@/views/vue')), 'vue相关的知识')
const vueIs = r => require.ensure([], () => r(require('@/views/vue/vueIs')), 'vue中is的用法')
const KeepAlive = r => require.ensure([], () => r(require('@/views/vue/KeepAlive')), 'vue中KeepAlive的用法')
const Animate = r => require.ensure([], () => r(require('@/views/vue/vueAnimate')), 'vue中vueAnimate的用法')
// ES相关知识
const Es = r => require.ensure([], () => r(require('@/views/es')), 'es相关的知识')
const Es6 = r => require.ensure([], () => r(require('@/views/es/es6')), 'es6相关的知识')
Vue.use(Router);
export default new Router({
  routes: [{
    path: "/",
    component: leftSider,
    children: [{
        path: "",
        name: "Home",
        component: Home,
        meta: {
          rName: "我的主页"
        }
      },
      {
        path: "vuex",
        name: "vuex",
        component: Vuex,
        meta: {
          rName: "Vuex"
        },
        children: [{
            path: "state",
            name: "state",
            component: State,
            meta: {
              rName: "State"
            },
            children: []
          },
          {
            path: "getter",
            name: "getter",
            component: Getter,
            meta: {
              rName: "Getter"
            },
            children: []
          }
        ]
      },
      {
        path: "vueIndex",
        name: "vueIndex",
        component: vueIndex,
        meta: {
          rName: "vueIndex"
        },
        children: [{
          path: "keepAlive",
          name: "keepAlive",
          component: KeepAlive,
          meta: {
            rName: "keepalive"
          }
        }, {
          path: "animate",
          name: "animate",
          component: Animate,
          meta: {
            rName: "animate"
          }
        }, {
          path: "vueis",
          name: "vueis",
          component: vueIs,
          meta: {
            rName: "vueIs"
          }
        }]
      },
      {
        path: "vuerouter",
        name: "vuerouter",
        component: Vuerouter,
        meta: {
          rName: "vuerouter"
        },
        children: [{
            path: "routerlink",
            name: "routerlink",
            component: routerLink,
            meta: {
              rName: "routerLink"
            }
          },
          {
            path: "routerview",
            name: "routerview",
            component: routerView,
            meta: {
              rName: "routerView"
            },
            children: [{
              path: "routerviewchild",
              components: {
                a: Bar,
                b: Baz
              },
              meta: {
                rName: "routerviewchild"
              },
            }]
          },
          {
            path: "router",
            name: "router",
            component: router,
            meta: {
              rName: "router"
            }
          }, {
            path: "route",
            name: "route",
            component: route,
            meta: {
              rName: "route"
            }
          }
        ]
      },
      {
        path: "es",
        name: "es",
        component: Es,
        meta: {
          rName: "es"
        },
        children: [{
          path: "es6",
          name: "es6",
          component: Es6,
          meta: {
            rName: "es6"
          },
        }]
      },
      {
        path: "orgchart",
        name: "orgchart",
        component: OrgChart
      }
    ]
  }]
});