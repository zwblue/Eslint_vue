<template>
  <div>
      <div>
          <h2 class="center">
              {{title}}
          </h2>
      </div>
      <div>
          <my-home :mytitle='title' :zyname="name"></my-home>
      </div>
  </div>
</template>
<script>
import myHome from './myhome'
export default {
    components:{
        myHome
    },
  data(){
      return{
          title:'我的主页',
          name:'张阳'
      }
  }
}
</script>
<style scoped>

</style>
