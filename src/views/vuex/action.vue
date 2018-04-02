<template>
<div>
    <div class="center" style='margin-bottom:10px;'>
        <Button type='ghost' @click="editUsernameModel=!editUsernameModel">用action多少秒后修改store中名字</Button>
    </div>
    <Alert type="success"> ...mapActions({timerChangeName: 'vuexExample/timerChangeName'})==> this.timerChangeName({name:'肖云',time:2000});：<span style="color:red;">{{username}}</span></Alert>
    <Alert type="success"> this.$store.dispatch('vuexExample/timerChangeName',{name:this.newUsername,time:this.timeLong});：<span style="color:red;">{{username}}</span></Alert>
    <Alert type="error">import {mapGetters,mapMutations} from 'vuex'</Alert>
    <Alert type="warning">多个入参的action的传入</Alert>
    <Modal v-model="editUsernameModel" title="用action多少秒后修改store中userName" @on-ok='editUsername' @on-cancel='cancel'>
        <Input v-model="newUsername" placeholder="请输入用户名" style="width: 300px"></Input>
        <Input v-model="timeLong" placeholder="请输入多少毫秒后执行修改名字" style="width: 300px"></Input>
    </Modal>
</div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
export default {
    data() {
        return {
            editUsernameModel: false,
            newUsername: this.username,
            timeLong: ''
        };
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
        this.timerChangeName({
            name: '肖云',
            time: 2000
        });
    },
    methods: {
        ...mapActions({
            timerChangeName: 'vuexExample/timerChangeName'
        }),
        editUsername() {
            this.editUsernameModel = false;
            this.$Message.success('将在' + this.timeLong / 1000 + '秒后改变当前的用户名！')
            this.$store.dispatch('vuexExample/timerChangeName', {
                name: this.newUsername,
                time: this.timeLong
            })
        },
        cancel() {
            this.$Message.warning('你取消了该操作！')
        }
    }
};
</script>

<style>

</style>
