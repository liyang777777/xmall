<template>
  <div>
    <div class="box">
      <div class="register">
        <div class="top">
          <div class="top1">注册Xmall账号</div>
        </div>
        <div class="b-input">
          <Input v-model="username" placeholder="账号" clearable style="width: 300px" />
        </div>
        <div class="b-input">
          <Input
            v-model="password"
            placeholder="密码"
            clearable
            style="width: 300px"
            type="password"
          />
        </div>
        <div class="b-input">
          <Input
            v-model="rpassword"
            placeholder="重复密码"
            clearable
            style="width: 300px"
            type="password"
          />
        </div>
        <div class="vpat">
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
        <div class="b-input">
          <Checkbox v-model="single"></Checkbox>我已阅读并理解
          <a href>法律声明</a>和
          <a href>隐私条款</a>
        </div>
        <div class="clk">
          <div v-if="this.username === ''||this.password === ''" class="click">
            <Button type="info" long disabled>注册</Button>
          </div>
          <div v-else class="click" @click="register">
            <Button type="info" long>注册</Button>
          </div>
        </div>
        <div class="clk">
          <div class="click1"></div>
        </div>
        <div class="clk">
          <div class="click2">
            如果您已有Xmall账号可以点此
            <a href="/login">登录</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
fff
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
      rpassword: "",
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

    register() {
      this.$api
        .register({ username: this.username, password: this.password })
        .then(res => {
          if (this.password !== this.rpassword) {
            this.$Message.error(res.msg);
          } else if (this.username) {
            this.$Message.error(res.msg);
          } else {
            this.$Message.success(res.msg);
          }
          this.$router.push({
            path: "/login",
            query: { username: this.username, password: this.password }
          });
        })
        .catch(err => {});
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
.box {
  width: 100%;
  height: 100%;
  background: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;
}
.register {
  width: 450px;
  height: 580px;
  background: white;
  box-shadow: 0 8px 16px 0 #ddd;
  margin-top: 30px;
  border-radius: 10px;
}
.top {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(150, 150, 150);
}
.top1 {
  width: 350px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
}
.b-input {
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.vpat {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.clk {
  width: 100%;
  display: flex;
  justify-content: center;
}
.click {
  width: 320px;
  height: 40px;
  margin-top: 15px;
}
.click1 {
  width: 320px;
  height: 40px;
  margin-top: 15px;
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
