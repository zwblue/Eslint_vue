// vue-router的用法
const Vuerouter = r => require.ensure([], () => r(require('@/views/vuerouter')), 'vueRouter相关的用法')
const routerKns = r => require.ensure([], () => r(require('@/views/vuerouter/routerKns')), 'router相关的用法')
const routerLink = r => require.ensure([], () => r(require('@/views/vuerouter/routerLink')), 'routerLink相关的用法')
const routerView = r => require.ensure([], () => r(require('@/views/vuerouter/routerView')), 'routerView相关的用法')
const Bar = r => require.ensure([], () => r(require('@/views/vuerouter/routerView/test/Bar')), 'routerView相关的用法')
const Baz = r => require.ensure([], () => r(require('@/views/vuerouter/routerView/test/Baz')), 'routerView相关的用法')
const router = r => require.ensure([], () => r(require('@/views/vuerouter/router')), '$router相关的知识')
const route = r => require.ensure([], () => r(require('@/views/vuerouter/route')), '$route相关的知识')
let routes={
    path: "vuerouter",
    name: "vuerouter",
    component: Vuerouter,
    meta: {
      rName: "vuerouter"
    },
    redirect:'vuerouter/routerKns',
    children: [
      {
        path: "routerKns",
        name: "routerKns",
        component: routerKns,
        meta: {
          rName: "routerKns"
        }
      },{
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
  }
  export default{ routes };
  