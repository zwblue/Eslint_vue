<template>
<div>
    <Alert type="success">...mapMutations({changeUsername:'vuexExample/CHNANGE_USERNAME'})：<span style="color:red;">{{username}}</span></Alert>
    <Alert type="success"> this.changeUsername('ls');：<span style="color:red;">{{username}}</span></Alert>
    <Alert type="error">this.$store.commit('vuexExample/CHNANGE_USERNAME','王五')：<span style="color:red;">{{doneDate}}</span></Alert>
    <Alert type="error">import {mapGetters,mapMutations} from 'vuex'</Alert>
</div>
</template>
<script>
import {
    mapGetters,
    mapMutations
} from 'vuex';
export default {
    data() {
        return {};
    },
    computed: {
        username() {
            return this.$store.getters['vuexExample/doneDate'];
        },
        ...mapGetters({
            doneDate: 'vuexExample/doneDate'
        }),
    },
    mounted() {
        this.changeUsername('ls');
        this.$store.commit('vuexExample/CHNANGE_USERNAME', '王五')
    },
    methods: {
        ...mapMutations({
            changeUsername: 'vuexExample/CHNANGE_USERNAME'
        })
    }
};
</script>

<style>

</style>
