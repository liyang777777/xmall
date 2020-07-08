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
          <Radio v-model="single">Radio</Radio>我已阅读并理解
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

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
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

.box {
  top: 120px;
  left: 170px;
  position: absolute;
  font-size: 18px;
}
.ipt1 {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 160px;
  left: 80px;
}
.ipt2 {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 220px;
  left: 80px;
}
.ipt3 {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 280px;
  left: 80px;
}
.ipt4 {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 340px;
  left: 80px;
}
.btn {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 450px;
  left: 80px;
}
.box1 {
  width: 300px;
  height: 50px;
  position: absolute;
  top: 410px;
  left: 80px;
}
</style>