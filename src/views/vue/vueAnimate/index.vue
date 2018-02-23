<template>
    <div>
        <Card>
            <div class="center">
                <Button type='success'>
                    挂载
                </Button>
                <Button type='error'>
                    移除
                </Button>
                <Button type='primary' @click="changeStatus(true)">
                    显示
                </Button>
                <Button type='ghost' @click="changeStatus(false)">
                    隐藏
                </Button>
            </div>
            <div class="center">
                <transition name="fade">
                    <div class="animate-box" v-if='ifShow'>
                    </div>
                </transition>
            </div>
        </Card>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ifShow: true
    };
  },
  methods: {
    changeStatus(status) {
      this.ifShow = status;
    }
  }
};
</script>

<style scoped>

.fade-leave-active {
  transition: all .8s ease;
}
.fade-enter-active{
  transition: all .5s ease;
}
/* 刚进来与离开后时的状态 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.animate-box {
  display: inline-block;
  margin: 20px;
  margin-top: 40px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: #88f;
}
</style>
