<template>
    <div>
        <div>VueRouter</div>
        <div>
          <Button @click="goRouter('/vuerouter/routerlink')">
            router-link
          </Button>
          <router-view/>  
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {};
  },
  mounted() {},
  methods:{
    goRouter(name){
      this.$router.push(name)
    }
  }
};
</script>
