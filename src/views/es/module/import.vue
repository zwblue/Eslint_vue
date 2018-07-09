<template>
    <div>

    </div>
</template>
<script>
import {
    firstName,
    lastName,
    add,
    year
} from './export'//js可以省略
// import * as export1 from "./export"; //全部引入过来，用export1.firstName export.add()访问

export default {
  data() {
    return {};
  },
  mounted() {
    this.$Message.success(firstName + lastName + "是" + year + "出生的");
    add();
  }
};
</script>
<style scoped>
</style>
