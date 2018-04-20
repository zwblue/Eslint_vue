// ES相关知识
const Es = r => require.ensure([], () => r(require('@/views/es')), 'es相关的知识')
const Es6 = r => require.ensure([], () => r(require('@/views/es/es6')), 'es6相关的知识')
let routes={
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
  }
  export default { routes };