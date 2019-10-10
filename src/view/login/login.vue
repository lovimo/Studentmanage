
<template>
<div>
  <canvas id="canvas" />
  <div class="login-container">
    <div class="login-form">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        auto-complete="on"
        label-position="left"
      >
        <div class="logo-container">
          <img src="@/assets/img/helloweb.jpg" class="log">
        </div>

        <el-form-item prop="username">
          <span class="svg-container">账户 ：</span>
          <el-input
            v-model.trim="loginForm.username"
            placeholder="请填写用户名"
            name="username"
            type="text"
            autofocus="true"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">密码 ：</span>
          <el-input
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请填入密码"
            name="password"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <!-- <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/> -->
            <i class="el-icon-view" :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"></i>
          </span>
        </el-form-item>
        <!--    <span class="remember">
          <el-checkbox v-model="checked">记住我</el-checkbox>
        </span> -->

        <!-- 验证码 -->
        <el-form-item prop="captcha" style="margin-right:120px">
          <span class="svg-container">验证码 ：</span>
          <div class="captcha-input">
            <el-input
            v-model="loginForm.captcha"
              placeholder="请填写验证码"
              name="captcha"
              type="text"
              autofocus="true"
              auto-complete="on"
            />
          </div>
          <span class="ccode" @click="generatedCode">{{ ccode}}</span>
          <span class="show-pwd" @click="handleCode">
            <i class="el-icon-refresh"></i>
          </span>

        </el-form-item>

        <el-button
          :loading="loading"
          style="margin-bottom:30px;margin-right:50px"
          @click="handleLogin"
        >登 录</el-button>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
import { vaildPassword } from '@/utils/check'

import {
  loginByUsername
}
from '@/api/login/login'

export default {
  name: 'Login',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else {
        if (!vaildPassword(value)) {
          callback(
            new Error(
              '请输入正确的密码格式，包括字母（包括大小写），数字及其特殊字符'
            )
          )
        } else {
          callback()
        }
      }
    }
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validateCaptcha = (rule, value, callback) => {
      // 将用户输入数字转成字符串，同时转换成大写
      value = value + ''
      if (value.length > 4) {
        value = value.substring(0, 4)
        this.$set(this.loginForm, 'captcha', value)
      }
    }
    return {
      queryPassword:'',
      queryName:'',
      ccode:'',
      redirect: undefined,
      checked: 0,
      loading: false,
      passwordType: 'password',
      // captchaSrc:'/api/code/image?d='+Math.random(),
      loginForm: {
        username: '',
        password: '',
        captcha:''
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ],
        captcha: [
          { required: true, trigger: 'blur', validator: validateCaptcha }
        ]
      }
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
    }
  },
  mounted() {
    !
function () {
  function n(n, e, t) {
    return n.getAttribute(e) || t
  }

  function e(n) {
    return document.getElementsByTagName(n)
  }

  function t() {
    var t = e("script"),
      o = t.length,
      i = t[o - 1];
    return {
      l: o,
      z: n(i, "zIndex", -1),
      o: n(i, "opacity", .5),
      c: n(i, "color", "0,0,0"),
      n: n(i, "count", 99)
    }
  }

  function o() {
    a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }

  function i() {
    r.clearRect(0, 0, a, c);
    var n, e, t, o, m, l;
    s.forEach(function (i, x) {
        for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e],
          null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
      }),
      x(i)
  }
  var a, c, u, m = document.createElement("canvas"),
    d = t(),
    l = "c_n" + d.l,
    r = m.getContext("2d"),
    x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (n) {
      window.setTimeout(n, 1e3 / 45)
    },
    w = Math.random,
    y = {
      x: null,
      y: null,
      max: 2e4
    };
  m.id = l,
    m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o,
    e("body")[0].appendChild(m),
    o(),
    window.onresize = o,
    window.onmousemove = function (n) {
      n = n || window.event,
        y.x = n.clientX,
        y.y = n.clientY
    },
    window.onmouseout = function () {
      y.x = null,
        y.y = null
    };
  for (var s = [], f = 0; d.n > f; f++) {
    var h = w() * a,
      g = w() * c,
      v = 2 * w() - 1,
      p = 2 * w() - 1;
    s.push({
      x: h,
      y: g,
      xa: v,
      ya: p,
      max: 6e3
    })
  }
  u = s.concat([y]),
    setTimeout(function () {
        i()
      },
      100)
}();
    this.generatedCode()
  },
  methods: {
    /**
     * 显示密码
     */
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    generatedCode () {
      const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      let code = ''
      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * 36)
        code += random[index]
      }
      this.ccode = code
    },
        // 点击生成验证码
    handleCode () {
      this.generatedCode()
    },
        // 判断验证码是否输入准确
    checkCode () {
      let captcha = this.loginForm.captcha
      captcha = captcha.toUpperCase()
      let ccode = this.ccode
      ccode = ccode.toUpperCase()
      if (captcha !== ccode) {
        this.$message.error('Please enter the correct verification code!')
        this.$set(this.loginForm, 'captcha', '')
      } else {
        return true
      }
    },
    /**
     * 登录
     */
    handleLogin() {
      console.log(5555)
      let codestatus = this.checkCode()
      if(codestatus){
          console.log(66666)
          loginByUsername(this.loginForm.username,this.loginForm.password).then(res => {
            if(res.code = 200){
              console.log(777)
              this.$message({
              message:'登陆成功',
              type:'success'
              });
              this.$store.state.token=res.data;
              this.$router.push({path:'/firstpage',query:{
                quaryName : this.loginForm.username,
                queryPassword : this.loginForm.password
              }});
              // this.queryName = this.$route.query.queryName;
              // this.queryPassword = this.$route.query.queryPassword;
            }
            
          }
      )
      }
      else {
        this.$message.error('请证明你不是爬虫(●°u°●)​ 」')
        this.$set(this.loginForm, 'captcha', '')
        // this.$set(this.loginForm, 'password', '')
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
// 修复chrome自动填充后背景为黄色
$light_gray: rgb(77, 72, 72);
$cursor: rgb(54, 50, 50);
.login-container {
  .el-input {
    background: transparent;
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      border-bottom: 1px solid #000 !important;
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    .el-form-item__content {
      margin-left: 50px;
      margin-right: 50px;
      .el-input__inner {
        background-color: #fff;
        &:focus {
          background-color: #fff;
        }
      }
    }
  }
  .el-button {
    background-color: #35d38a;
    font-size: 18px;
    width: 403px;
    margin-left: 48px;
    margin-bottom: 40px;
    margin-top: 20px;
    &:hover {
      background-color: #38bd80;
      color: #fff;
    }
    color: #fff;
  }
  .remember {
    .el-checkbox__label {
      font-size: 18px;
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: relative;
  width:100%;
  height: 100%;
  background-color: #fff;
  background-image: url("../../assets/img/bg-pattern.png");
  background-image-repact: no-repact;
  .login-form {
    border-style: solid; 
    border-width: 1px;
    position: fixed;
    border-radius: 10px;
    top: 45%;
    right: 50%;
    transform:translate(50%, -50%);
    -moz-transform:translate(50%,-50%);
    -webkit-transform:translate(50%, -50%);
    width: 500px;
    height: 400px;
    background-color: #fff;
    .logo-container {
      width: 100%;
      margin-top: 0px;
      .log {
        width: 110px;
        margin-left: 2%;
      }
    }
    .show-pwd {
      color: #000;
      .el-icon-view {
        position: absolute;
        right: 3px;
        top: 20px;
        font-size: 16px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
  .remember {
    margin-left: 50px;
  }


 .captcha-input {
    display: inline-block;
    width:50%;
  }
  .captcha-img {
    background-color: #38bd80;
    width: 100px;
    height: 30px;
  }
  .el-icon-refresh:before {
    font-size: 1.1rem;
    margin-left: 0.5rem;
    cursor: pointer;
}
}
</style>
