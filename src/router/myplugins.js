
// ES相关知识
// const elementTree = r => require.ensure([], () => r(require('@/views/plugins/element-tree')), 'element树形组件')
let routes = {
  path: "elementTree",
  name: "elementTree",
  component: resolve => require(['@/views/plugins/element-tree'], resolve),
  meta: {
    rName: "elementTree"
  }
}
export default { routes };