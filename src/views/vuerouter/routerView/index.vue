<template>
    <Card class="black">
        <Alert type="success">1、this.$router.push('/home/vuerouter/routerlink')</Alert>
        <Alert type="success">2、this.$router.push的用法：
            <span class="red">this.$router.push({path:'/user/:id',component:User})</span>
        </Alert>
        <Alert type="success">3、用来监听路由的变化：
            <span class="red"> watch:{$route:function(){}}</span>
        </Alert>
        <Alert type="success">3、返回之前的路径：
            <span class="red"> this.$router.go(-1)===this.router.back()</span>
        </Alert>
        <Alert type="error">
            <span style="color:red;">在用this.$router.push()时或都router-link to=''时一定要用绝对路径：</span>
        </Alert>
        <Alert type="error" class="blue">
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
        </Alert>
        <h1 class="center">router-link的用法</h1>
        <h2 class="center">

            <h3 class="red center">

            </h3>
        </h2>
        <h3 style='margin-left:450px;' class="blue lf">

        </h3>
    </Card>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>

</style>
