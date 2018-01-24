<template>
    <div>
        <h1 class="center">router-link的用法</h1>
        <h2 class="center">
            在用this.$router.push()时或都router-link to=''时一定要用绝对路径
            <h3 class="red center">
                this.$router.push('/home/vuerouter/routerlink')
            </h3>             
        </h2>
            <h3 style='margin-left:450px;' class="blue lf">
                <pre>
                    {
                        path:'/',
                        name:'index',
                        children:[{
                            path:""===>嵌套在当前父路由中的子路由
                            name:'vue'
                        },{
                            path:"home",
                            name:'home',
                            children:[{
                                path:'vuerouter',
                                name:'vuerouter',
                                chileren:[{
                                    path:'routerlink',===>/home/vuerouter/routerlink
                                    name:'routerlink'
                                }]
                            }]
                        }
                        ]
                    }
                </pre>
            </h3>    
    </div>
</template>
<script>
export default {
  data(){
      return {

      }
  }
}
</script>
<style scoped>

</style>
