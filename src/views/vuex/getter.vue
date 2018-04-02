<template>
    <div>
        <Alert type="success">this.$store.getters['vuexExample/doneDate']：<span style="color:red;">{{username}}</span></Alert>
        <Alert type="error">...mapGetters({doneDate:'vuexExample/doneDate'})：<span style="color:red;">{{doneDate}}</span></Alert>
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
      username(){
          return this.$store.getters['vuexExample/doneDate'];
      }
      ,
      ...mapGetters({doneDate:'vuexExample/doneDate'})
  },
  mounted(){
      console.log(this.$store)
  }
};
</script>

<style>

</style>
