<template>
  <!-- 注册 -->
  <div>
    <div class="All">
      
      <div class="box">注册 XMall 账号</div>
      <div>
        <input type="username" placeholder="账号" class="ipt1">
      </div>
      <div>
        <input type="password" placeholder="密码" class="ipt2">
      </div>
      <div>
        <input type="password" placeholder="重复密码" class="ipt3">
      </div>
      <div>
        <input type="text" class="ipt4">
      </div>
      <div>
        <div>记住密码</div>
        <div></div>
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
</style>