<template>
    <div>
        <Alert type="success">A success prompt</Alert>
        <Alert type="error">A error prompt</Alert>
        <Alert type="error">An error prompt</Alert>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted(){
      console.log("this.$store",this.$store.state.username)
  }
};
</script>

<style>

</style>
