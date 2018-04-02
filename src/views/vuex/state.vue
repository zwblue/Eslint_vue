<template>
<div>
    <Alert type="success">this.$store.state.vuexExample.username：<span style="color:red;">{{$store.state.vuexExample.username}}</span></Alert>
    <Alert type="error"> ...mapState(['vuexExample'])：<span class="red">{{vuexExample.username}}</span></Alert>
    <Alert type="error"><span class="blue">import {mapState} from 'vuex'</span></Alert>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {};
    },
    computed: {
        //   username(){
        //       return this.$store.state.vuexExample.username 
        //   }
        //   ,
        ...mapState(['vuexExample'])
    },
    mounted() {
        console.log("this.$store", this.$store.state.username)
    }
};
</script>

<style>

</style>
