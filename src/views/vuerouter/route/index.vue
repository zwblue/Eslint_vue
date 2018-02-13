<template>
    <Card class="black">
        <Alert type="success">1、将当前的路由换成home：
            <span class="red"> router.push('home')=== router.push({ path: 'home' }) </span> ====>
            <Button type='ghost' @click="$router.push('home')">home</Button>
        </Alert>
        <Alert type="success">2、动态的路由：
            <span class="red">roter-link :to ='"home"'：</span> ====>
            <router-link v-bind:to="path">Home</router-link>
            </span>
        </Alert>
        <Alert type="success">3、命名的路由,可在vuerouter中获取userId：
            <span class="red"> router.push({ name: 'user', params: { userId: 123 }}) </span> ====>
            <Button type='primary' @click="$router.push({ name: 'vuerouter', params: { userId: 123 }})">vuerouter</Button>
        </Alert>
        <Alert type="success">4、带查询参数的路由：
            <span class="red">router.push({ path: 'register', query: { plan: 'private' }})</span> ===>
            <Button type='success' @click="$router.push({ path: 'register', query: { plan: 'private' }})">register</Button>
        </Alert>
        <Alert type="success">5、user/Id与prams的区别： router.push({ name: 'user', params: { userId }}) //->/user/123 router.push({ path: `/user/${userId}` }) // -> /user/123此时路由要做相应的改变，path:"user/:userId" router.push({ path: '/user', params: { userId }}) // -> /user 此时parmas失效
            <Button type='error' @click="$router.push({ name: 'vuerouter', params: { userId: 3 }})">register</Button>
            <Button type='error' @click="$router.push({ path: 'vuerouter/3'})">register</Button>
        </Alert>
        <Alert type="success">6、router.replace(location, onComplete?, onAbort?)的用法，能改变路由中的参数并且不保存在histroy中：
            <span class="red">router.replace(location, onComplete?, onAbort?)的用法</span> ===>
            <Button type='ghost' @click="$router.replace('/vuerouter',function(){$route.params.userId=333})">register</Button>
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
