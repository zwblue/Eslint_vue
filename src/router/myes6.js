
// ES相关知识
// const Es = r => require.ensure([], () => r(require('@/views/es')), 'es相关的知识')
// const Es6 = r => require.ensure([], () => r(require('@/views/es/es6')), 'es6相关的知识')
let routes = {
  path: "es",
  name: "es",
  component: resolve => require(['@/views/es'], resolve),//es相关的知识
  meta: {
    rName: "es"
  },
  children: [{
    path: "es6",
    name: "es6",
    component: resolve => require(['@/views/es/es6'], resolve),//es6相关的知识
    meta: {
      rName: "es6"
    },
  }]
}
export default { routes };