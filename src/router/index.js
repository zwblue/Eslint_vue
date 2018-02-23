import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import OrgChart from "@/views/orgchart";
import Vuex from "@/views/vuex";
import State from "@/views/vuex/state";
import Getter from "@/views/vuex/getter";
import Vuerouter from "@/views/vuerouter";
import routerLink from "@/views/vuerouter/routerLink";
import routerView from "@/views/vuerouter/routerView";
import Bar from "@/views/vuerouter/routerView/test/Bar";
import Baz from "@/views/vuerouter/routerView/test/Baz";
import router from "@/views/vuerouter/router";
import route from "@/views/vuerouter/route";
import vueIndex from "@/views/vue";
import KeepAlive from "@/views/vue/KeepAlive";
import Animate from "@/views/vue/vueAnimate";
import Es from "@/views/es";
import Home from "@/views/Home";
Vue.use(Router);
export default new Router({
  routes: [{
    path: "/",
    component: Hello,
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
        },{
          path: "animate",
          name: "animate",
          component: Animate,
          meta: {
            rName: "animate"
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
        }
      },
      {
        path: "orgchart",
        name: "orgchart",
        component: OrgChart
      }
    ]
  }]
});