<template>
  <div class="page">
    <div class="title">
      <Button type='primary' @click="goRouter('/vuerouter/routerlink')">
        router-link的用法
      </Button>
       <Button type='ghost' @click="goRouter('/vuerouter/routerlink')">
        router-view的用法
      </Button>
       <Button type='success' @click="goRouter('/vuerouter/routerlink')">
        $router的用法
      </Button>
       <Button type='error' @click="goRouter('/vuerouter/routerlink')">
        $route的用法
      </Button>
    </div>
    <div class="content">
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
  methods: {
    goRouter(name) {
      this.$router.push(name);
    }
  }
};
</script>
