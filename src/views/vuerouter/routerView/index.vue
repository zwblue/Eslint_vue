<template>
    <Card class="black">
        BAR:
        <router-view class="view one" name="a"></router-view>
        BRZ:
        <router-view class="view one" name="b"></router-view>
        <Alert type="success">1、name的用法，两个路由视口各自渲染各自的组件：
            <span class="red">router-view class='view one' name='a'</span> ====>
            <router-link to='routerviewchild' append>child</router-link>
        </Alert>
        <Alert type="success">2、name的用法，一个路由地址渲染两个不同的组件：
            <span class="red">router-view class='view two' name='b'</span> ====>
            <router-link to='routerviewchild' append>routerviewchild</router-link>
        </Alert>
        <Alert type="success">3、嵌套路由的设计图：
            <pre>
                 /settings/emails                                       /settings/profile
            +-----------------------------------+                  +------------------------------+
            | UserSettings                      |                  | UserSettings                 |
            | +-----+-------------------------+ |                  | +-----+--------------------+ |
            | | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
            | |     +-------------------------+ |                  | |     +--------------------+ |
            | |     |                         | |                  | |     | UserProfilePreview | |
            | +-----+-------------------------+ |                  | +-----+--------------------+ |
            +-----------------------------------+                  +------------------------------+
            </pre>
        </Alert>
        <Alert type="success">4、嵌套路由的模板：
            <pre>
                 div
                    h1 User Settings /h1
                    NavBar/
                    router-view/
                    outer-view name="helper" /
                /div
            </pre>
            <!-- UserSettings.vue -->
        </Alert>
        <Alert type="success">5、路由的设计：
            <pre class="blue">
              {
                path: '/settings',
                // 你也可以在顶级路由就配置命名视图
                component: UserSettings,
                children: [{
                    path: 'emails',
                    component: UserEmailsSubscriptions
                }, {
                    path: 'profile',
                    components: {
                    default: UserProfile,
                    helper: UserProfilePreview
                    }
                }]
               }
            </pre>
        </Alert>
    </Card>
</template>
<script>
export default {
  data() {
    return {
      path: "veurouter"
    };
  }
};
</script>
<style scoped>

</style>
