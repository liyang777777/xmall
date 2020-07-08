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
        <div class="box2" @click="dv">注册 XMall 账号 |</div>
        <div class="box3">忘记密码?</div>
      </div>
      <button class="btn1">登录</button>
      <button class="btn2">返回</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username,
      password
    };
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
</style>