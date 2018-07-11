<style scoped lang='scss'>
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
  float: right;
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

.box-content {
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

.mycontent {
  position: relative;
  /* padding: 10px; */
  box-sizing: border-box;
  min-height: 280px;
  flex: 1;
  margin: 10px;
  margin-top: 0;
  border-radius: 5px;
  background: #fff;
  overflow-y: auto;
}
</style>
<style>
.myhome .ivu-layout-header {
  padding: 0;
  padding-left: 35px;
}
</style>
<template>
<div class="layout myhome">
  <Layout>
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">
          <Button type='ghost' style='color:#fff' @click="goRouter('')">
              <Icon type="home"></Icon> 我的主页</Button>
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
          <Menu :active-name="activeName" theme="dark" @on-select='selectMenu' width="auto" ref='menu'  :open-names="openSubmenu">
            <Submenu :name='menu.title' v-for='menu in menus' :key='menu.title'>
<template slot="title">
<Icon type="ios-navigate">
</Icon>
{{menu.title}}
</template>
                            <MenuItem :name="list.value" v-for="list in menu.children" :key='list.value'>{{list.title}}</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout class="box-content">
                    <Breadcrumb style="margin:15px 15px">
                        <BreadcrumbItem v-for='(item,index) in storeBreadcrumb' :key='index'>{{item}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content class="mycontent">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "",
      openSubmenu: [],
      menus: null
    };
  },
  created() {
    this.menus = require("./menu.json").menus;
  },
  computed: {
    // 通过路由改变菜单的值
    storeBreadcrumb() {
      return this.$store.state.routerdata.breadcrumbList;
    }
  },
  mounted() {
    this.openActiveMenu();
  },
  methods: {
    // 保存刷新前的路由 并打开当前的菜单并高亮
    openActiveMenu() {
      if (this.$route.matched) {
        for (let val of this.$route.matched) {
          for (let menu of this.menus) {
            menu.children.forEach((val1) => {
              if (val1.value === val.name) {
                console.log(val1.value)
                this.activeName = val1.value;
                this.$nextTick(() => {
                  this.openSubmenu.push(menu.title); //只增加这个是不能打开当前的菜单的，需要用下面这个
                  this.$refs.menu.updateOpened();
                })
                console.log(111, this.openSubmenu);
              }
            })

          }
        }
      }
    },
    // 跳转的路由
    goRouter(name) {
      console.log("跳转的路由:", name);
      this.$router.push("/" + name);
    },
    //menu自带的选择菜单时的方法
    selectMenu(name) {
      console.log("当前展开的菜单为：", name);
      this.goRouter(name);
    }
  }
};
</script>
