<template>
    <div>
        <div class="page">
            <div class="title">
                <Button type='primary' @click="goRouter('/es/es6')">
                    ECMAScript 6
                </Button>
            </div>
            <div class="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    goRouter(name) {
      this.$router.push(name);
    }
  },
  mounted() {}
};
</script>
