<template>
    <Card class="black">
        <Alert type="success">1、将当前的路由换成home：
            <span class="red">router-link to='home'</span> ====>
            <router-link to='home'>Home</router-link>
        </Alert>
        <Alert type="success">2、动态的路由：
            <span class="red">roter-link :to ='"home"'：</span> ====>
            <router-link v-bind:to="path">Home</router-link>
            </span>
        </Alert>
        <Alert type="success">3、命名的路由：
            <span class="red">router-link to='{name: 'user',params:{userId:123}}'</span> ====>
            <router-link :to="{name: 'vuerouter',params:{userId:123}}">Home</router-link>
        </Alert>
        <Alert type="success">4、带查询参数的路由：
            <span class="red">router-link to='{path: 'register',query:{plan:'3'}}'</span> ===>
            <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
        </Alert>
        <Alert type="success">5、append的用法：
            <span style="color:red;">router-link :to="{path: 'append'}" append</span> ===>
            <router-link :to="{ path: 'append'}" append>append</router-link>
        </Alert>
        <Alert type="success">6、tag的用法：
            <span class="red">router-link to='{path: 'register',query:{plan:'3'}}'</span> ===>
            <router-link :to="{ path: 'register', query: { plan: 'private' }}" append tag='Button' type='ghost'>Register</router-link>
        </Alert>
    </Card>
</template>
<script>
export default {
  data() {
    return {
      path: "home"
    };
  }
};
</script>
<style scoped>

</style>
