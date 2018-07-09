// vuex相关知识
const Vuex = resolve => require(['@/views/vuex'], resolve) //'vuex相关的用法')
const State = resolve => require(['@/views/vuex/state'], resolve)// 'store中state的用法')
const Getter = resolve => require(['@/views/vuex/getter'], resolve)//'store中getter的用法')
const Mutation = resolve => require(['@/views/vuex/mutation'], resolve)// 'store中mutation的用法')
const Action = resolve => require(['@/views/vuex/action'], resolve)// 'store中Action的用法')
const routes = {
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