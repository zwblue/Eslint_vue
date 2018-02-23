<template>
    <div style='color:red;'>
        props父子传递：
        <div class="blue">{{mytitle}}</div>
        <div class="blue">{{zyname}}</div>
    </div>
</template>
<script>
export default {
  props: ["mytitle", "zyname"]
};
</script>
<style scoped>

</style>
