<template>
  <!-- 登录 -->
  <div>
    <div class="All">
      <div class="title">M</div>
      <div class="All1">使用 XMall 账号 登录官网</div>
      <div class="ipt1">
        <Input v-model="username" placeholder="账号" clearable style="width: 300px" />
      </div>
      <div class="ipt2">
        <Input v-model="password" placeholder="密码" clearable style="width: 300px" type="password" />
      </div>
      <div class="ipt3">
        <div ref="vaptcha" style="width:300px;height:36px">
          <div class="vaptcha-init-main">
            <div class="vaptcha-init-loading">
              <a href="https://www.vaptcha.com/" target="_blank">
                <img src="https://cdn.vaptcha.com/vaptcha-loading.gif" />
              </a>
              <span class="vaptcha-text">VAPTCHA启动中...</span>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box1">
          <Checkbox v-model="single">记住密码</Checkbox>
        </div>
        <div class="box2" @click="Register">注册 XMall 账号 |</div>
        <div class="box3" @click="Forget">忘记密码?</div>
      </div>
      <button class="btn1" @click="login">登录</button>
      <button class="btn2" @click="retur">返回</button>
       <div class="clk">
          <div class="click1"></div>
        </div>
         <div class="clk">
          <div class="click2">
           其他账号登录:
            <div>
              <img src="http://xmall.exrick.cn/static/images/other-login.png" alt="">
            </div>
            
          </div>
        </div>
    </div>
  </div>
</template>

<script>
const extend = function(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
};
export default {
  name: "",
  props: {
    type: {
      type: String,
      default: "click"
    },
    scene: {
      type: [String, Number],
      default: 0
    },
    vpStyle: {
      type: String,
      default: "dark"
    },
    color: {
      type: String,
      color: "#3C8AFF"
    },
    lang: {
      type: String,
      default: "auto"
    }
  },
  components: {},
  data() {
    return {
      username: "",
      password: "",
      single: false
    };
  },
  methods: {
    loadV2Script() {
      if (typeof window.vaptcha === "function") {
        //如果已经加载就直接放回
        return Promise.resolve();
      } else {
        return new Promise(resolve => {
          var script = document.createElement("script");
          script.src = "https://v.vaptcha.com/v3.js";
          script.async = true;
          script.onload = script.onreadystatechange = function() {
            if (
              !this.readyState ||
              this.readyState == "loaded" ||
              this.readyState == "complete"
            ) {
              resolve();
              script.onload = script.onreadystatechange = null;
            }
          };
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      }
    },
    login() {
      this.$api
        .login({ username: this.username, password: this.password })
        .then(res => {
          if (this.password !== this.rpassword) {
            this.$Message.error(res.msg);
          } else if (this.username) {
            this.$Message.error(res.msg);
          } else {
            this.$Message.success(res.msg);
          }
        })
        .catch(err => {});
    },
    register() {
        this.$router.push({
            path: "/register",
            query: { username: this.username, password: this.password }
          });
    }
  },
  mounted() {
    var config = extend(
      {
        vid: "5efc030de988dd2fc1b8e91b",
        container: this.$refs.vaptcha,
        style: this.vpStyle
      },
      this.$props
    );
    this.loadV2Script().then(() => {
      window.vaptcha(config).then(obj => {
        this.$emit("input", obj);
        obj.render();
      });
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.All {
  width: 450px;
  height: 600px;
  background: beige;
  left: 400px;
  top: 100px;
  position: relative;
}
.title {
  width: 70px;
  height: 50px;
  font-size: 30px;
  font-weight: 999;
  left: 200px;
  top: 50px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  background: rgb(247, 8, 40);
  position: absolute;
}
.All1 {
  width: 300px;
  top: 120px;
  left: 140px;
  position: absolute;
  font-size: 18px;
}
.ipt1 {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 160px;
  left: 110px;
}
.ipt2 {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 220px;
  left: 110px;
}
.ipt3 {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 280px;
  left: 110px;
}
.box {
  display: flexs;
}
.box1 {
  width: 100px;
  height: 50px;
  position: absolute;
  top: 350px;
  left: 110px;
}
.box2 {
  width: 130px;
  height: 50px;
  position: absolute;
  top: 350px;
  left: 215px;
  color: cornflowerblue;
}
.box3 {
  width: 100px;
  height: 50px;
  position: absolute;
  top: 350px;
  left: 350px;
  color: cornflowerblue;
}
.btn1 {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 400px;
  left: 110px;
}
.btn2 {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 470px;
  left: 110px;
}
.clk {
  width: 100%;
  display: flex;
  justify-content: center;
}
.click1 {
  width: 320px;
  height: 40px;
  margin-top: 520px;
  margin-left: 50px;
  border-bottom: 1px solid rgb(150, 150, 150);
}
.click2 {
  width: 320px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
</style>