// vue的相关知识
const vueIndex = r => require.ensure([], () => r(require('@/views/vue')), 'vue相关的知识')
const vueIs = r => require.ensure([], () => r(require('@/views/vue/vueIs')), 'vue中is的用法')
const KeepAlive = r => require.ensure([], () => r(require('@/views/vue/KeepAlive')), 'vue中KeepAlive的用法')
const Animate = r => require.ensure([], () => r(require('@/views/vue/vueAnimate')), 'vue中vueAnimate的用法')
const solts = r => require.ensure([], () => r(require('@/views/vue/vue-solt')), 'vue中vueAnimate的用法')
 // vue相关的子路由与子组件
let routes=
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
  }, {
    path: "animate",
    name: "animate",
    component: Animate,
    meta: {
      rName: "animate"
    }
  }, {
    path: "vueis",
    name: "vueis",
    component: vueIs,
    meta: {
      rName: "vueIs"
    }
  },{
    path: "solts",
    name: "solts",
    component: solts,
    meta: {
      rName: "solts"
    }
  }]
}
export default { routes };
