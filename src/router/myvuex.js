// vuex相关知识
const Vuex = r => require.ensure([], () => r(require('@/views/vuex')), 'vuex相关的用法')
const State = r => require.ensure([], () => r(require('@/views/vuex/state')), 'store中state的用法')
const Getter = r => require.ensure([], () => r(require('@/views/vuex/getter')), 'store中getter的用法')
const Mutation = r => require.ensure([], () => r(require('@/views/vuex/mutation')), 'store中mutation的用法')
const Action = r => require.ensure([], () => r(require('@/views/vuex/action')), 'store中Action的用法')
const routes={
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
      },
      {
        path: "mutation",
        name: "mutation",
        component: Mutation,
        meta: {
          rName: "Mutation"
        },
        children: []
      },
      {
        path: "action",
        name: "action",
        component: Action,
        meta: {
          rName: "Action"
        },
        children: []
      }
    ]
  }
  export default { routes };