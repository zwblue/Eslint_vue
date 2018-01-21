<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  color: #d7dde4;
  line-height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.left-sider {
  z-index: 9999;
  position: absolute;
  width: 200px;
  top: 64px;
  border-top: 1px solid #d7dde4;
  bottom: 0;
}
.content {
  background: #f5f7f9;
  border-radius: 5px;
  position: absolute;
  left: 200px;
  top: 64px;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}
</style>

<style>

</style>

<template>
    <div class="layout myhome">

        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                      <Button type='ghost' style='color:#fff'><Icon type="home"></Icon> 我的主页</Button>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                       
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                         <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuGroup title="使用">
                                <MenuItem name="3-1">新增和启动</MenuItem>
                                <MenuItem name="3-2">活跃分析</MenuItem>
                                <MenuItem name="3-3">时段分析</MenuItem>
                            </MenuGroup>
                            <MenuGroup title="留存">
                                <MenuItem name="3-4">用户留存</MenuItem>
                                <MenuItem name="3-5">流失用户</MenuItem>
                            </MenuGroup>
                        </Submenu>
                    </div>
                </Menu>
            </Header>
            <Layout class="layContent">
                <Sider hide-trigger class="left-sider">
                    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout class="content">
                    <Breadcrumb style="margin:15px 15px" >
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '10px', minHeight: '280px',flex:'1', margin:'10px',borderRadius:'5px',background: '#fff', overflowY:'auto'}">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {};
</script>
