<template>
<div>
  <Row >
   1、 router1.beforeEach的用法
    <pre class="red">
    router1.beforeEach((to, from, next) => {
        store.commit('routerdata/resetBreadcrumbList')
        for (let val of to.matched) {
          if ('rName' in val.meta) {
            store.state.routerdata.breadcrumbList.push(val.meta.rName)
          }
        }
        next()
     })
    </pre>
  </Row>
  <Row>
     2、 router中用store中的东西
    <pre class="blue">
    import store from '../store/index'
    </pre>
  </Row>
</div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>

</style>
