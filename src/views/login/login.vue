<template>
<div class="login-layout">
    <!-- <div class="login-logo"></div> -->
    <div class='login-box'>
        <div class="loginDiv">
            <div class="login-tip">欢迎登录</div>
            <Form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" inline>
                <Form-item prop="username">
                    <Input type="text" class="my-input" name="username" v-model.trim="loginForm.username" placeholder="请输入工号" size="large">
                    <span slot="prepend" class="username"></span>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" class="my-input" name="password" v-model.trim="loginForm.password" @on-enter="handleSubmit('loginForm')" placeholder="请输入密码" size="large">
                    <span slot="prepend" class="pwd"></span>
                    </Input>
                </Form-item>
                <Form-item prop="yzm">
                    <Input type="text" class="my-input yzm-input" name="code" :maxlength="6" v-model.trim="loginForm.code" @on-enter="handleSubmit('loginForm')" placeholder="请输入验证码" size="large">
                    <span slot="prepend" class="code"></span>
                    </Input>
                    <div class="fsyzm-btn" v-if="!toCountDown" @click="getCode">获取验证码</div>
                    <div class="fsyzm-btn" :class="{togary: toCountDown}" v-else>{{time}}S后重新获取</div>
                </Form-item>
                <div>
                    <Form-item style='display:block;'>
                        <Button type="primary" class="login-btn" size="large" long :loading="isLoading" @click="handleSubmit('loginForm')">
                                <span v-if="!isLoading">登 录</span>
                                <span v-else>Loading...</span>
                            </Button>
                    </Form-item>
                </div>
            </Form>
        </div>
    </div>

</div>
</template>
<script>
import http from "../../utils/http";
console.log(2222, http);
export default {
    data() {
        return {
            loginForm: {
                username: "",
                password: "",
                code: ""
            },
            isLoading: false,
            loginRules: {
                username: [{
                    required: true,
                    message: "请填写工号",
                    trigger: "blur"
                }],
                code: [{
                    required: true,
                    message: "请填写验证码",
                    trigger: "blur"
                }],
                password: [{
                        required: true,
                        message: "请填写密码",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        min: 5,
                        message: "密码长度不能少于5位",
                        trigger: "blur"
                    }
                ]
            },
            toCountDown: false,
            time: 59,
            timer: null // 定时器
        };
    },
    methods: {
        countTime() {
            var that = this;
            this.toCountDown = true;
            this.timer = setInterval(function() {
                that.time -= 1;
                if (that.time <= 0) {
                    clearInterval(that.timer);
                    that.time = 59;
                    that.toCountDown = false;
                }
            }, 1000);
        },
        getCode() {
            if (!this.loginForm.username) {
                this.$Message.error("用户名不能为空！");
                return false;
            }
            if (!this.loginForm.password) {
                this.$Message.error("密码不能为空！");
                return false;
            }
            sendCode(this.loginForm)
                .then(res => {
                    console.log(res);
                    if (res.data.code == 0) {
                        this.$Message.success("发送成功！");
                        this.countTime();
                    } else {
                        this.$Message.error(res.data.msg);
                    }
                })
                .catch(err => {
                    this.$Message.error("系统异常，请重试！");
                });
        },
        handleSubmit(name) {
            if (!this.loginForm.code) {
                this.$Message.error("验证码不能为空！");
                return false;
            }
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.isLoading = true;
                    console.log(this.loginForm);
                    this.login();
                    // 这里面直接嵌套await会出错
                } else {
                    this.$Message.error("表单验证失败");
                }
            });
        },
        async login() {
            const res = await http("/user/login", this.loginForm);
            if (res.data.code === 0) {
                const token = res.data.data.token;
                this.isLoading = false;
                sessionStorage.setItem("isLogin", true);
                const userDetails = {
                    upwd: this.loginForm.password,
                    username: res.data.data.user.name,
                    loginId: res.data.data.user.empid,
                    oaPwd: res.data.data.user.oaPwd,
                    userId: res.data.data.user.id,
                    companyId: res.data.data.user.companyId
                };
                localStorage.setItem("userDetails", JSON.stringify(userDetails));
                localStorage.setItem("token", token);
                clearInterval(this.timer);
                this.$router.push("/");
            } else {
                this.isLoading = false;
            }
        }
    }
};
</script>
<style>
.my-input .ivu-input.ivu-input-large {
    height: 48px;
    width: 246px;
    font-size: 16px;
}

.fsyzm-btn {
    position: absolute;
    right: 0px;
    top: 1px;
    width: 90px;
    background: #2d8cf0;
    height: 48px;
    line-height: 46px;
    z-index: 2;
    cursor: pointer;
    color: #fff;
    font-size: 12px;
}

.loginDiv .ivu-form-item {
    margin-bottom: 24px;
}

.loginDiv .my-input .ivu-form-item-error .ivu-input-group-append,
.ivu-form-item-error .ivu-input-group-prepend {
    background: #f0f5f9;
}

.my-input input {
    font-size: 28px;
}
</style>

<style scoped>
.login-tip {
    font-size: 24px;
    display: inline-block;
    line-height: 2;
    color: #333;
    border-bottom: 4px solid #176ce0;
    margin-bottom: 48px;
}

.username {
    display: inline-block;
    margin-left: 16px;
    margin-right: 16px;
    width: 27px;
    height: 27px;
    background: url("./username.png") no-repeat;
    background-size: 100% 100%;
}

.pwd {
    display: inline-block;
    width: 27px;
    height: 30px;
    margin-left: 16px;
    margin-right: 16px;
    background: url("./pwd.png") no-repeat;
    background-size: 100% 100%;
}

.code {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 16px;
    margin-right: 16px;
    background: url("./yzm.png") no-repeat;
    background-size: 100% 100%;
}

.my-input {
    background: #f0f5f9;
}

.login-btn {
    margin-top: 9.6px;
    height: 64px;
    width: 320px;
    font-size: 24px;
}

.login-layout {
    width: 100%;
    height: 100%;
    background: url("./ws_login.jpg") no-repeat;
    min-width: 1152px;
    min-height: 648px;
    background-size: cover;
}


/* .login-logo {
    position: fixed;
    top: 50px;
    left: 50px;
    width: 24.114%;
    height: 6.851%;
    background: url('./logo.png') no-repeat;
    background-size: 100% 100%;
} */

.login-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 1057px;
    height: 545.6px;
    background: url("./login_box.png") no-repeat;
    background-size: 100%;
}

.loginDiv {
    position: absolute;
    text-align: center;
    z-index: 999;
    width: 320px;
    bottom: 64px;
    right: 148px;
}

.login-title {
    text-align: center;
    color: #fff;
    font-size: 36px;
    margin-bottom: 20px;
}

.togary {
    background: #877373;
    color: #fff;
}
</style>
