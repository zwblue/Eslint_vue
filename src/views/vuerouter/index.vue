<template>
  <div class="page">
    <div class="title">
      <Button type='primary' @click="goRouter('/vuerouter/routerlink')">
        router-link的用法
      </Button>
      <Button type='ghost' @click="goRouter('/vuerouter/routerview')">
        router-view的用法
      </Button>
      <Button type='success' @click="goRouter('/vuerouter/router')">
        $router的用法
      </Button>
      <Button type='error' @click="goRouter('/vuerouter/route')">
        $route的用法
      </Button>
      <Button type='warning' @click="goRouter('/vuerouter/routerBeforeEach')">
        router.beforeEach路由守卫
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
  watch: {
    $route: function() {
      if (this.$route.name == "vuerouter") {
        this.$Message.success(
          "成功获取到了userId：" + this.$route.params.userId
        );
      }
    }
  },
  mounted() {},
  methods: {
    goRouter(name) {
      this.$router.push(name);
    }
  }
};
</script>
