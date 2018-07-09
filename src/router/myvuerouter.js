// vue-router的用法
const Vuerouter = resolve => require(['@/views/vuerouter'], resolve)//'vueRouter相关的用法')
const routerKns = resolve => require(['@/views/vuerouter/routerKns'], resolve)// 'router相关的用法')
const routerLink = resolve => require(['@/views/vuerouter/routerLink'], resolve)// 'routerLink相关的用法')
const routerView = resolve => require(['@/views/vuerouter/routerView'], resolve)//'routerView相关的用法')
const routerBeforeEach = resolve => require(['@/views/vuerouter/routerBeforeEach'], resolve)// '路由守卫相关的用法')
const Bar = resolve => require(['@/views/vuerouter/routerView/test/Bar'], resolve)// 'routerView相关的用法')
const Baz = resolve => require(['@/views/vuerouter/routerView/test/Baz'], resolve)// 'routerView相关的用法')
const router = resolve => require(['@/views/vuerouter/router'], resolve)// '$router相关的知识')
const route = resolve => require(['@/views/vuerouter/route'], resolve)// '$route相关的知识')
let routes = {
  path: "vuerouter",
  name: "vuerouter",
  component: Vuerouter,
  meta: {
    rName: "vuerouter"
  },
  redirect: 'vuerouter/routerKns',
  children: [
    {
      path: "routerKns",
      name: "routerKns",
      component: routerKns,
      meta: {
        rName: "routerKns"
      }
    }, {
      path: "routerlink",
      name: "routerlink",
      component: routerLink,
      meta: {
        rName: "routerLink"
      }
    },
    {
      path: "routerBeforeEach",
      name: "routerBeforeEach",
      component: routerBeforeEach,
      meta: {
        rName: "routerBeforeEach"
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
}
export default { routes };
