
// ES相关知识
// const Es = r => require.ensure([], () => r(require('@/views/es')), 'es相关的知识')
// const Es6 = r => require.ensure([], () => r(require('@/views/es/es6')), 'es6相关的知识')
const es = resolve => require(['@/views/es'], resolve)//es相关的知识
const es6 = resolve => require(['@/views/es/es6'], resolve)//es6相关的知识
const module = resolve => require(['@/views/es/module/import.vue'], resolve)
let routes = {
  path: "es",
  name: "es",
  component: es,
  meta: {
    rName: "es"
  },
  children: [{
    path: "es6",
    name: "es6",
    component: es6,
    meta: {
      rName: "es6"
    },
  },
  {
    path: "module",
    name: "module",
    component: module,
    meta: {
      rName: "module"
    },
  }]
}
export default { routes };