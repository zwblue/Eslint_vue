<template>
    <div>
        <div class="page">
            <div class="title">
                <Button type='primary' @click="goRouter('/vueIndex/keepAlive')">
                    keepAlive的用法
                </Button>
                <Button type='ghost' @click="goRouter('/vueIndex/animate')">
                    vue动画的案例
                </Button>
                 <Button type='error' @click="goRouter('/vueIndex/vueis')">
                    vue渲染不同的组件的方法
                </Button>
                 <Button type='warning' @click="goRouter('/vueIndex/vueis')">
                    vue 插槽solt的用法
                </Button>
            </div>
            <div class="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
var $ = require("jquery");
export default {
  data() {
    return {
      buttonList: [{ buttonName: "keepAlive" }]
    };
  },
  methods: {
    goRouter(name) {
      console.log(222, name);
      this.$router.push(name);
    }
  },
  mounted() {}
};
</script>
