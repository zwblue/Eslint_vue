<template>
    <div>
        <Alert type="success">this.$store.getters.doneDate：<span style="color:red;">{{$store.getters.doneDate}}</span></Alert>
        <Alert type="error">...mapGetters(['doneDate'])：<span style="color:red;">{{doneDate}}</span></Alert>
        <Alert type="error">import {mapGetters} from 'vuex'</Alert>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {};
  },
  computed:{
      ...mapGetters(['doneDate'])
  },
  mounted(){
  }
};
</script>

<style>

</style>
