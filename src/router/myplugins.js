// ES相关知识
const elementTree = r => require.ensure([], () => r(require('@/views/plugins/element-tree')), 'element树形组件')
let routes={
    path: "elementTree",
    name: "elementTree",
    component: elementTree,
    meta: {
      rName: "elementTree"
    }
  }
  export default { routes };