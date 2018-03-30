<template>
<div>
    <Card>
        <div class="header">
            <Button type='warning'>
                单个插槽
            </Button>
            <Button type='warning'>
                具名插槽
            </Button>
            <Button type='warning'>
                作用域插槽
            </Button>
        </div>
        <div class="containter">
            <one-solts>
                <!-- <div>将这里面所有的内容都分发过去</div>
                <div>这是单个插槽solt页面</div>
                <!-- <div>这是单个插槽solt页面</div> -->
                <!-- <div class='red'>若没有内容刚显示子组件的slot的内容</div> --> 
            </one-solts>
        </div>
    </Card>
</div>
</template>
<script>
import oneSolts from './one-solts'
export default {
    components:{
        oneSolts
    },  
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        text-align: center;
    }
</style>
