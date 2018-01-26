<template>
    <div>
        <div class="page">
            <Row :gutter='36'>
                <Col span="2" v-for='list in  buttonList' :key='list.buttonName'>
                    <Button type='primary' @click="$router.push(list.buttonName)">{{list.buttonName}}</Button>
                </Col>
            </Row> 
            <div style='height:100%;margin-top:10px;'>
                <router-view/> 
            </div>
        </div>
    </div>
</template>
<script>
var $ = require('jquery')
export default {
  data () {
    return {
        buttonList:[{buttonName:'keepAlive'}]
    }
  },
  mounted () {}
}
</script>
