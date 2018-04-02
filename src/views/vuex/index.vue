<template>
  <div class="page">
    <div class="title">
      <Row type='flex' justify='center'>
        <Col>
        <Button type='success' @click="$router.push('/vuex/state')">$state的用法</Button>
        <Button type='error' @click="$router.push('/vuex/getter')">$getter的用法</Button>
        <Button type='primary' @click="$router.push('/vuex/mutation')">$mutation的用法</Button>
        <Button type='warning' @click="$router.push('/vuex/action')">$actions的用法</Button>
        </Col>
      </Row>
    </div>
    <Card class="content">
      <router-view></router-view>
    </card>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["username"])
  },
  mounted() {
    console.log("mapState.username", this.username);
  }
};
</script>
<style>

</style>
