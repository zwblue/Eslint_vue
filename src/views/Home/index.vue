<template>
<div>
    <div>
        <h2 class="center">
            {{title}}
        </h2>
    </div>
    <div>
        <my-home :mytitle='title' :zyname="name"></my-home>
    </div>
    <div>数组算法</div>
</div>
</template>
<script>
import myHome from './myhome'
export default {
    components: {
        myHome
    },
    data() {
        return {
            title: '我的主页',
            name: 'zw',
            allList: [{
                    name: '张三',
                    num: [, 3, 4, , 5],
                    sum: 0,
                },
                {
                    name: '李四',
                    num: [1, , 4, , 5],
                    sum: 0,
                },
                {
                    name: '五王',
                    num: [, , 1, , 3],
                    sum: 0,
                },
                {
                    name: '小六',
                    num: [, 2, 4, , 3],
                    sum: 0,
                },
                {
                    name: '肖七',
                    num: [, 3, 1, 1, 1],
                    sum: 0,
                }
            ],

        }
    },
    mounted(){
        this.sumArray();
    },
    methods: {
        sumArray() {
            console.log(this.allList.length)
            for (let i = 0;i < this.allList.length; i++ ) {
                console.log(this.allList[i].num);
                for (let j = 0 ;j < this.allList[i].num.length; j++ ) {
                    if (this.allList[i].num[j]) {
                        console.log(this.allList[i].num[j])
                        this.allList[i].sum+=this.allList[i].num[j];
                    }
                }
            }
            console.dir(this.allList)
        }
    }
}
</script>
<style scoped>

</style>
