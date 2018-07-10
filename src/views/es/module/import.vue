<template>
<div>
    <div>
        <Button v-show='addIsShow' type='success'>
                add函数
            </Button>
        <Button v-show='fun1IsShow' type='success'>
                fun1函数
            </Button>
        <Button v-show='messageIsText' type='success'>
                {{messageIsText}}
            </Button>
    </div>
</div>
</template>
<script>
import {
    firstName,
    lastName,
    add,
    year
} from "./export"; //js可以省略
// import * as export1 from "./export"; //全部引入过来，用export1.firstName export.add()访问
import fun1 from "./export"; //默认输入   正常输入是import {add} from './export'
export default {
    data() {
        return {
            addIsShow: false,
            fun1IsShow: false,
            messageIsText: ""
        };
    },
    mounted() {
        this.$Message.success(firstName + lastName + "是" + year + "出生的");
        add();
        fun1();
        if (add) {
            this.addIsShow = !this.addIsShow;
            import ("./export").then(val => {
                console.log("./export模块已顺利加载", val);
            }); //可以放在条件里面加载，即不是头部加载
            import ("./export").then(({
                firstName,
                lastName,
                year
            }) => {
                console.log(
                    "./export模块已顺利加载",
                    firstName + lastName + "是" + year + "出生的"
                );
            });
        }
        if (fun1) {
            this.fun1IsShow = !this.fun1IsShow;
        }
        if (firstName && lastName && year) {
            this.messageIsText = firstName + lastName + "是" + year + "出生的";
        }
    }
};
</script>
<style scoped>

</style>
