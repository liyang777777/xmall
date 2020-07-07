<template>
  <!-- 注册 -->
  <div>
    <div class="All">
      <div class="title">M</div>
      <div class="box">使用 XMall 账号 登录官网</div>
      <div>
        <input type="username" placeholder="账号" class="ipt1">
      </div>
      <div>
        <input type="password" placeholder="密码" class="ipt2">
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
.box {
  top: 120px;
  left: 140px;
  position: absolute;
  font-size: 18px;
}
.ipt1 {
  width: 200px;
  height: 50px;
  position: absolute;
  top: 160px;
  left: 140px;
}
</style>