<template>
<div>
    <Card>
        <div>
            <Button type='warning' @click="changeActiveComponent">切换当前渲染的组件</Button>
        </div>
        <div :is='currentView[index]' class="active-view"></div>
    </Card>
</div>
</template>
<script>
import components1 from './component1'
import components2 from './component2'
import components3 from './component3'
export default {
    components: {
        components1,
        components2,
        components3
    },
    data() {
        return {
            index: 0,
            currentView: ['components1', 'components2', 'components3']
        }
    },
    methods: {
        changeActiveComponent() {
            this.index = Math.floor(Math.random() * 3);
            console.log(this.index)
        }
    }
}
</script>
<style lang="scss" scoped>
    .active-view{
        margin-top:30px;
    }
</style>


