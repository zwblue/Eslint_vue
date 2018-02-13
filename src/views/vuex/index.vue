<template>
    <div class="page">
        <div class="title">
          <Row type='flex' justify='center'>
            <Col>
              <Button type='primary' @click="$router.push('/vuex/state')">$state的用法</Button> 
              <Button type='primary' @click="$router.push('/vuex/getter')">$getter的用法</Button> 
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
<style scoped>
.page {
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  padding:10px 0;
  font-weight: bold;
  font-size: 20px;
}
.content {
  flex: 1;
  padding:10px;
  margin:0 20px;
  opacity: 0.9;
}
</style>
